import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { Resend } from "resend";

const ContactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(255),
  subject: z.string().max(150).optional(),
  message: z.string().min(1).max(1000),
});

export const sendContactEmail = createServerFn({ method: "POST" })
  .validator(ContactSchema)
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY is not configured on the server.");
    }

    const resend = new Resend(apiKey);
    const subject = data.subject?.trim() || `Portfolio message from ${data.name}`;

    const { error } = await resend.emails.send({
      // Resend's test sender — swap for a verified domain sender once you add one
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_RECEIVER_EMAIL ?? "your.actual.email@gmail.com",
      replyTo: data.email,
      subject,
      text: `From: ${data.name} <${data.email}>\n\n${data.message}`,
    });

    if (error) {
      throw new Error(error.message);
    }

    return { success: true as const };
  });
