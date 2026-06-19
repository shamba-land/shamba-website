import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { BuiltForBand } from "@/components/sections/BuiltForBand";
import { AudienceRows } from "@/components/sections/AudienceRows";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Benefits } from "@/components/sections/Benefits";
import { WaitlistForm } from "@/components/sections/WaitlistForm";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hook: "Putting smallholders on the map" */}
        <Hero />

        {/* The customer's problem, before the product */}
        <Problem />

        {/* Quick "is this for me?" qualification */}
        <BuiltForBand />

        {/* Combined product: audience-led rows (who + use case + the live map) */}
        <AudienceRows />

        {/* Office + field deep-dive (interactive web + mobile mockups) */}
        <ProductShowcase />

        {/* Outcomes */}
        <Benefits />

        {/* CTA */}
        <section id="contact" className="relative overflow-hidden py-20 md:py-28 geo-grid-bg">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />

          <div className="container relative">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">
                Built for organizations supporting smallholder farmers
              </h2>
              <p className="text-lg text-muted-foreground mb-10 md:text-xl">
                Request a demo to see Shamba with your own farmers and plots.
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
