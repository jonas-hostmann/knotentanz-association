import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Bitte gib deinen vollständigen Namen ein."),
  email: z.string().email("Bitte gib eine gültige E-Mail-Adresse ein."),
  subject: z.string().min(3, "Der Betreff ist zu kurz."),
  message: z.string().min(20, "Die Nachricht sollte mindestens 20 Zeichen lang sein."),
  privacy: z.literal(true, {
    errorMap: () => ({ message: "Bitte akzeptiere die Datenschutzbestimmungen." }),
  }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
