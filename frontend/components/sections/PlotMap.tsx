"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Plus, Minus, Home } from "lucide-react";
import "maplibre-gl/dist/maplibre-gl.css";

type Ring = [number, number][];

// Andrew's monotone chain convex hull over all plot vertices: the
// cooperative's "operating area" outline, computed client-side so we
// don't ship a second dataset.
function convexHull(points: [number, number][]): [number, number][] {
  const pts = [...points].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  if (pts.length < 3) return pts;
  const cross = (o: number[], a: number[], b: number[]) =>
    (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lower: [number, number][] = [];
  for (const p of pts) {
    while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], p) <= 0) lower.pop();
    lower.push(p);
  }
  const upper: [number, number][] = [];
  for (let i = pts.length - 1; i >= 0; i--) {
    const p = pts[i];
    while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], p) <= 0) upper.pop();
    upper.push(p);
  }
  return lower.slice(0, -1).concat(upper.slice(0, -1));
}

// Mirrors the real product's map controls
// (app: shared/layouts/map-controls/MapControlButtons.tsx) — a white
// rounded icon button, soft shadow, brand-green on hover. Soft shadow on
// purpose (the app uses shadow-md), not the site's hard-shadow button.
function MapButton({ onClick, label, children }: { onClick: () => void; label: string; children: ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-foreground shadow-md transition-colors hover:bg-muted hover:text-primary"
    >
      {children}
    </button>
  );
}

export default function PlotMap({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<import("maplibre-gl").Map | null>(null);
  const boundsRef = useRef<[[number, number], [number, number]] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const [{ default: maplibregl }, res] = await Promise.all([
          import("maplibre-gl"),
          fetch("/demo-plots.geojson"),
        ]);
        if (cancelled || !containerRef.current) return;
        const data = await res.json();

        // Bounds + hull from the plot vertices.
        const verts: [number, number][] = [];
        for (const f of data.features) {
          for (const ring of f.geometry.coordinates) {
            for (const c of ring as Ring) verts.push([c[0], c[1]]);
          }
        }
        const lons = verts.map((v) => v[0]);
        const lats = verts.map((v) => v[1]);
        const bounds: [[number, number], [number, number]] = [
          [Math.min(...lons), Math.min(...lats)],
          [Math.max(...lons), Math.max(...lats)],
        ];
        boundsRef.current = bounds;
        const hull = convexHull(verts);

        // Real satellite basemap once a MapTiler key is set; until then a
        // self-contained green canvas (no external tiles, no key) so the map
        // still renders. Set NEXT_PUBLIC_MAPTILER_KEY to switch it on.
        const key = process.env.NEXT_PUBLIC_MAPTILER_KEY;
        const realStyle = key
          ? `https://api.maptiler.com/maps/satellite/style.json?key=${key}`
          : null;

        const map = new maplibregl.Map({
          container: containerRef.current,
          style:
            realStyle ?? {
              version: 8,
              sources: {},
              layers: [{ id: "bg", type: "background", paint: { "background-color": "#13251a" } }],
            },
          bounds,
          fitBoundsOptions: { padding: 36 },
          // Provider basemaps require attribution (pass options to enable);
          // the green fallback needs none (false to disable).
          attributionControl: realStyle ? {} : false,
          dragRotate: false,
          maxZoom: 17,
        });
        mapRef.current = map;
        // Custom React controls (below) mirror the product; no default chrome.
        // Keep pan live but don't hijack page scroll.
        map.scrollZoom.disable();

        map.on("load", () => {
          map.addSource("plots", { type: "geojson", data });
          // Operating-area hull (subtle fill + dashed outline)
          if (hull.length >= 3) {
            const hullRing = [...hull, hull[0]];
            map.addSource("area", {
              type: "geojson",
              data: { type: "Feature", properties: {}, geometry: { type: "Polygon", coordinates: [hullRing] } },
            });
            map.addLayer({ id: "area-fill", type: "fill", source: "area", paint: { "fill-color": "#8FB996", "fill-opacity": 0.06 } });
            map.addLayer({ id: "area-line", type: "line", source: "area", paint: { "line-color": "#8FB996", "line-opacity": 0.5, "line-width": 1.25, "line-dasharray": [3, 2] } });
          }
          // Plots
          map.addLayer({ id: "plots-fill", type: "fill", source: "plots", paint: { "fill-color": "#8FB996", "fill-opacity": 0.45 } });
          map.addLayer({ id: "plots-line", type: "line", source: "plots", paint: { "line-color": "#E8F2EA", "line-width": 1.1, "line-opacity": 0.85 } });
        });
      } catch {
        if (!cancelled) setFailed(true);
      }
    })();

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  if (failed) {
    return (
      <div className={`flex items-center justify-center bg-[#13251a] text-white/60 text-sm ${className}`}>
        Interactive plot map
      </div>
    );
  }

  const zoomIn = () => mapRef.current?.zoomIn();
  const zoomOut = () => mapRef.current?.zoomOut();
  const fitPlots = () => {
    if (boundsRef.current) mapRef.current?.fitBounds(boundsRef.current, { padding: 36 });
  };

  return (
    <>
      <div ref={containerRef} className={className} aria-label="Interactive map of a cooperative's mapped plots" role="img" />
      <div className="absolute right-3 top-14 z-10 flex flex-col gap-2">
        <MapButton onClick={zoomIn} label="Zoom in"><Plus className="h-5 w-5" /></MapButton>
        <MapButton onClick={zoomOut} label="Zoom out"><Minus className="h-5 w-5" /></MapButton>
        <MapButton onClick={fitPlots} label="Zoom to plots"><Home className="h-5 w-5" /></MapButton>
      </div>
    </>
  );
}
