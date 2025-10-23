"use client";

import { ReactNode } from "react";

interface MarqueeScrollProps {
  children: ReactNode;
  reverse?: boolean;
}

export default function MarqueeScroll({
  children,
  reverse = false,
}: MarqueeScrollProps) {
  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex gap-8 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{
          animation: `marquee 30s linear infinite ${reverse ? "reverse" : ""}`,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
