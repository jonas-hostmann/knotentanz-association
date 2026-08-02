"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/events", label: "Events" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-border/80 bg-background/95 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <Container>
        <nav aria-label="Hauptnavigation" className="flex h-24 items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-normal tracking-tight text-cream">
            Knotentanz
          </Link>

          <ul className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative text-sm font-medium uppercase tracking-[0.2em] transition-colors",
                    pathname === link.href ? "text-primary" : "text-cream/80 hover:text-primary"
                  )}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute -bottom-1 left-0 h-px w-full bg-primary" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center p-2 text-cream md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </Container>

      {open && (
        <div id="mobile-menu" className="border-b border-border bg-background md:hidden">
          <Container className="py-6">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block text-sm font-medium uppercase tracking-[0.2em]",
                      pathname === link.href ? "text-primary" : "text-cream/80 hover:text-primary"
                    )}
                    aria-current={pathname === link.href ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}
