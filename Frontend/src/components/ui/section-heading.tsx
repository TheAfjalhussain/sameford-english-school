import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  children?: ReactNode;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  className = "",
  children,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered ? "text-center" : "", "max-w-3xl", centered && "mx-auto", className)}>
      {badge && (
        <span className="inline-block px-4 py-1.5 bg-primary-light text-primary rounded-full text-sm font-semibold mb-4">
          {badge}
        </span>
      )}
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg leading-relaxed">{subtitle}</p>
      )}
      {children}
    </div>
  );
}
