"use server";

import { z } from "zod";
import { Resend } from "resend";
import { Client as HubSpotClient } from "@hubspot/api-client";
import { WaitlistConfirmation } from "@/emails/WaitlistConfirmation";

const resend = new Resend(process.env.RESEND_API_KEY);

// HubSpot is optional. If the token is absent the request still lands in
// Resend + email; HubSpot CRM workflows own lifecycle downstream.
const hubspot = process.env.HUBSPOT_ACCESS_TOKEN
  ? new HubSpotClient({ accessToken: process.env.HUBSPOT_ACCESS_TOKEN })
  : null;

const demoRequestSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export type DemoRequestState = {
  success: boolean;
  message: string;
} | null;

const SUCCESS_MESSAGE = "Thanks, we'll be in touch shortly.";

export async function requestDemo(
  _prevState: DemoRequestState,
  formData: FormData,
): Promise<DemoRequestState> {
  // Honeypot: a hidden field humans never see. If it is filled, a bot sent
  // the form. Return a fake success so the bot learns nothing.
  if (((formData.get("company") as string | null) ?? "").trim() !== "") {
    return { success: true, message: SUCCESS_MESSAGE };
  }

  const parsed = demoRequestSchema.safeParse({ email: formData.get("email") });
  if (!parsed.success) {
    return { success: false, message: parsed.error.issues[0].message };
  }
  const { email } = parsed.data;

  try {
    // Store contact in Resend Audience (confirmation + nurture emails).
    await resend.contacts.create({
      email,
      audienceId: process.env.RESEND_AUDIENCE_ID!,
    });

    // Mirror to HubSpot CRM and drop an actionable follow-up task so a demo
    // request lands in the CRM queue, not only in email. Best-effort.
    if (hubspot) {
      try {
        await hubspot.crm.contacts.basicApi.create({
          properties: { email },
          associations: [],
        });

        await hubspot.crm.objects.tasks.basicApi.create({
          properties: {
            hs_task_subject: `Demo request: ${email}`,
            hs_task_body: `New demo request from shamba.land\nEmail: ${email}\nTime: ${new Date().toISOString()}`,
            hs_task_status: "NOT_STARTED",
            hs_task_priority: "HIGH",
            hs_timestamp: Date.now().toString(),
            ...(process.env.HUBSPOT_OWNER_ID
              ? { hubspot_owner_id: process.env.HUBSPOT_OWNER_ID }
              : {}),
          },
          associations: [],
        });
      } catch (hubspotError) {
        console.warn("HubSpot write failed:", hubspotError);
      }
    }

    // Branded auto-reply to the requester.
    await resend.emails.send({
      from: "Shamba.land <hello@shamba.land>",
      to: email,
      subject: "Thanks for requesting a Shamba demo",
      react: WaitlistConfirmation({ email }),
    });

    // Notify the team.
    await resend.emails.send({
      from: "Demo requests <hello@shamba.land>",
      to: "info@shamba.land",
      subject: `New demo request: ${email}`,
      text: `New demo request on shamba.land:\n\nEmail: ${email}\nTime: ${new Date().toISOString()}`,
    });

    return { success: true, message: SUCCESS_MESSAGE };
  } catch (error) {
    console.error("Demo request error:", error);
    return {
      success: false,
      message:
        "Something went wrong. Please try again or email us at info@shamba.land.",
    };
  }
}
