"use client";

interface SectionBackgroundProps {
  variant?: "dark" | "darker" | "accent" | "transparent";
  children: React.ReactNode;
  className?: string;
}

export default function SectionBackground({
  variant = "transparent",
  children,
  className = "",
}: SectionBackgroundProps) {
  const backgrounds = {
    dark: "bg-section-dark",
    darker: "bg-section-darker",
    accent: "bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent",
    transparent: "bg-transparent",
  };

  return (
    <div className={`relative ${backgrounds[variant]} ${className}`}>
      {children}
    </div>
  );
}
