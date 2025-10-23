"use client";

export default function BackgroundEffects() {
  return (
    <>
      {/* Base dark gradient background */}
      <div className="fixed inset-0 -z-50 bg-gradient-to-b from-[#001a0a] via-[#001208] to-[#000a05]" />

      {/* SVG Glow Effects Layer */}
      <div className="fixed inset-0 -z-40 opacity-60">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 1080"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Gradient definitions */}
            <linearGradient id="glow1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06802F" />
              <stop offset="100%" stopColor="#1DFF9A" />
            </linearGradient>
            <linearGradient id="glow2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <linearGradient id="glow3" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>

            {/* Blur filters */}
            <filter id="blur1" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="150" />
            </filter>
            <filter id="blur2" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="120" />
            </filter>
            <filter id="blur3" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="100" />
            </filter>
          </defs>

          {/* Top right glow orb */}
          <g opacity="0.4" filter="url(#blur1)">
            <ellipse cx="1600" cy="200" rx="400" ry="350" fill="url(#glow1)" />
          </g>

          {/* Center left glow */}
          <g opacity="0.35" filter="url(#blur2)">
            <ellipse cx="300" cy="540" rx="350" ry="300" fill="url(#glow2)" />
          </g>

          {/* Bottom center glow */}
          <g opacity="0.3" filter="url(#blur3)">
            <ellipse cx="960" cy="900" rx="400" ry="250" fill="url(#glow3)" />
          </g>

          {/* Top center subtle glow */}
          <g opacity="0.25" filter="url(#blur3)">
            <ellipse cx="960" cy="150" rx="300" ry="200" fill="#025845" />
          </g>

          {/* Right side accent */}
          <g opacity="0.3" filter="url(#blur2)">
            <ellipse cx="1400" cy="700" rx="280" ry="200" fill="url(#glow1)" />
          </g>
        </svg>
      </div>

      {/* Radial gradient overlay for depth */}
      <div className="fixed inset-0 -z-30 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,10,5,0.6)_70%,rgba(0,5,2,0.9)_100%)]" />

      {/* Dot grid pattern */}
      <div className="fixed inset-0 -z-20 opacity-[0.02] bg-[radial-gradient(circle,#10b981_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Noise texture overlay */}
      <div className="fixed inset-0 -z-10 opacity-[0.015] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
    </>
  );
}
