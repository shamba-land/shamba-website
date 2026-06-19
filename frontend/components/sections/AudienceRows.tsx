import { ScrollReveal } from "@/components/ui/ScrollReveal";
import PlotMap from "@/components/sections/PlotMap";

/* ---------- lightweight, vector (crisp at any DPI) visual panels ---------- */

function CooperativeVisual() {
  return (
    <div className="relative aspect-[16/11] overflow-hidden rounded-xl border-2 border-border shadow-hard-lg">
      {/* browser chrome */}
      <div className="absolute top-0 inset-x-0 z-10 bg-muted/70 backdrop-blur border-b border-border px-4 py-2.5 flex items-center gap-2">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-400/60" />
          <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
          <span className="w-3 h-3 rounded-full bg-green-400/60" />
        </div>
        <div className="flex-1 mx-3 bg-background/60 rounded px-3 py-1 text-xs text-muted-foreground">
          platform.shamba.land/map
        </div>
      </div>
      <PlotMap className="absolute inset-0 pt-10" />
      {/* legend */}
      <div className="absolute bottom-3 left-3 z-10 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg px-3 py-2">
        <div className="text-[10px] text-muted-foreground">Members mapped</div>
        <div className="text-sm font-bold text-primary">48 plots · 1 cooperative</div>
      </div>
    </div>
  );
}

function ProgramVisual() {
  const farmers = [
    { n: "Akosua M.", c: "#1F3D2B", s: "Registered" },
    { n: "Kwame B.", c: "#2C5F7F", s: "Survey done" },
    { n: "Yaa O.", c: "#C46A3A", s: "Registered" },
    { n: "Kofi A.", c: "#4A90A4", s: "Survey done" },
  ];
  return (
    <div className="relative aspect-[16/11] overflow-hidden rounded-xl border-2 border-border shadow-hard-lg bg-card p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-xs text-muted-foreground">Program enrollment</div>
          <div className="text-lg font-bold text-foreground">Northern cocoa program</div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-primary">2,847</div>
          <div className="text-[10px] text-primary">farmers enrolled</div>
        </div>
      </div>
      <div className="mb-4 h-2 w-full rounded-full bg-muted overflow-hidden">
        <div className="h-full w-[78%] rounded-full bg-primary" />
      </div>
      <div className="text-[11px] text-muted-foreground mb-2">Recent field activity</div>
      <div className="space-y-2">
        {farmers.map((f) => (
          <div key={f.n} className="flex items-center gap-3 rounded-lg bg-muted/40 px-3 py-2">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold" style={{ backgroundColor: f.c }}>
              {f.n.split(" ").map((p) => p[0]).join("")}
            </div>
            <div className="flex-1 text-[12px] font-medium text-foreground">{f.n}</div>
            <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
              <svg className="h-3.5 w-3.5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              {f.s}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ComplianceVisual() {
  return (
    <div className="relative aspect-[16/11] overflow-hidden rounded-xl border-2 border-border shadow-hard-lg bg-[#13251a]">
      {/* a single plot, outlined, with a clearance check */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice">
        <rect width="320" height="220" fill="#13251a" />
        <polygon points="90,55 195,42 235,120 175,175 80,150" fill="rgba(143,185,150,0.35)" stroke="#E8F2EA" strokeWidth="1.5" />
        <circle cx="150" cy="105" r="3" fill="#E8F2EA" />
      </svg>
      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg px-3 py-2">
        <div className="text-[10px] text-muted-foreground">EUDR geolocation</div>
        <div className="text-sm font-mono font-semibold text-primary">Plot verified</div>
      </div>
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-white/95 backdrop-blur-sm rounded-lg shadow-lg px-3 py-2.5">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-secondary/15">
            <svg className="h-4 w-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          </span>
          <span className="text-[12px] font-semibold text-foreground">Deforestation-free</span>
        </div>
        <span className="text-[10px] text-muted-foreground">since 2020 cutoff</span>
      </div>
    </div>
  );
}

/* ---------- rows ---------- */

const rows = [
  {
    kicker: "For cooperatives",
    title: "Know every member and every plot",
    body: "Register members, map their land, and track input distributions, so you can prove volumes to buyers and run your cooperative from one record instead of a pile of spreadsheets.",
    points: ["Member registration and profiles", "Plot mapping and boundaries", "Input distributions and credit"],
    Visual: CooperativeVisual,
  },
  {
    kicker: "For NGOs & programs",
    title: "Run programs that can prove their impact",
    body: "Enroll farmers, run surveys offline, and track training and interventions in the field, then report outcomes to funders with data you can stand behind.",
    points: ["Offline farmer enrollment and surveys", "Training and intervention tracking", "Outcome reporting for funders"],
    Visual: ProgramVisual,
  },
  {
    kicker: "For sustainability & certification teams",
    title: "Compliance you can hand to an auditor",
    body: "Capture plot geolocation for EUDR, run Rainforest Alliance and Fairtrade inspections, and produce deforestation-free proof and traceability back to the farm.",
    points: ["EUDR geolocation and due diligence", "Rainforest Alliance and Fairtrade inspections", "Deforestation-free proof and traceability"],
    Visual: ComplianceVisual,
  },
];

export function AudienceRows() {
  return (
    <section id="solutions" className="relative overflow-hidden py-24 md:py-32 geo-grid-bg-fine">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/6 to-background" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background" />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">
            One platform, shaped to how you work
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            From the first farmer you register to the report you hand a buyer, Shamba fits the
            organizations that support smallholders.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {rows.map((row, i) => {
            const Visual = row.Visual;
            const flip = i % 2 === 1;
            return (
              <div key={row.kicker} className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
                <ScrollReveal className={flip ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center rounded-full border border-blue-light/40 px-3 py-1.5 mb-4">
                    <span className="text-xs font-semibold text-blue-light uppercase tracking-wider">{row.kicker}</span>
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">{row.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6">{row.body}</p>
                  <ul className="space-y-2.5">
                    {row.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-base text-foreground/90">
                        <svg className="h-5 w-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        {p}
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
                <ScrollReveal delay={150} className={flip ? "lg:order-1" : ""}>
                  <Visual />
                </ScrollReveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
