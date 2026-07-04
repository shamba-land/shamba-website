"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { requestDemo, type DemoRequestState } from "@/app/actions/demo-request";

export function DemoRequestForm() {
  const [state, formAction, isPending] = useActionState<
    DemoRequestState,
    FormData
  >(requestDemo, null);

  if (state?.success) {
    return (
      <div className="mx-auto max-w-md">
        <div className="rounded-lg border-2 border-secondary/30 bg-secondary/10 p-6 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
          <svg
            className="mx-auto mb-3 h-10 w-10 text-secondary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-lg font-semibold text-foreground">
            Demo request received
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Check your inbox for a confirmation. We&apos;ll be in touch shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg">
      <form action={formAction} className="flex flex-col gap-3 sm:flex-row">
        {/* Honeypot: hidden from real users; bots that fill every field get
            caught server-side. Not a real input, so keep it out of tab order
            and autofill. */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />
        <Input
          type="email"
          name="email"
          placeholder="Enter your email address"
          required
          className="h-auto flex-1 text-base px-5 py-4 bg-background/80 border-2 border-border focus:border-primary"
          disabled={isPending}
        />
        <Button
          type="submit"
          size="lg"
          className="text-base px-8 py-4 h-auto whitespace-nowrap"
          disabled={isPending}
        >
          {isPending ? "Sending..." : "Request Demo"}
        </Button>
      </form>
      {state?.success === false && (
        <p className="mt-2 text-sm text-destructive">{state.message}</p>
      )}
    </div>
  );
}
