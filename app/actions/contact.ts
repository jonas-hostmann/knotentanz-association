"use server";

import { submitContactForm as submitContactFormWp } from "@/lib/wordpress";

export async function submitContactAction(values: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  return submitContactFormWp(values);
}
