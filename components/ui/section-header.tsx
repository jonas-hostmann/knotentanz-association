import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

function SectionHeader({ eyebrow, title, description, align = "center", className }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="mb-5 font-serif text-3xl font-normal leading-tight text-foreground md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && <p className="text-lg leading-relaxed text-muted-foreground">{description}</p>}
    </div>
  );
}

export { SectionHeader };
