import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { FeatureCard } from "@/components/sections/FeatureCard";
import { WaitlistForm } from "@/components/sections/WaitlistForm";
import { GeoDecorations } from "@/components/ui/GeoDecorations";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <Hero />

        {/* Products Section */}
        <Products />

        {/* Product Showcase Section */}
        <ProductShowcase />

        {/* Features Section */}
        <section id="features" className="relative overflow-hidden py-20 md:py-28 geo-grid-bg">
          {/* Subtle warm background */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/4 to-background" />

          {/* Smooth gradient transitions */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background" />

          {/* Geospatial decorations */}
          <GeoDecorations />

          <div className="container relative">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="mb-4 inline-flex items-center rounded-full border border-blue-light/40 px-4 py-1.5">
                <span className="text-xs font-semibold text-blue-light uppercase tracking-wider">Platform Capabilities</span>
              </div>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">
                Powerful Features for Field Organizations
              </h2>
              <p className="text-lg text-muted-foreground md:text-xl">
                Everything you need to manage and support smallholder farmers effectively in one integrated platform
              </p>
            </div>

            <div className="mx-auto max-w-5xl grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                }
                title="Geospatial Mapping"
                description="Visualize farmer locations, field boundaries, and agricultural data on interactive maps. Track progress across regions."
                delay={0}
              />

              <FeatureCard
                icon={
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                }
                title="Farmer Relationship Management"
                description="Manage detailed farmer profiles, track interactions, and maintain comprehensive records of all engagements."
                delay={100}
              />

              <FeatureCard
                icon={
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                }
                title="Data Analytics"
                description="Generate insights from your data with powerful analytics. Track yields, adoption rates, and impact metrics."
                delay={200}
              />

              <FeatureCard
                icon={
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                }
                title="Mobile Data Collection"
                description="Collect field data offline with our mobile app. Sync automatically when connectivity is available."
                delay={300}
              />

              <FeatureCard
                icon={
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                }
                title="Secure & Compliant"
                description="Enterprise-grade security with role-based access control. GDPR compliant data management."
                delay={400}
              />

              <FeatureCard
                icon={
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                }
                title="Program Management"
                description="Plan and track agricultural programs, training sessions, and interventions across your organization."
                delay={500}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="relative overflow-hidden py-20 md:py-28 geo-grid-bg">
          {/* Warm gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

          {/* Smooth gradient transition from previous section */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />

          {/* Decorative blur elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />

          <div className="container relative">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center rounded-full border border-blue-light/40 px-4 py-1.5">
                <span className="text-xs font-semibold text-blue-light uppercase tracking-wider">Coming Soon</span>
              </div>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">
                Be Among the First to Transform Farmer Support
              </h2>
              <p className="text-lg text-muted-foreground mb-10 md:text-xl">
                We&apos;re building the future of smallholder farmer management. Request early access and help shape the platform.
              </p>
              <WaitlistForm />
              <div className="mt-6 text-center">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-secondary/10 border-secondary/30 text-secondary hover:bg-secondary hover:text-secondary-foreground" asChild>
                  <a href="mailto:info@shamba.land">Contact us</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
