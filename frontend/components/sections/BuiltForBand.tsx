const audiences = [
  {
    label: "Cooperatives",
    d: "M3 21h18M5 21V7l8-4 8 4v14M9 9h.01M9 13h.01M9 17h.01M15 9h.01M15 13h.01M15 17h.01",
  },
  {
    label: "NGOs & programs",
    d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    label: "Sustainability & certification",
    d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    label: "Buyers & enterprises",
    d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
  },
];

export function BuiltForBand() {
  return (
    <section className="border-y border-border bg-muted/20">
      <div className="container py-8 md:py-10">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-6">
          Built for the organizations behind smallholder farmers
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 md:gap-x-16">
          {audiences.map((a) => (
            <div key={a.label} className="flex items-center gap-2.5 text-foreground/80">
              <svg className="h-5 w-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={a.d} />
              </svg>
              <span className="text-sm font-medium">{a.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
