import type { Metadata } from "next";
import "./globals.css";
import "../styles/cookiebot.css";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { CookiebotScript } from "@/components/cookiebot/cookiebot-script";

export const metadata: Metadata = {
  title: {
    default: "Knotentanz Association | Eleganz, Rhythmus & Community",
    template: "%s | Knotentanz Association",
  },
  description:
    "Die Knotentanz Association vereint Eleganz, Rhythmus und emotionale Tiefe in einzigartigen Tanzveranstaltungen, Bällen und Workshops.",
  keywords: ["Knotentanz", "Tanz", "Ball", "Gala", "Workshop", "Verein", "Association"],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "Knotentanz Association",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <CookiebotScript />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Navigation />
        <main id="main-content" className="pt-20">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
