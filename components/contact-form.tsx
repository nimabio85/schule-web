"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Mail, MessageSquare, Phone, User } from "lucide-react";
import { initialContactState, submitContactForm } from "@/app/actions";
import { wobblyMd, wobblySm } from "@/lib/design";

const interestOptions = [
  "Schulabschluss",
  "Berufsausbildung",
  "Berufsorientierung",
  "Weiterbildung",
  "Integrationskurs",
  "AEVO",
  "BVJ Sprache"
] as const;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn-primary" style={{ borderRadius: wobblySm }} disabled={pending}>
      {pending ? "Senden..." : "Jetzt anmelden"}
    </button>
  );
}

export function ContactForm() {
  const [state, action] = useActionState(submitContactForm, initialContactState);

  return (
    <form action={action} className="card rotate-1 space-y-4" style={{ borderRadius: wobblyMd }} noValidate>
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div>
        <label htmlFor="name" className="text-sm font-medium inline-flex items-center gap-3">
          <User size={16} strokeWidth={2.8} />
          Name
        </label>
        <input id="name" name="name" className="input" required aria-invalid={Boolean(state.errors?.name)} />
        {state.errors?.name ? <p className="mt-1 text-xs text-red-700">{state.errors.name}</p> : null}
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium inline-flex items-center gap-3">
          <Mail size={16} strokeWidth={2.8} />
          Email
        </label>
        <input id="email" name="email" type="email" className="input" required aria-invalid={Boolean(state.errors?.email)} />
        {state.errors?.email ? <p className="mt-1 text-xs text-red-700">{state.errors.email}</p> : null}
      </div>

      <div>
        <label htmlFor="phone" className="text-sm font-medium inline-flex items-center gap-3">
          <Phone size={16} strokeWidth={2.8} />
          Phone
        </label>
        <input id="phone" name="phone" type="tel" className="input" required aria-invalid={Boolean(state.errors?.phone)} />
        {state.errors?.phone ? <p className="mt-1 text-xs text-red-700">{state.errors.phone}</p> : null}
      </div>

      <div>
        <label htmlFor="interest" className="text-sm font-medium">Course interest</label>
        <select id="interest" name="interest" className="input" defaultValue="" required aria-invalid={Boolean(state.errors?.interest)}>
          <option value="" disabled>Bitte waehlen</option>
          {interestOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        {state.errors?.interest ? <p className="mt-1 text-xs text-red-700">{state.errors.interest}</p> : null}
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium inline-flex items-center gap-3">
          <MessageSquare size={16} strokeWidth={2.8} />
          Message
        </label>
        <textarea id="message" name="message" rows={5} className="input" required aria-invalid={Boolean(state.errors?.message)} />
        {state.errors?.message ? <p className="mt-1 text-xs text-red-700">{state.errors.message}</p> : null}
      </div>

      <div className="flex items-center justify-between gap-3">
        <SubmitButton />
        <p className={`text-sm ${state.success ? "text-green-700" : "text-pencil"}`} aria-live="polite">
          {state.message}
        </p>
      </div>
    </form>
  );
}


