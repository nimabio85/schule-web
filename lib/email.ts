export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

export async function sendContactEmail(payload: ContactPayload): Promise<void> {
  const smtpHost = process.env.SMTP_HOST ?? "Not publicly visible";
  const smtpPort = process.env.SMTP_PORT ?? "Not publicly visible";
  const smtpUser = process.env.SMTP_USER ?? "Not publicly visible";

  console.log("Mock SMTP send", { smtpHost, smtpPort, smtpUser, payload });
}

