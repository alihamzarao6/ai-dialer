"use client";

import Image from "next/image";

export default function BackgroundEffects() {
  return (
    <>
      {/* Base dark gradient background */}
      <div className="fixed inset-0 -z-50 bg-linear-to-b from-[#001a0a] via-[#001208] to-[#000a05]" />

      {/* Gradient blur orbs from SVG - Top right */}
      <div className="fixed top-0 right-0 -z-40 w-[800px] h-[400px] opacity-50 translate-x-1/4 -translate-y-1/4">
        <Image
          src="/images/gradient-bg.svg"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Gradient blur orbs - Center left */}
      <div className="fixed top-1/3 left-0 -z-40 w-[700px] h-[400px] opacity-40 -translate-x-1/4">
        <Image
          src="/images/gradient-bg.svg"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Gradient blur orbs - Bottom right */}
      <div className="fixed bottom-0 right-1/4 -z-40 w-[600px] h-[350px] opacity-35 translate-y-1/4">
        <Image
          src="/images/gradient-bg.svg"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Floating stars decoration - Top right */}
      <div className="fixed top-20 right-[15%] -z-35 w-12 h-14 opacity-60 animate-pulse-glow">
        <Image
          src="/images/three-stars.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Floating stars decoration - Bottom left */}
      <div className="fixed bottom-32 left-[10%] -z-35 w-12 h-14 opacity-50 animate-pulse-glow"
        style={{ animationDelay: '1s' }}
      >
        <Image
          src="/images/three-stars.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Floating stars decoration - Center */}
      <div className="fixed top-1/2 right-[20%] -z-35 w-10 h-12 opacity-40 animate-pulse-glow"
        style={{ animationDelay: '2s' }}
      >
        <Image
          src="/images/three-stars.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Waveform accent - Hero section area */}
      <div className="fixed top-[30%] right-[8%] -z-35 w-8 h-8 opacity-30">
        <Image
          src="/images/wave-and-star.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Radial gradient overlay for depth */}
      <div className="fixed inset-0 -z-30 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,10,5,0.6)_70%,rgba(0,5,2,0.9)_100%)]" />

      {/* Dot grid pattern */}
      <div className="fixed inset-0 -z-20 opacity-[0.02] bg-[radial-gradient(circle,#10b981_1px,transparent_1px)] bg-size-[40px_40px]" />

      {/* Noise texture overlay */}
      <div className="fixed inset-0 -z-10 opacity-[0.015] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
    </>
  );
}
