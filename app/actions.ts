"use server";

import { sendContactEmail } from "@/lib/email";
import { isValidEmail, sanitize } from "@/lib/validation";

export type ContactState = {
  success: boolean;
  message: string;
  errors?: Partial<Record<"name" | "email" | "phone" | "interest" | "message", string>>;
};

export const initialContactState: ContactState = {
  success: false,
  message: ""
};

export async function submitContactForm(_: ContactState, formData: FormData): Promise<ContactState> {
  const honeypot = String(formData.get("website") ?? "").trim();
  if (honeypot) {
    return { success: false, message: "Anfrage konnte nicht verarbeitet werden." };
  }

  const name = sanitize(String(formData.get("name") ?? ""));
  const email = sanitize(String(formData.get("email") ?? ""));
  const phone = sanitize(String(formData.get("phone") ?? ""));
  const interest = sanitize(String(formData.get("interest") ?? ""));
  const message = sanitize(String(formData.get("message") ?? ""));

  const errors: ContactState["errors"] = {};
  if (name.length < 2) errors.name = "Bitte Name eingeben.";
  if (!isValidEmail(email)) errors.email = "Bitte gueltige E-Mail eingeben.";
  if (phone.length < 3) errors.phone = "Bitte Telefonnummer eingeben.";
  if (!interest) errors.interest = "Bitte Kursinteresse auswaehlen.";
  if (message.length < 5) errors.message = "Bitte Nachricht eingeben.";

  if (Object.keys(errors).length > 0) {
    return { success: false, message: "Bitte Eingaben pruefen.", errors };
  }

  await sendContactEmail({ name, email, phone, interest, message });

  return { success: true, message: "Ihre Anfrage wurde gesendet." };
}

