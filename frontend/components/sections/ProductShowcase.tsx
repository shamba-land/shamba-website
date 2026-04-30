"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type WebFeature = "map" | "analytics" | "collaboration" | null;
type MobileFeature = "offline" | "geometry" | "satellite" | "device" | null;

// Separate visualization components for each Web feature
function MapVisualization({ isActive }: { isActive: boolean }) {
  return (
    <div className={`absolute inset-0 transition-all duration-500 ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
      {/* Satellite-style raster background with deforestation risk pixels */}
      <div className="absolute inset-0 bg-secondary/50" />
      <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 180 120" preserveAspectRatio="xMidYMid slice">
        <defs>
          {/* Satellite texture pattern - matching mobile satellite style */}
          <pattern id="webSatRaster" width="6" height="6" patternUnits="userSpaceOnUse">
            <rect width="6" height="6" fill="none" />
            <rect x="0" y="0" width="3" height="3" fill="rgba(47, 93, 58, 0.3)" />
            <rect x="3" y="3" width="3" height="3" fill="rgba(31, 61, 43, 0.25)" />
          </pattern>
        </defs>
        <rect width="180" height="120" fill="url(#webSatRaster)" />

        {/* Deforestation risk clusters - larger areas, more pixels, less transparent */}
        {/* Cluster 1 - top left area (expanded) */}
        <rect x="12" y="6" width="3" height="3" fill="rgba(192, 57, 43, 0.85)" />
        <rect x="15" y="6" width="3" height="3" fill="rgba(192, 57, 43, 0.9)" />
        <rect x="18" y="6" width="3" height="3" fill="rgba(192, 57, 43, 0.8)" />
        <rect x="12" y="9" width="3" height="3" fill="rgba(192, 57, 43, 0.9)" />
        <rect x="15" y="9" width="3" height="3" fill="rgba(192, 57, 43, 0.95)" />
        <rect x="18" y="9" width="3" height="3" fill="rgba(192, 57, 43, 0.9)" />
        <rect x="21" y="9" width="3" height="3" fill="rgba(192, 57, 43, 0.85)" />
        <rect x="12" y="12" width="3" height="3" fill="rgba(192, 57, 43, 0.85)" />
        <rect x="15" y="12" width="3" height="3" fill="rgba(192, 57, 43, 0.9)" />
        <rect x="18" y="12" width="3" height="3" fill="rgba(192, 57, 43, 0.95)" />
        <rect x="21" y="12" width="3" height="3" fill="rgba(192, 57, 43, 0.9)" />
        <rect x="24" y="12" width="3" height="3" fill="rgba(192, 57, 43, 0.8)" />
        <rect x="15" y="15" width="3" height="3" fill="rgba(192, 57, 43, 0.85)" />
        <rect x="18" y="15" width="3" height="3" fill="rgba(192, 57, 43, 0.9)" />
        <rect x="21" y="15" width="3" height="3" fill="rgba(192, 57, 43, 0.85)" />
        <rect x="24" y="15" width="3" height="3" fill="rgba(192, 57, 43, 0.8)" />
        <rect x="18" y="18" width="3" height="3" fill="rgba(192, 57, 43, 0.8)" />
        <rect x="21" y="18" width="3" height="3" fill="rgba(192, 57, 43, 0.85)" />

        {/* Cluster 2 - right side (expanded) */}
        <rect x="129" y="36" width="3" height="3" fill="rgba(192, 57, 43, 0.8)" />
        <rect x="132" y="36" width="3" height="3" fill="rgba(192, 57, 43, 0.85)" />
        <rect x="135" y="36" width="3" height="3" fill="rgba(192, 57, 43, 0.9)" />
        <rect x="129" y="39" width="3" height="3" fill="rgba(192, 57, 43, 0.85)" />
        <rect x="132" y="39" width="3" height="3" fill="rgba(192, 57, 43, 0.95)" />
        <rect x="135" y="39" width="3" height="3" fill="rgba(192, 57, 43, 0.95)" />
        <rect x="138" y="39" width="3" height="3" fill="rgba(192, 57, 43, 0.9)" />
        <rect x="141" y="39" width="3" height="3" fill="rgba(192, 57, 43, 0.8)" />
        <rect x="129" y="42" width="3" height="3" fill="rgba(192, 57, 43, 0.9)" />
        <rect x="132" y="42" width="3" height="3" fill="rgba(192, 57, 43, 0.95)" />
        <rect x="135" y="42" width="3" height="3" fill="rgba(192, 57, 43, 0.95)" />
        <rect x="138" y="42" width="3" height="3" fill="rgba(192, 57, 43, 0.9)" />
        <rect x="141" y="42" width="3" height="3" fill="rgba(192, 57, 43, 0.85)" />
        <rect x="132" y="45" width="3" height="3" fill="rgba(192, 57, 43, 0.9)" />
        <rect x="135" y="45" width="3" height="3" fill="rgba(192, 57, 43, 0.9)" />
        <rect x="138" y="45" width="3" height="3" fill="rgba(192, 57, 43, 0.85)" />
        <rect x="135" y="48" width="3" height="3" fill="rgba(192, 57, 43, 0.85)" />
        <rect x="138" y="48" width="3" height="3" fill="rgba(192, 57, 43, 0.8)" />

        {/* Cluster 3 - bottom center (expanded) */}
        <rect x="69" y="84" width="3" height="3" fill="rgba(192, 57, 43, 0.8)" />
        <rect x="72" y="84" width="3" height="3" fill="rgba(192, 57, 43, 0.85)" />
        <rect x="75" y="84" width="3" height="3" fill="rgba(192, 57, 43, 0.9)" />
        <rect x="66" y="87" width="3" height="3" fill="rgba(192, 57, 43, 0.8)" />
        <rect x="69" y="87" width="3" height="3" fill="rgba(192, 57, 43, 0.9)" />
        <rect x="72" y="87" width="3" height="3" fill="rgba(192, 57, 43, 0.95)" />
        <rect x="75" y="87" width="3" height="3" fill="rgba(192, 57, 43, 0.95)" />
        <rect x="78" y="87" width="3" height="3" fill="rgba(192, 57, 43, 0.9)" />
        <rect x="81" y="87" width="3" height="3" fill="rgba(192, 57, 43, 0.85)" />
        <rect x="66" y="90" width="3" height="3" fill="rgba(192, 57, 43, 0.85)" />
        <rect x="69" y="90" width="3" height="3" fill="rgba(192, 57, 43, 0.95)" />
        <rect x="72" y="90" width="3" height="3" fill="rgba(192, 57, 43, 0.95)" />
        <rect x="75" y="90" width="3" height="3" fill="rgba(192, 57, 43, 0.95)" />
        <rect x="78" y="90" width="3" height="3" fill="rgba(192, 57, 43, 0.9)" />
        <rect x="81" y="90" width="3" height="3" fill="rgba(192, 57, 43, 0.85)" />
        <rect x="69" y="93" width="3" height="3" fill="rgba(192, 57, 43, 0.9)" />
        <rect x="72" y="93" width="3" height="3" fill="rgba(192, 57, 43, 0.9)" />
        <rect x="75" y="93" width="3" height="3" fill="rgba(192, 57, 43, 0.9)" />
        <rect x="78" y="93" width="3" height="3" fill="rgba(192, 57, 43, 0.85)" />
        <rect x="72" y="96" width="3" height="3" fill="rgba(192, 57, 43, 0.85)" />
        <rect x="75" y="96" width="3" height="3" fill="rgba(192, 57, 43, 0.8)" />

        {/* Cluster 4 - additional small cluster mid-left */}
        <rect x="45" y="54" width="3" height="3" fill="rgba(192, 57, 43, 0.85)" />
        <rect x="48" y="54" width="3" height="3" fill="rgba(192, 57, 43, 0.9)" />
        <rect x="45" y="57" width="3" height="3" fill="rgba(192, 57, 43, 0.9)" />
        <rect x="48" y="57" width="3" height="3" fill="rgba(192, 57, 43, 0.95)" />
        <rect x="51" y="57" width="3" height="3" fill="rgba(192, 57, 43, 0.85)" />
        <rect x="48" y="60" width="3" height="3" fill="rgba(192, 57, 43, 0.85)" />
        <rect x="51" y="60" width="3" height="3" fill="rgba(192, 57, 43, 0.8)" />
      </svg>

      {/* Farm polygons - fewer unique shapes */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 180" preserveAspectRatio="xMidYMid slice">
        {/* Farm 1 - irregular pentagon */}
        <polygon points="45,35 80,28 95,55 75,72 40,60" fill="rgba(143, 185, 150, 0.45)" stroke="#8FB996" strokeWidth="1" />

        {/* Farm 2 - elongated shape */}
        <polygon points="130,40 175,32 190,50 185,75 145,80 125,62" fill="rgba(143, 185, 150, 0.45)" stroke="#8FB996" strokeWidth="1" />

        {/* Farm 3 - smaller quadrilateral */}
        <polygon points="220,45 255,40 265,65 230,75" fill="rgba(143, 185, 150, 0.45)" stroke="#8FB996" strokeWidth="1" />

        {/* Farm 4 - bottom left */}
        <polygon points="55,100 95,92 110,120 85,140 50,130" fill="rgba(143, 185, 150, 0.45)" stroke="#8FB996" strokeWidth="1" />

        {/* Farm 5 - bottom center */}
        <polygon points="145,105 195,98 210,130 170,150 140,135" fill="rgba(143, 185, 150, 0.45)" stroke="#8FB996" strokeWidth="1" />

        {/* Farm markers */}
        <circle cx="65" cy="50" r="2.5" fill="#1F3D2B" />
        <circle cx="160" cy="55" r="2.5" fill="#1F3D2B" />
        <circle cx="242" cy="58" r="2.5" fill="#1F3D2B" />
        <circle cx="80" cy="115" r="2.5" fill="#1F3D2B" />
        <circle cx="175" cy="120" r="2.5" fill="#1F3D2B" />
      </svg>

      {/* Layer legend panel - non-interactive */}
      <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-2.5 space-y-1.5 pointer-events-none">
        <div className="text-[9px] font-semibold text-foreground mb-1.5">Map Layers</div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-sm bg-primary" />
          <span className="text-[9px] text-foreground">Farm Boundaries</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-sm bg-[#C0392B]" />
          <span className="text-[9px] text-foreground">Deforestation Risk</span>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-sm bg-blue-light" />
          <span className="text-[9px] text-foreground">Water Sources</span>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-sm bg-[#E1B75A]" />
          <span className="text-[9px] text-foreground">Soil Quality</span>
        </div>
      </div>

      {/* Zoom controls */}
      <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
        <button className="block px-3 py-1.5 text-sm hover:bg-muted/50 border-b border-border">+</button>
        <button className="block px-3 py-1.5 text-sm hover:bg-muted/50">−</button>
      </div>

      {/* Coordinates display */}
      <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg px-3 py-2">
        <div className="text-[9px] text-muted-foreground">Viewing: 5 Farms</div>
        <div className="text-[10px] font-mono text-primary">-1.2921° S, 36.8219° E</div>
      </div>
    </div>
  );
}

function AnalyticsVisualization({ isActive }: { isActive: boolean }) {
  // Data points for line chart
  const chartData = [
    { value: 35, label: "Jan" },
    { value: 42, label: "Feb" },
    { value: 38, label: "Mar" },
    { value: 55, label: "Apr" },
    { value: 48, label: "May" },
    { value: 62, label: "Jun" },
    { value: 58, label: "Jul" },
    { value: 72, label: "Aug" },
    { value: 68, label: "Sep" },
    { value: 85, label: "Oct" },
    { value: 78, label: "Nov" },
    { value: 95, label: "Dec" },
  ];

  // Generate SVG path for line chart with padding
  const maxValue = 100;
  const padding = 10;
  const chartWidth = 260;
  const chartHeight = 50;
  const stepX = (chartWidth - padding * 2) / (chartData.length - 1);

  const linePath = chartData
    .map((point, i) => {
      const x = padding + i * stepX;
      const y = chartHeight - (point.value / maxValue) * (chartHeight - 6);
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  const areaPath = `${linePath} L ${padding + (chartData.length - 1) * stepX} ${chartHeight} L ${padding} ${chartHeight} Z`;

  return (
    <div className={`absolute inset-0 transition-all duration-500 ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
      <div className="absolute inset-0 bg-muted/20" />

      <div className="p-2 md:p-4 h-full flex flex-col gap-2 md:gap-3">
        {/* Top stats row - responsive layout */}
        <div className="flex gap-2 md:gap-3">
          <div className="flex-1 bg-white rounded-lg p-2 md:p-3 shadow-sm border border-border">
            <div className="text-[8px] md:text-[10px] text-muted-foreground mb-0.5 md:mb-1">Total Farmers</div>
            <div className="text-lg md:text-2xl font-bold text-primary">2,847</div>
            <div className="text-[7px] md:text-[9px] text-primary flex items-center gap-1 mt-0.5 md:mt-1">
              <svg className="w-2.5 h-2.5 md:w-3 md:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              +12%
            </div>
          </div>
          <div className="flex-1 bg-white rounded-lg p-2 md:p-3 shadow-sm border border-border">
            <div className="text-[8px] md:text-[10px] text-muted-foreground mb-0.5 md:mb-1">Programs</div>
            <div className="text-lg md:text-2xl font-bold text-secondary">24</div>
            <div className="text-[7px] md:text-[9px] text-secondary mt-0.5 md:mt-1">5 regions</div>
          </div>
          <div className="flex-1 bg-white rounded-lg p-2 md:p-3 shadow-sm border border-border">
            <div className="text-[8px] md:text-[10px] text-muted-foreground mb-0.5 md:mb-1">Area</div>
            <div className="text-lg md:text-2xl font-bold text-blue">4,521 ha</div>
            <div className="text-[7px] md:text-[9px] text-blue mt-0.5 md:mt-1">+340 ha</div>
          </div>
        </div>

        {/* Chart area - LINE chart */}
        <div className="flex-1 bg-white rounded-lg p-2 md:p-3 shadow-sm border border-border flex flex-col">
          <div className="flex justify-between items-center mb-1 md:mb-2">
            <div className="text-[8px] md:text-[10px] font-semibold text-foreground">Registration Trend</div>
            <div className="flex gap-1 md:gap-2 text-[7px] md:text-[8px]">
              <span className="px-1.5 md:px-2 py-0.5 rounded bg-primary/10 text-primary">Monthly</span>
              <span className="hidden md:inline px-2 py-0.5 rounded text-muted-foreground">Weekly</span>
            </div>
          </div>
          {/* Line chart using SVG */}
          <div className="flex-1 min-h-0">
            <svg className="w-full h-full" viewBox={`0 0 ${chartWidth} ${chartHeight}`} preserveAspectRatio="xMidYMid meet">
              {/* Grid lines */}
              <line x1="0" y1="0" x2={chartWidth} y2="0" stroke="#e5e5e5" strokeWidth="0.5" />
              <line x1="0" y1={chartHeight / 2} x2={chartWidth} y2={chartHeight / 2} stroke="#e5e5e5" strokeWidth="0.5" />
              <line x1="0" y1={chartHeight} x2={chartWidth} y2={chartHeight} stroke="#e5e5e5" strokeWidth="0.5" />

              {/* Area fill */}
              <path d={areaPath} fill="url(#lineGradient)" />

              {/* Line */}
              <path d={linePath} fill="none" stroke="#1F3D2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

              {/* Data points */}
              {chartData.map((point, i) => {
                const x = padding + i * stepX;
                const y = chartHeight - (point.value / maxValue) * (chartHeight - 6);
                return <circle key={i} cx={x} cy={y} r="2" fill="#1F3D2B" />;
              })}

              {/* Gradient definition */}
              <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1F3D2B" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#1F3D2B" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          {/* X-axis labels - at bottom of card */}
          <div className="flex justify-between text-[5px] md:text-[7px] text-muted-foreground mt-1 px-2 md:px-2.5">
            {chartData.map((point, i) => (
              <span key={i}>{point.label}</span>
            ))}
          </div>
        </div>

        {/* Bottom metrics - responsive */}
        <div className="flex gap-2 md:gap-3">
          <div className="flex-1 bg-white rounded-lg p-1.5 md:p-2 shadow-sm border border-border flex items-center gap-1.5 md:gap-2">
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
              <svg className="w-3 h-3 md:w-4 md:h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div className="min-w-0">
              <div className="text-[7px] md:text-[9px] text-muted-foreground truncate">Surveys</div>
              <div className="text-xs md:text-sm font-bold text-foreground">1,234</div>
            </div>
          </div>
          <div className="flex-1 bg-white rounded-lg p-1.5 md:p-2 shadow-sm border border-border flex items-center gap-1.5 md:gap-2">
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-light/20 flex items-center justify-center shrink-0">
              <svg className="w-3 h-3 md:w-4 md:h-4 text-blue-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="min-w-0">
              <div className="text-[7px] md:text-[9px] text-muted-foreground truncate">Revenue</div>
              <div className="text-xs md:text-sm font-bold text-foreground">$2.4M</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CollaborationVisualization({ isActive }: { isActive: boolean }) {
  return (
    <div className={`absolute inset-0 transition-all duration-500 ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-background to-muted/30" />

      <div className="p-2 md:p-4 h-full flex gap-2 md:gap-3">
        {/* Team sidebar - hidden on mobile */}
        <div className="hidden md:flex w-48 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-border overflow-hidden flex-col">
          <div className="p-2 border-b border-border bg-muted/30">
            <div className="text-[10px] font-semibold text-foreground">Team Members</div>
            <div className="text-[9px] text-muted-foreground">5 online now</div>
          </div>
          <div className="flex-1 p-2 space-y-2">
            {[
              { name: "Sarah K.", role: "Field Lead", color: "#1F3D2B", online: true },
              { name: "James M.", role: "Data Collector", color: "#2C5F7F", online: true },
              { name: "Alice N.", role: "Supervisor", color: "#C46A3A", online: true },
              { name: "David O.", role: "Data Collector", color: "#4A90A4", online: true },
              { name: "Grace W.", role: "Analyst", color: "#7A5C3E", online: true },
            ].map((member, i) => (
              <div key={i} className="flex items-center gap-2 p-1.5 rounded hover:bg-muted/50 transition-colors">
                <div className="relative">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold" style={{ backgroundColor: member.color }}>
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  {member.online && (
                    <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-medium text-foreground truncate">{member.name}</div>
                  <div className="text-[8px] text-muted-foreground truncate">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main content area */}
        <div className="flex-1 flex flex-col gap-2 md:gap-3">
          {/* Task board header */}
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-border p-1.5 md:p-2 flex items-center justify-between">
            <div className="flex items-center gap-1.5 md:gap-2">
              <div className="text-[8px] md:text-[10px] font-semibold text-foreground">Task Board</div>
              <div className="px-1.5 md:px-2 py-0.5 rounded-full text-[7px] md:text-[8px] font-medium text-white bg-blue-light">
                12 active
              </div>
            </div>
            <div className="flex items-center gap-2">
              {/* Team avatars on mobile */}
              <div className="flex md:hidden -space-x-1.5">
                {["#1F3D2B", "#2C5F7F", "#C46A3A"].map((color, i) => (
                  <div key={i} className="w-5 h-5 rounded-full border border-white flex items-center justify-center text-white text-[6px] font-bold" style={{ backgroundColor: color }}>
                    {["SK", "JM", "AN"][i]}
                  </div>
                ))}
                <div className="w-5 h-5 rounded-full border border-white bg-muted flex items-center justify-center text-[6px] text-muted-foreground">+2</div>
              </div>
              <button className="px-1.5 md:px-2 py-0.5 md:py-1 rounded text-[7px] md:text-[9px] bg-primary text-white">+ Add</button>
            </div>
          </div>

          {/* Task columns */}
          <div className="flex-1 flex gap-1.5 md:gap-2">
            {/* To Do column */}
            <div className="flex-1 bg-white/70 backdrop-blur-sm rounded-lg border border-border p-1.5 md:p-2">
              <div className="flex items-center gap-1 md:gap-2 mb-1.5 md:mb-2">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-amber-400" />
                <span className="text-[7px] md:text-[9px] font-semibold text-foreground">To Do</span>
                <span className="text-[6px] md:text-[8px] text-muted-foreground">(4)</span>
              </div>
              <div className="space-y-1 md:space-y-1.5">
                <div className="bg-white rounded p-1 md:p-1.5 shadow-sm border-l-2 border-amber-400">
                  <div className="text-[7px] md:text-[9px] font-medium">Survey Region B</div>
                  <div className="text-[6px] md:text-[8px] text-muted-foreground">Due tomorrow</div>
                </div>
                <div className="bg-white rounded p-1 md:p-1.5 shadow-sm border-l-2 border-amber-400">
                  <div className="text-[7px] md:text-[9px] font-medium">Verify boundaries</div>
                  <div className="text-[6px] md:text-[8px] text-muted-foreground">15 farms</div>
                </div>
              </div>
            </div>

            {/* In Progress column */}
            <div className="flex-1 bg-white/70 backdrop-blur-sm rounded-lg border border-border p-1.5 md:p-2">
              <div className="flex items-center gap-1 md:gap-2 mb-1.5 md:mb-2">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-light" />
                <span className="text-[7px] md:text-[9px] font-semibold text-foreground">Active</span>
                <span className="text-[6px] md:text-[8px] text-muted-foreground">(3)</span>
              </div>
              <div className="space-y-1 md:space-y-1.5">
                <div className="bg-white rounded p-1 md:p-1.5 shadow-sm border-l-2 border-blue-light">
                  <div className="text-[7px] md:text-[9px] font-medium">Data collection</div>
                  <div className="flex items-center gap-1 mt-0.5 md:mt-1">
                    <div className="w-3 h-3 md:w-4 md:h-4 rounded-full text-white text-[5px] md:text-[7px] font-bold flex items-center justify-center bg-blue">JM</div>
                    <div className="hidden md:block text-[8px] text-muted-foreground">James M.</div>
                  </div>
                </div>
                <div className="bg-white rounded p-1 md:p-1.5 shadow-sm border-l-2 border-blue-light">
                  <div className="text-[7px] md:text-[9px] font-medium">Quality review</div>
                  <div className="flex items-center gap-1 mt-0.5 md:mt-1">
                    <div className="w-3 h-3 md:w-4 md:h-4 rounded-full text-white text-[5px] md:text-[7px] font-bold flex items-center justify-center" style={{ backgroundColor: "#7A5C3E" }}>GW</div>
                    <div className="hidden md:block text-[8px] text-muted-foreground">Grace W.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Done column */}
            <div className="flex-1 bg-white/70 backdrop-blur-sm rounded-lg border border-border p-1.5 md:p-2">
              <div className="flex items-center gap-1 md:gap-2 mb-1.5 md:mb-2">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary" />
                <span className="text-[7px] md:text-[9px] font-semibold text-foreground">Done</span>
                <span className="text-[6px] md:text-[8px] text-muted-foreground">(5)</span>
              </div>
              <div className="space-y-1 md:space-y-1.5">
                <div className="bg-white rounded p-1 md:p-1.5 shadow-sm border-l-2 border-primary opacity-70">
                  <div className="text-[7px] md:text-[9px] font-medium line-through">Region A</div>
                  <div className="text-[6px] md:text-[8px] text-muted-foreground">847 farmers</div>
                </div>
                <div className="bg-white rounded p-1 md:p-1.5 shadow-sm border-l-2 border-primary opacity-70">
                  <div className="text-[7px] md:text-[9px] font-medium line-through">GPS mapping</div>
                  <div className="text-[6px] md:text-[8px] text-muted-foreground">Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
  const [activeWebFeature, setActiveWebFeature] = useState<WebFeature>("map");
  const [activeMobileFeature, setActiveMobileFeature] = useState<MobileFeature>("geometry");

  return (
    <section id="platform" className="relative overflow-hidden py-24 md:py-32 geo-grid-bg">
      {/* Warm earth-toned background with smooth gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/8 to-background" />

      {/* Smooth gradient transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />

      {/* Smooth gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background" />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <div className="mb-4 inline-flex items-center rounded-full border border-blue-light/40 px-4 py-1.5">
            <span className="text-xs font-semibold text-blue-light uppercase tracking-wider">Platform Overview</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">
            Desktop Power,{" "}
            <span className="text-primary">Mobile Flexibility</span>
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            Access your farmer data anywhere with our comprehensive web platform and offline-capable mobile app
          </p>
        </div>

        {/* Web Portal Showcase */}
        <div className="mb-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Content */}
            <ScrollReveal className="order-2 lg:order-1">
              <div className="mb-4 inline-flex items-center rounded-full border border-blue-light/40 px-3 py-1.5">
                <span className="text-xs font-semibold text-blue-light uppercase tracking-wider">Web Platform</span>
              </div>
              <h3 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
                Powerful Command Center
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Manage your entire farmer network from our intuitive web dashboard. Visualize data on interactive maps, generate insights, and coordinate field operations.
              </p>

              {/* Features - consistent blue styling */}
              <div className="space-y-4">
                <button
                  className={`w-full flex gap-3 p-3 rounded-lg text-left transition-all ${
                    activeWebFeature === "map"
                      ? "bg-blue-light/10 border border-blue-light/30"
                      : "hover:bg-muted/50 border border-transparent"
                  }`}
                  onMouseEnter={() => setActiveWebFeature("map")}
                  onClick={() => setActiveWebFeature("map")}
                >
                  <div className="shrink-0 w-6 h-6 rounded-md bg-blue-light/20 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-blue-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Interactive Geospatial Maps</h4>
                    <p className="text-sm text-muted-foreground">View farmer locations, field boundaries, and regional analytics with multiple map layers</p>
                  </div>
                </button>

                <button
                  className={`w-full flex gap-3 p-3 rounded-lg text-left transition-all ${
                    activeWebFeature === "analytics"
                      ? "bg-blue-light/10 border border-blue-light/30"
                      : "hover:bg-muted/50 border border-transparent"
                  }`}
                  onMouseEnter={() => setActiveWebFeature("analytics")}
                  onClick={() => setActiveWebFeature("analytics")}
                >
                  <div className="shrink-0 w-6 h-6 rounded-md bg-blue-light/20 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-blue-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Advanced Analytics Dashboard</h4>
                    <p className="text-sm text-muted-foreground">Real-time insights, custom reports, and trend analysis across your programs</p>
                  </div>
                </button>

                <button
                  className={`w-full flex gap-3 p-3 rounded-lg text-left transition-all ${
                    activeWebFeature === "collaboration"
                      ? "bg-blue-light/10 border border-blue-light/30"
                      : "hover:bg-muted/50 border border-transparent"
                  }`}
                  onMouseEnter={() => setActiveWebFeature("collaboration")}
                  onClick={() => setActiveWebFeature("collaboration")}
                >
                  <div className="shrink-0 w-6 h-6 rounded-md bg-blue-light/20 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-blue-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Team Collaboration Tools</h4>
                    <p className="text-sm text-muted-foreground">Role-based access, task assignment, and communication features for field teams</p>
                  </div>
                </button>
              </div>
            </ScrollReveal>

            {/* Abstract Web Dashboard Visualization - Carousel */}
            <ScrollReveal delay={200} className="order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-light/20 rounded-xl blur-2xl group-hover:blur-3xl transition-all" />
                <div className="relative bg-card border-2 border-border rounded-xl overflow-hidden shadow-hard-lg">
                  {/* Browser chrome */}
                  <div className="bg-muted/50 border-b border-border px-4 py-3 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                      <div className="w-3 h-3 rounded-full bg-green-400/60" />
                    </div>
                    <div className="flex-1 mx-4 bg-background/50 rounded px-3 py-1 text-xs text-muted-foreground">
                      app.shamba.land/dashboard
                    </div>
                  </div>

                  {/* Dashboard Content - Shows one visualization at a time */}
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <MapVisualization isActive={activeWebFeature === "map" || activeWebFeature === null} />
                    <AnalyticsVisualization isActive={activeWebFeature === "analytics"} />
                    <CollaborationVisualization isActive={activeWebFeature === "collaboration"} />
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
                    <div className="relative bg-card border-4 border-foreground/10 rounded-[2.5rem] overflow-hidden shadow-hard-lg p-2">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-foreground/10 rounded-b-2xl z-10" />

                      {/* Screen - Shows one visualization at a time */}
                      <div className="relative rounded-[1.75rem] overflow-hidden">
                        <div className="aspect-[9/19.5] relative bg-background">
                          <OfflineVisualization isActive={activeMobileFeature === "offline"} />
                          <GeometryVisualization isActive={activeMobileFeature === "geometry" || activeMobileFeature === null} />
                          <SatelliteVisualization isActive={activeMobileFeature === "satellite"} />
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
              <div className="mb-4 inline-flex items-center rounded-full border border-blue-light/40 px-3 py-1.5">
                <span className="text-xs font-semibold text-blue-light uppercase tracking-wider">Mobile App</span>
              </div>
              <h3 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
                Field-Ready Data Collection
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Work offline in remote areas with our mobile app. Capture data, photos, and GPS coordinates, then sync when you&apos;re back online.
              </p>

              {/* Features - consistent blue styling */}
              <div className="space-y-4">
                <button
                  className={`w-full flex gap-3 p-3 rounded-lg text-left transition-all ${
                    activeMobileFeature === "offline"
                      ? "bg-blue-light/10 border border-blue-light/30"
                      : "hover:bg-muted/50 border border-transparent"
                  }`}
                  onMouseEnter={() => setActiveMobileFeature("offline")}
                  onClick={() => setActiveMobileFeature("offline")}
                >
                  <div className="shrink-0 w-6 h-6 rounded-md bg-blue-light/20 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-blue-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Offline-First Architecture</h4>
                    <p className="text-sm text-muted-foreground">Collect data without internet, automatically sync when connected</p>
                  </div>
                </button>

                <button
                  className={`w-full flex gap-3 p-3 rounded-lg text-left transition-all ${
                    activeMobileFeature === "geometry"
                      ? "bg-blue-light/10 border border-blue-light/30"
                      : "hover:bg-muted/50 border border-transparent"
                  }`}
                  onMouseEnter={() => setActiveMobileFeature("geometry")}
                  onClick={() => setActiveMobileFeature("geometry")}
                >
                  <div className="shrink-0 w-6 h-6 rounded-md bg-blue-light/20 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-blue-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Geometry Collection</h4>
                    <p className="text-sm text-muted-foreground">Draw field boundaries, mark plot locations, and measure areas with GPS precision</p>
                  </div>
                </button>

                <button
                  className={`w-full flex gap-3 p-3 rounded-lg text-left transition-all ${
                    activeMobileFeature === "satellite"
                      ? "bg-blue-light/10 border border-blue-light/30"
                      : "hover:bg-muted/50 border border-transparent"
                  }`}
                  onMouseEnter={() => setActiveMobileFeature("satellite")}
                  onClick={() => setActiveMobileFeature("satellite")}
                >
                  <div className="shrink-0 w-6 h-6 rounded-md bg-blue-light/20 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-blue-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Satellite Imagery Backgrounds</h4>
                    <p className="text-sm text-muted-foreground">Navigate with cached satellite maps even without connectivity</p>
                  </div>
                </button>

                <button
                  className={`w-full flex gap-3 p-3 rounded-lg text-left transition-all ${
                    activeMobileFeature === "device"
                      ? "bg-blue-light/10 border border-blue-light/30"
                      : "hover:bg-muted/50 border border-transparent"
                  }`}
                  onMouseEnter={() => setActiveMobileFeature("device")}
                  onClick={() => setActiveMobileFeature("device")}
                >
                  <div className="shrink-0 w-6 h-6 rounded-md bg-blue-light/20 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-blue-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Works on Any Device</h4>
                    <p className="text-sm text-muted-foreground">Available for Android and iOS smartphones and tablets</p>
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
