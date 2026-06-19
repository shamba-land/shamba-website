"use client";

import { useEffect, useRef, useState } from "react";
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

export default function PlotMap({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let map: import("maplibre-gl").Map | undefined;
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
        const hull = convexHull(verts);

        map = new maplibregl.Map({
          container: containerRef.current,
          // Self-contained style: no external tiles, no API key. A deep
          // green base evokes a satellite field view; the plots are the focus.
          style: {
            version: 8,
            sources: {},
            layers: [{ id: "bg", type: "background", paint: { "background-color": "#13251a" } }],
          },
          bounds,
          fitBoundsOptions: { padding: 36 },
          attributionControl: false,
          dragRotate: false,
          maxZoom: 17,
        });
        map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");
        map.scrollZoom.disable(); // don't hijack page scroll; pan + buttons stay live

        map.on("load", () => {
          if (!map) return;
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
      map?.remove();
    };
  }, []);

  if (failed) {
    return (
      <div className={`flex items-center justify-center bg-[#13251a] text-white/60 text-sm ${className}`}>
        Interactive plot map
      </div>
    );
  }

  return <div ref={containerRef} className={className} aria-label="Interactive map of a cooperative's mapped plots" role="img" />;
}
