import { ScrollReveal } from "@/components/ui/ScrollReveal";

const benefits = [
  {
    title: "Trace supply chains",
    body: "Follow products from farmer to market with trusted, auditable records.",
    d: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
  },
  {
    title: "Digitize operations",
    body: "Replace paper and spreadsheets with field workflows that just work.",
    d: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    title: "Make smarter decisions",
    body: "Turn field data into clear insights and reporting you can act on.",
    d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Scale your reach",
    body: "Grow programs and farmer networks without growing the complexity.",
    d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Unlock financing",
    body: "Build the trusted records that impact financing and farmer support rely on.",
    d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Connect communities",
    body: "Link farmers to certifications, services, and market opportunities.",
    d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="relative overflow-hidden py-20 md:py-28 geo-grid-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/4 to-background" />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">
            What you get out of it
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            The outcomes organizations come to Shamba for.
          </p>
        </div>

        <div className="mx-auto max-w-5xl grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <ScrollReveal key={b.title} delay={(i % 3) * 100}>
              <div>
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={b.d} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">{b.title}</h3>
                <p className="text-base text-muted-foreground">{b.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
