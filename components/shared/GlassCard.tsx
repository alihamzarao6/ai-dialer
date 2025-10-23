"use client";

interface GlassCardProps {
  children: React.ReactNode;
  variant?: "default" | "strong" | "dark" | "card";
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  variant = "default",
  className = "",
  hover = false,
}: GlassCardProps) {
  const variants = {
    default: "glass",
    strong: "glass-strong",
    dark: "glass-dark",
    card: "glass-card",
  };

  const hoverEffect = hover
    ? "hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300"
    : "";

  return (
    <div
      className={`${variants[variant]} ${hoverEffect} rounded-2xl ${className}`}
    >
      {children}
    </div>
  );
}
