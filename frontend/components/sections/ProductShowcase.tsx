"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GeoDecorations } from "@/components/ui/GeoDecorations";

type WebFeature = "collaboration" | "analytics" | "traceability" | "distribution" | null;
type MobileFeature = "onboarding" | "offline" | "geometry" | "interactions" | "device" | null;

// Web feature buttons + carousel order. Traceability (the satellite
// map) leads so the section opens on the map.
const WEB_FEATURES: { key: Exclude<WebFeature, null>; title: string; desc: string }[] = [
  { key: "traceability", title: "Traceability", desc: "Trace produce from the farm to the buyer" },
  { key: "collaboration", title: "Project management", desc: "Run your whole farmer network from one overview" },
  { key: "analytics", title: "Impact reporting", desc: "Generate reports funders and buyers trust" },
  { key: "distribution", title: "Input distribution", desc: "Record fertilizer and seed hand-outs to members" },
];
const WEB_ORDER: WebFeature[] = WEB_FEATURES.map((f) => f.key);
const MOBILE_ORDER: MobileFeature[] = ["offline", "onboarding", "interactions", "device"];

// Real product screenshots for the web feature carousel, keyed by
// WebFeature. `path` shows in the mock browser's address bar.
const WEB_SHOTS: Record<Exclude<WebFeature, null>, { src: string; alt: string; path: string }> = {
  collaboration: {
    src: "/screenshots/web-projects.webp",
    alt: "Shamba dashboard: farms, farmers, plots, and recent field activity for a cooperative",
    path: "platform.shamba.com/dashboard",
  },
  analytics: {
    src: "/screenshots/web-impact.webp",
    alt: "Shamba impact reporting with farm, farmer, area, and consent statistics",
    path: "platform.shamba.com/statistics",
  },
  traceability: {
    src: "/screenshots/web-traceability.webp",
    alt: "Shamba map showing farm plot boundaries over satellite imagery",
    path: "platform.shamba.com/map",
  },
  distribution: {
    src: "/screenshots/web-distribution.webp",
    alt: "Shamba input distribution: selecting products with prices to record a hand-out",
    path: "platform.shamba.com/distribution",
  },
};

// Mobile visualizations
function OfflineVisualization({ isActive }: { isActive: boolean }) {
  return (
    <div className={`absolute inset-0 transition-all duration-500 ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
      <div className="absolute inset-0 bg-muted/40" />

      {/* Subtle terrain texture */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 200" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="offlineTerrain" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="0.5" className="fill-primary/40" />
            <circle cx="15" cy="12" r="0.3" className="fill-accent/40" />
          </pattern>
        </defs>
        <rect width="100" height="200" fill="url(#offlineTerrain)" />
      </svg>

      {/* Status bar */}
      <div className="absolute top-8 left-4 right-4 flex justify-between items-center">
        <div className="text-[10px] font-medium text-foreground/70">9:41</div>
        <div className="flex items-center gap-1 bg-accent rounded-full px-2 py-0.5">
          <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-[8px] font-medium text-white">Offline</span>
        </div>
      </div>

      {/* Sync queue - centered */}
      <div className="absolute inset-x-4 top-1/2 -translate-y-1/2">
        <div className="bg-white rounded-xl p-3 shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs font-semibold text-foreground">Sync Queue</div>
            <div className="text-[9px] px-2 py-0.5 rounded-full bg-accent/20 text-accent font-medium">3 pending</div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/50">
              <div className="w-8 h-8 rounded-full bg-blue-light/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-[10px] font-medium">New farmer profile</div>
                <div className="text-[9px] text-muted-foreground">John Kamau • 2 min ago</div>
              </div>
              <div className="w-2 h-2 rounded-full bg-amber-400" />
            </div>

            <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/50">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-[10px] font-medium">Field boundary</div>
                <div className="text-[9px] text-muted-foreground">Plot #247 • 5 min ago</div>
              </div>
              <div className="w-2 h-2 rounded-full bg-amber-400" />
            </div>

            <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/50">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-[10px] font-medium">Survey photos (4)</div>
                <div className="text-[9px] text-muted-foreground">12 min ago</div>
              </div>
              <div className="w-2 h-2 rounded-full bg-amber-400" />
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-border">
            <div className="flex items-center justify-between mb-2">
              <div className="text-[10px] text-muted-foreground">Last synced: 2 hours ago</div>
              <div className="text-[10px] font-medium text-accent">45 KB queued</div>
            </div>
            <button className="w-full bg-accent text-white rounded-lg py-2 text-xs font-medium flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Sync When Online
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function GeometryVisualization({ isActive }: { isActive: boolean }) {
  return (
    <div className={`absolute inset-0 transition-all duration-500 ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
      <div className="absolute inset-0 bg-muted/30" />

      {/* Subtle terrain texture */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 200" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="geometryTerrain" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="0.5" className="fill-primary/40" />
            <circle cx="15" cy="12" r="0.3" className="fill-accent/40" />
          </pattern>
        </defs>
        <rect width="100" height="200" fill="url(#geometryTerrain)" />
      </svg>

      {/* Status bar */}
      <div className="absolute top-8 left-4 right-4 flex justify-between items-center">
        <div className="text-[10px] font-medium text-foreground/70">9:41</div>
        <div className="flex items-center gap-1 bg-primary rounded-full px-2 py-0.5">
          <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          <span className="text-[8px] font-medium text-white">GPS Active</span>
        </div>
      </div>

      {/* Polygon being drawn */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 90 195" preserveAspectRatio="xMidYMid meet">
        <polygon
          points="20,60 50,48 70,62 68,98 45,115 22,100"
          fill="rgba(143, 185, 150, 0.35)"
          stroke="#8FB996"
          strokeWidth="1"
        />

        {/* Vertex points - smaller */}
        {[
          { cx: 20, cy: 60 },
          { cx: 50, cy: 48 },
          { cx: 70, cy: 62 },
          { cx: 68, cy: 98 },
          { cx: 45, cy: 115 },
        ].map((point, i) => (
          <circle
            key={i}
            cx={point.cx}
            cy={point.cy}
            r="2"
            fill="white"
            stroke="#1F3D2B"
            strokeWidth="1"
          />
        ))}

        {/* Active drawing point */}
        <circle cx="22" cy="100" r="2.5" fill="#5B9BD5" stroke="white" strokeWidth="1" />

        {/* Closing line indicator */}
        <line x1="22" y1="100" x2="20" y2="60" stroke="#8FB996" strokeWidth="0.75" strokeDasharray="3,2" opacity="0.6" />
      </svg>

      {/* Measurement badge */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2">
        <div className="bg-white rounded-lg px-3 py-2 shadow-md">
          <div className="text-[10px] text-muted-foreground text-center">Area</div>
          <div className="text-lg font-bold text-primary text-center">2.47 ha</div>
        </div>
      </div>

      {/* Bottom toolbar */}
      <div className="absolute bottom-6 left-4 right-4">
        <div className="bg-white rounded-xl p-3 shadow-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-medium text-foreground">Drawing Field Boundary</span>
            <span className="text-[10px] font-medium text-primary">6 points</span>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 bg-muted text-foreground rounded-lg py-2 text-xs font-medium">
              Undo
            </button>
            <button className="flex-1 bg-primary text-white rounded-lg py-2 text-xs font-medium">
              Complete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SatelliteVisualization({ isActive }: { isActive: boolean }) {
  return (
    <div className={`absolute inset-0 transition-all duration-500 ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
      {/* Satellite imagery simulation - muted green tones */}
      <div className="absolute inset-0 bg-secondary/50" />

      {/* Terrain pattern overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 100 200" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="satelliteTerrain" width="6" height="6" patternUnits="userSpaceOnUse">
            <rect width="6" height="6" fill="none" />
            <rect x="0" y="0" width="3" height="3" fill="rgba(47, 93, 58, 0.25)" />
            <rect x="3" y="3" width="3" height="3" fill="rgba(31, 61, 43, 0.2)" />
          </pattern>
        </defs>
        <rect width="100" height="200" fill="url(#satelliteTerrain)" />
      </svg>

      {/* Downloaded area bounding box and farm polygons */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 90 195" preserveAspectRatio="xMidYMid meet">
        {/* Subtle downloaded area bounding box */}
        <rect
          x="12"
          y="50"
          width="66"
          height="100"
          fill="none"
          stroke="rgba(91, 155, 213, 0.4)"
          strokeWidth="1"
          strokeDasharray="6,3"
        />

        {/* Farm polygons - reduced count, small size for large area feel */}
        <polygon points="18,58 28,55 32,64 24,70" fill="rgba(143, 185, 150, 0.4)" stroke="#8FB996" strokeWidth="0.5" />
        <polygon points="42,56 54,53 58,63 50,68 42,65" fill="rgba(143, 185, 150, 0.4)" stroke="#8FB996" strokeWidth="0.5" />
        <polygon points="62,60 72,57 75,66 68,72" fill="rgba(143, 185, 150, 0.4)" stroke="#8FB996" strokeWidth="0.5" />

        <polygon points="20,80 32,77 36,88 28,94 19,90" fill="rgba(143, 185, 150, 0.4)" stroke="#8FB996" strokeWidth="0.5" />
        {/* Overlapping polygons - warning color */}
        <polygon points="45,78 56,75 60,86 52,92 44,88" fill="rgba(242, 169, 0, 0.35)" stroke="#F2A900" strokeWidth="0.5" />
        <polygon points="50,84 60,81 64,90 56,95 49,92" fill="rgba(242, 169, 0, 0.35)" stroke="#F2A900" strokeWidth="0.5" />

        <polygon points="16,108 28,105 32,116 24,122 15,118" fill="rgba(143, 185, 150, 0.4)" stroke="#8FB996" strokeWidth="0.5" />
        <polygon points="40,106 52,103 56,114 48,120 39,116" fill="rgba(143, 185, 150, 0.4)" stroke="#8FB996" strokeWidth="0.5" />
        <polygon points="60,108 72,105 76,116 68,122 59,118" fill="rgba(143, 185, 150, 0.4)" stroke="#8FB996" strokeWidth="0.5" />

        <polygon points="28,132 40,129 44,140 36,146 27,142" fill="rgba(143, 185, 150, 0.4)" stroke="#8FB996" strokeWidth="0.5" />
        <polygon points="52,130 64,127 68,138 60,144 51,140" fill="rgba(143, 185, 150, 0.4)" stroke="#8FB996" strokeWidth="0.5" />
      </svg>

      {/* Status bar */}
      <div className="absolute top-8 left-4 right-4 flex justify-between items-center">
        <div className="text-[10px] font-medium text-white/80">9:41</div>
        <div className="flex items-center gap-1 bg-secondary rounded-full px-2 py-0.5">
          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-[8px] font-medium text-white">Satellite</span>
        </div>
      </div>

      {/* Layer info panel with MB size */}
      <div className="absolute top-16 left-4 right-4">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-md">
          <div className="flex items-center justify-between">
            <div className="text-[10px] font-medium text-foreground">Sentinel-2 Imagery</div>
            <div className="text-[9px] text-muted-foreground">Dec 2024</div>
          </div>
          <div className="flex items-center justify-between mt-1.5">
            <div className="flex items-center gap-2 flex-1">
              <div className="flex-1 bg-muted rounded-full h-1">
                <div className="bg-secondary h-1 rounded-full w-full" />
              </div>
              <span className="text-[8px] font-medium text-secondary">Cached</span>
            </div>
            <span className="text-[8px] font-semibold text-blue-light ml-2">24.7 MB</span>
          </div>
        </div>
      </div>

      {/* Bottom toggle */}
      <div className="absolute bottom-6 left-4 right-4">
        <div className="bg-white rounded-xl p-3 shadow-lg">
          <div className="flex gap-2">
            <button className="flex-1 bg-secondary text-white rounded-lg py-2 text-xs font-medium">
              Satellite
            </button>
            <button className="flex-1 bg-muted text-foreground rounded-lg py-2 text-xs font-medium">
              Street
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function DeviceVisualization({ isActive }: { isActive: boolean }) {
  return (
    <div className={`absolute inset-0 transition-all duration-500 ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
      <div className="absolute inset-0 bg-muted/30" />

      {/* Subtle terrain texture */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 200" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="deviceTerrain" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="0.5" className="fill-primary/40" />
            <circle cx="15" cy="12" r="0.3" className="fill-accent/40" />
          </pattern>
        </defs>
        <rect width="100" height="200" fill="url(#deviceTerrain)" />
      </svg>

      {/* Status bar */}
      <div className="absolute top-8 left-4 right-4 flex justify-between items-center">
        <div className="text-[10px] font-medium text-foreground/70">9:41</div>
      </div>

      {/* App store buttons view */}
      <div className="absolute inset-x-4 top-1/2 -translate-y-1/2">
        <div className="bg-white rounded-xl p-4 shadow-lg">
          <div className="text-sm font-semibold text-foreground text-center mb-2">Native mobile apps</div>
          <div className="text-[10px] text-muted-foreground text-center mb-4">Offline-first capture for iOS and Android</div>

          {/* Store buttons */}
          <div className="space-y-2">
            {/* App Store button */}
            <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg border border-border/60 bg-muted/30 opacity-70">
              <svg className="w-7 h-7 text-foreground/70" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div>
                <div className="text-[8px] text-muted-foreground leading-none">Available on</div>
                <div className="text-[11px] font-semibold text-foreground/80">App Store</div>
              </div>
            </div>

            {/* Play Store button */}
            <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg border border-border/60 bg-muted/30 opacity-70">
              <svg className="w-7 h-7 text-foreground/70" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
              </svg>
              <div>
                <div className="text-[8px] text-muted-foreground leading-none">Available on</div>
                <div className="text-[11px] font-semibold text-foreground/80">Google Play</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductShowcase() {
  const [activeWebFeature, setActiveWebFeature] = useState<WebFeature>("traceability");
  const [activeMobileFeature, setActiveMobileFeature] = useState<MobileFeature>("onboarding");
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActiveWebFeature((c) => WEB_ORDER[(WEB_ORDER.indexOf(c) + 1) % WEB_ORDER.length]);
      setActiveMobileFeature((c) => MOBILE_ORDER[(MOBILE_ORDER.indexOf(c) + 1) % MOBILE_ORDER.length]);
    }, 4000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section id="platform" className="relative overflow-hidden py-16 md:py-24 geo-grid-bg" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {/* Warm earth-toned background with smooth gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/8 to-background" />

      {/* Smooth gradient transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />

      {/* Smooth gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background" />

      <GeoDecorations />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <div className="mb-4 inline-flex items-center rounded-full bg-[oklch(0.55_0.15_240)] px-4 py-1.5">
            <span className="text-xs font-semibold text-white uppercase tracking-wider">Platform Overview</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">
            One platform to manage your farmer network
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            Coordinate from the web, and capture data offline in the field.
          </p>
        </div>

        {/* Web Portal Showcase */}
        <div className="mb-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Content */}
            <ScrollReveal className="order-2 lg:order-1">
              <div className="mb-4 inline-flex items-center rounded-full bg-[oklch(0.55_0.15_240)] px-3 py-1.5">
                <span className="text-xs font-semibold text-white uppercase tracking-wider">Web Platform</span>
              </div>
              <h3 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
                Manage everything from one place
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Every farmer, plot, and program in one platform.
              </p>

              {/* Features */}
              <div className="space-y-4">
                {WEB_FEATURES.map((f) => (
                  <button
                    key={f.key}
                    className={`group w-full flex gap-3 p-3 rounded-lg text-left transition-all border ${
                      activeWebFeature === f.key
                        ? "is-active border-transparent"
                        : "hover:bg-muted/50 border-transparent"
                    } hover:border-primary`}
                    onMouseEnter={() => setActiveWebFeature(f.key)}
                    onClick={() => setActiveWebFeature(f.key)}
                  >
                    <div className="shrink-0 w-6 h-6 rounded-md bg-muted group-[.is-active]:bg-primary flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-muted-foreground group-[.is-active]:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">{f.title}</h4>
                      <p className="text-sm text-muted-foreground">{f.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </ScrollReveal>

            {/* Abstract Web Dashboard Visualization - Carousel */}
            <ScrollReveal delay={200} className="order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-light/20 rounded-xl blur-2xl group-hover:blur-3xl transition-all" />
                <div className="relative bg-background border-2 border-border rounded-xl overflow-hidden shadow-hard-lg">
                  {/* Browser chrome */}
                  <div className="bg-muted/50 border-b border-border px-4 py-3 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                      <div className="w-3 h-3 rounded-full bg-green-400/60" />
                    </div>
                    <div className="flex-1 mx-4 bg-background/50 rounded px-3 py-1 text-xs text-muted-foreground">
                      {WEB_SHOTS[activeWebFeature ?? "traceability"].path}
                    </div>
                  </div>

                  {/* Real product screenshots, cross-faded per active feature */}
                  <div className="aspect-[16/10] relative overflow-hidden">
                    {WEB_ORDER.map((key) => {
                      const feature = key as Exclude<WebFeature, null>;
                      const shot = WEB_SHOTS[feature];
                      const isActive = (activeWebFeature ?? "traceability") === feature;
                      return (
                        <Image
                          key={feature}
                          src={shot.src}
                          alt={shot.alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className={`object-cover transition-opacity duration-500 ${
                            isActive ? "opacity-100" : "opacity-0"
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Mobile App Showcase */}
        <div>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Abstract Mobile App Visualization - Carousel */}
            <ScrollReveal>
              <div className="max-w-sm mx-auto lg:ml-auto lg:mr-0">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all" />
                  <div className="relative">
                    {/* Phone frame */}
                    <div className="relative bg-background border-4 border-foreground/10 rounded-[2.5rem] overflow-hidden shadow-hard-lg p-2">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-foreground/10 rounded-b-2xl z-10" />

                      {/* Screen - Shows one visualization at a time */}
                      <div className="relative rounded-[1.75rem] overflow-hidden">
                        <div className="aspect-[9/19.5] relative bg-background">
                          <OfflineVisualization isActive={activeMobileFeature === "interactions"} />
                          <GeometryVisualization isActive={activeMobileFeature === "onboarding" || activeMobileFeature === "geometry" || activeMobileFeature === null} />
                          <SatelliteVisualization isActive={activeMobileFeature === "offline"} />
                          <DeviceVisualization isActive={activeMobileFeature === "device"} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal delay={200}>
              <div className="mb-4 inline-flex items-center rounded-full bg-[oklch(0.55_0.15_240)] px-3 py-1.5">
                <span className="text-xs font-semibold text-white uppercase tracking-wider">Mobile App</span>
              </div>
              <h3 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
                Designed for the field
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Field teams collect on a simple app that syncs when back online.
              </p>

              {/* Features */}
              <div className="space-y-4">
                <button
                  className={`group w-full flex gap-3 p-3 rounded-lg text-left transition-all border ${
                    activeMobileFeature === "offline"
                      ? "is-active border-transparent"
                      : "hover:bg-muted/50 border-transparent"
                  } hover:border-primary`}
                  onMouseEnter={() => setActiveMobileFeature("offline")}
                  onClick={() => setActiveMobileFeature("offline")}
                >
                  <div className="shrink-0 w-6 h-6 rounded-md bg-muted group-[.is-active]:bg-primary flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-muted-foreground group-[.is-active]:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Offline-first</h4>
                    <p className="text-sm text-muted-foreground">Download maps and work fully offline in the field</p>
                  </div>
                </button>

                <button
                  className={`group w-full flex gap-3 p-3 rounded-lg text-left transition-all border ${
                    activeMobileFeature === "onboarding"
                      ? "is-active border-transparent"
                      : "hover:bg-muted/50 border-transparent"
                  } hover:border-primary`}
                  onMouseEnter={() => setActiveMobileFeature("onboarding")}
                  onClick={() => setActiveMobileFeature("onboarding")}
                >
                  <div className="shrink-0 w-6 h-6 rounded-md bg-muted group-[.is-active]:bg-primary flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-muted-foreground group-[.is-active]:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Farmer onboarding</h4>
                    <p className="text-sm text-muted-foreground">Register farmers and map their plots in the field</p>
                  </div>
                </button>

                <button
                  className={`group w-full flex gap-3 p-3 rounded-lg text-left transition-all border ${
                    activeMobileFeature === "interactions"
                      ? "is-active border-transparent"
                      : "hover:bg-muted/50 border-transparent"
                  } hover:border-primary`}
                  onMouseEnter={() => setActiveMobileFeature("interactions")}
                  onClick={() => setActiveMobileFeature("interactions")}
                >
                  <div className="shrink-0 w-6 h-6 rounded-md bg-muted group-[.is-active]:bg-primary flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-muted-foreground group-[.is-active]:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Track interactions</h4>
                    <p className="text-sm text-muted-foreground">A synced log of every farmer visit and interaction</p>
                  </div>
                </button>

                <button
                  className={`group w-full flex gap-3 p-3 rounded-lg text-left transition-all border ${
                    activeMobileFeature === "device"
                      ? "is-active border-transparent"
                      : "hover:bg-muted/50 border-transparent"
                  } hover:border-primary`}
                  onMouseEnter={() => setActiveMobileFeature("device")}
                  onClick={() => setActiveMobileFeature("device")}
                >
                  <div className="shrink-0 w-6 h-6 rounded-md bg-muted group-[.is-active]:bg-primary flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-muted-foreground group-[.is-active]:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Multi-platform</h4>
                    <p className="text-sm text-muted-foreground">Works on any Android or iOS device</p>
                  </div>
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
