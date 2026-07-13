import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Products() {
  return (
    <section id="products" className="relative overflow-hidden py-16 md:py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/6 to-background" />

      {/* Smooth gradient transition from hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background/80 to-transparent" />

      {/* Smooth gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background" />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="mb-4 inline-flex items-center rounded-full bg-[oklch(0.55_0.15_240)] px-4 py-1.5">
            <span className="text-xs font-semibold text-white uppercase tracking-wider">Who it&apos;s for</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">
            Built for organizations serving smallholder farmers
          </h2>
          <p className="text-lg text-muted-foreground">
            Cooperatives, agribusinesses, NGOs, and governments, all working from one shared record.
          </p>
        </div>

        {/* Main Product Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {/* CRM Product */}
          <ScrollReveal delay={0}>
            <Card className="group relative overflow-hidden border-2 transition-all hover:border-primary shadow-hard hover:shadow-hard-primary hover:translate-x-1 hover:translate-y-1 h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all" />
              <CardHeader className="relative">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <CardTitle className="text-2xl">Cooperatives</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6">
                  Register members, map their land, and run the cooperative from one record.
                </CardDescription>
                <ul className="space-y-2 text-base text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Member registration and profiles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Plot mapping and boundaries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Traceability</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Geospatial Product */}
          <ScrollReveal delay={150}>
            <Card className="group relative overflow-hidden border-2 transition-all hover:border-primary shadow-hard hover:shadow-hard-primary hover:translate-x-1 hover:translate-y-1 h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-all" />
              <CardHeader className="relative">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-all group-hover:bg-secondary group-hover:text-primary-foreground group-hover:scale-110">
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <CardTitle className="text-2xl">NGOs and impact programs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6">
                  Enroll farmers, run surveys offline, and report outcomes funders trust.
                </CardDescription>
                <ul className="space-y-2 text-base text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-secondary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Offline farmer enrollment and surveys</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-secondary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Training and intervention tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-secondary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Outcome reporting for funders</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Mobile App Product */}
          <ScrollReveal delay={300}>
            <Card className="group relative overflow-hidden border-2 transition-all hover:border-primary shadow-hard hover:shadow-hard-primary hover:translate-x-1 hover:translate-y-1 h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all" />
              <CardHeader className="relative">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all group-hover:bg-accent group-hover:text-primary-foreground group-hover:scale-110">
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <CardTitle className="text-2xl">Sustainability certification</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6">
                  Capture EUDR geolocation, run inspections, and prove deforestation-free to the farm.
                </CardDescription>
                <ul className="space-y-2 text-base text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>EUDR geolocation and due diligence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Certification inspections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Custom compliance surveys</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" asChild>
            <a href="#contact">Request a Demo</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
