import { ScrollReveal } from "@/components/ui/ScrollReveal";

const situation = [
  "Rising certification and compliance demands",
  "Buyers and regulators asking for traceability (EUDR)",
  "Funders expecting proof of impact and outcomes",
];

const challenge = [
  "Records scattered across one-off surveys and spreadsheets",
  "Little to no connectivity where the work happens",
  "No lasting digital identity to follow a farmer over time",
];

export function Problem() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 geo-grid-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/4 to-background" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />

      <div className="container relative">
        <ScrollReveal>
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">
              500 million smallholder farms are disconnected from the global economy.
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl max-w-3xl">
              The organizations that support them, cooperatives, NGOs, and sustainability
              programs, face growing demands from buyers, certifiers, and regulators, but lack
              the digital infrastructure to meet them at scale.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-16 max-w-4xl">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-5">
                What they are asked for
              </h3>
              <ul className="space-y-3">
                {situation.map((item) => (
                  <li key={item} className="flex gap-3 text-base text-foreground/90">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* hairline divider between the two columns on desktop */}
            <div className="md:border-l md:border-border md:pl-16">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-5">
                What stands in the way
              </h3>
              <ul className="space-y-3">
                {challenge.map((item) => (
                  <li key={item} className="flex gap-3 text-base text-foreground/90">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
