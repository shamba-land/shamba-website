import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { FeatureCard } from "@/components/sections/FeatureCard";
import { DemoRequestForm } from "@/components/sections/DemoRequestForm";
import { GeoDecorations } from "@/components/ui/GeoDecorations";

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
        <section id="features" className="relative overflow-hidden py-16 md:py-24">
          {/* Subtle warm background */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/4 to-background" />

          {/* Smooth gradient transitions */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background" />

          <div className="container relative">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="mb-4 inline-flex items-center rounded-full bg-[oklch(0.55_0.15_240)] px-4 py-1.5">
                <span className="text-xs font-semibold text-white uppercase tracking-wider">Benefits</span>
              </div>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">
                What Shamba enables
              </h2>
              <p className="text-lg text-muted-foreground md:text-xl">
                Trust your data, trace your supply chains, and prove your impact.
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
                title="Trace supply chains"
                description="Follow products from farmer to market with trusted, auditable records."
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
                title="Digitize operations"
                description="Replace paper and spreadsheets with field workflows that just work."
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
                title="Report impact"
                description="Turn field data into clear reports for funders and buyers."
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
                title="Scale your reach"
                description="Grow programs and farmer networks without growing the complexity."
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
                title="Unlock financing"
                description="Build the trusted records that impact financing and farmer support rely on."
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
                title="Connect communities"
                description="Link farmers to certifications, services, and market opportunities."
                delay={500}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="relative overflow-hidden py-40 md:py-48 geo-grid-bg">
          {/* Warm gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

          {/* Smooth gradient transition from previous section */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />

          {/* Decorative blur elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />

          <GeoDecorations />

          <div className="container relative">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">
                Ready to scale impact?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 md:text-xl">
                Request a demo to learn what Shamba can mean for your organization.
              </p>
              <DemoRequestForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
