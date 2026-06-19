"use server";

import { z } from "zod";
import { Resend } from "resend";
import { Client as HubSpotClient } from "@hubspot/api-client";
import { WaitlistConfirmation } from "@/emails/WaitlistConfirmation";

const resend = new Resend(process.env.RESEND_API_KEY);

// HubSpot is optional, if the token isn't set the demo-request still
// lands in Resend + email. Lifecycle / lead-status / segmentation are
// owned by HubSpot CRM workflows downstream; we only write the
// standard `email` property here.
const hubspot = process.env.HUBSPOT_ACCESS_TOKEN
  ? new HubSpotClient({ accessToken: process.env.HUBSPOT_ACCESS_TOKEN })
  : null;

const waitlistSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export type WaitlistState = {
  success: boolean;
  message: string;
} | null;

export async function joinWaitlist(
  _prevState: WaitlistState,
  formData: FormData
): Promise<WaitlistState> {
  const parsed = waitlistSchema.safeParse({
    email: formData.get("email"),
  });

  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.issues[0].message,
    };
  }

  const { email } = parsed.data;

  try {
    // Store contact in Resend Audience (acts as the demo-request
    // database for confirmation + nurture emails).
    await resend.contacts.create({
      email,
      audienceId: process.env.RESEND_AUDIENCE_ID!,
    });

    // Mirror to HubSpot CRM as a Contact. Standard `email` property
    // only, no lifecyclestage / hs_lead_status / custom-tag writes
    // from here. HubSpot workflows pick the contact up and own
    // lifecycle from there. Best-effort: a HubSpot outage shouldn't
    // block the user-facing flow.
    if (hubspot) {
      try {
        await hubspot.crm.contacts.basicApi.create({
          properties: { email },
          associations: [],
        });
      } catch (hubspotError) {
        // Common case: the contact already exists (409). Surface in
        // logs but don't fail the request, Resend has the record,
        // HubSpot can de-dupe later.
        console.warn("HubSpot contact create failed:", hubspotError);
      }
    }

    // Send branded auto-reply to the user
    await resend.emails.send({
      from: "Shamba.land <hello@shamba.land>",
      to: email,
      subject: "Thanks for requesting a Shamba demo",
      react: WaitlistConfirmation({ email }),
    });

    // Notify the team
    await resend.emails.send({
      from: "Demo requests <hello@shamba.land>",
      to: "info@shamba.land",
      subject: `New demo request: ${email}`,
      text: `New demo request on shamba.land:\n\nEmail: ${email}\nTime: ${new Date().toISOString()}`,
    });

    return {
      success: true,
      message: "Thanks, we'll be in touch shortly.",
    };
  } catch (error) {
    console.error("Demo request error:", error);
    return {
      success: false,
      message:
        "Something went wrong. Please try again or email us at info@shamba.land.",
    };
  }
}
