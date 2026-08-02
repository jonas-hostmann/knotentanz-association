"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactFormSchema, type ContactFormValues } from "@/lib/validation";
import { submitContactAction } from "@/app/actions/contact";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = React.useState<{ success: boolean; message: string } | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(data: ContactFormValues) {
    const result = await submitContactAction({
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    });
    setStatus(result);
    if (result.success) {
      reset();
    }
  }

  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-2xl">
          <SectionHeader
            align="center"
            eyebrow="Kontakt"
            title="Schreiben Sie uns"
            description="Haben Sie Fragen zu unseren Events oder möchten Sie mehr über die Knotentanz Association erfahren?"
          />

          <form onSubmit={handleSubmit(onSubmit)} className="mt-12 space-y-6" noValidate>
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                Name
              </label>
              <Input id="name" placeholder="Ihr vollständiger Name" aria-invalid={errors.name ? "true" : "false"} {...register("name")} />
              {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                E-Mail
              </label>
              <Input
                id="email"
                type="email"
                placeholder="ihre@email.at"
                aria-invalid={errors.email ? "true" : "false"}
                {...register("email")}
              />
              {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium text-foreground">
                Betreff
              </label>
              <Input id="subject" placeholder="Worum geht es?" aria-invalid={errors.subject ? "true" : "false"} {...register("subject")} />
              {errors.subject && <p className="mt-2 text-sm text-red-400">{errors.subject.message}</p>}
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                Nachricht
              </label>
              <Textarea
                id="message"
                placeholder="Ihre Nachricht..."
                aria-invalid={errors.message ? "true" : "false"}
                {...register("message")}
              />
              {errors.message && <p className="mt-2 text-sm text-red-400">{errors.message.message}</p>}
            </div>

            <div className="flex items-start gap-3">
              <input
                id="privacy"
                type="checkbox"
                className="mt-1 h-4 w-4 rounded-none border-border bg-card text-primary focus:ring-primary"
                aria-invalid={errors.privacy ? "true" : "false"}
                {...register("privacy")}
              />
              <label htmlFor="privacy" className="text-sm leading-relaxed text-muted-foreground">
                Ich habe die{" "}
                <a href="/datenschutz" className="text-primary underline hover:text-primary-400">
                  Datenschutzbestimmungen
                </a>{" "}
                gelesen und stimme der Verarbeitung meiner Daten zu.
              </label>
            </div>
            {errors.privacy && <p className="text-sm text-red-400">{errors.privacy.message}</p>}

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Wird gesendet...
                </>
              ) : (
                "Nachricht senden"
              )}
            </Button>

            {status && (
              <div
                className={`flex items-center gap-3 rounded-none border p-4 ${
                  status.success ? "border-green-500/30 bg-green-500/10 text-green-300" : "border-red-500/30 bg-red-500/10 text-red-300"
                }`}
                role="status"
                aria-live="polite"
              >
                {status.success ? <CheckCircle2 className="h-5 w-5 flex-shrink-0" /> : <AlertCircle className="h-5 w-5 flex-shrink-0" />}
                <p className="text-sm">{status.message}</p>
              </div>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}
