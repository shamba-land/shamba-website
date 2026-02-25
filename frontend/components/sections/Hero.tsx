import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source
            src={process.env.NEXT_PUBLIC_VIDEO_URL || "/videos/hero-background.mp4"}
            type="video/mp4"
          />
        </video>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex h-full items-end pb-20 md:pb-24">
        <div className="flex w-full flex-col md:flex-row md:items-end md:justify-between gap-8">
          {/* Left side - Text content */}
          <div className="flex flex-col max-w-2xl">
            {/* Badge */}
            <div className="mb-8">
              <div className="inline-flex items-center rounded-full border border-white/50 px-4 py-1.5">
                <span className="text-xs font-semibold text-white uppercase tracking-wider">
                  Coming Soon
                </span>
              </div>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Geospatial CRM for{" "}
              <span className="text-white/90">
                Smallholder Farmers
              </span>
            </h1>

            <p className="text-lg text-white/90 md:text-xl">
              We're building powerful, location-aware tools to help local
              organizations support smallholder farmers effectively.
            </p>
          </div>

          {/* Right side - Buttons */}
          <div className="flex flex-col gap-4 md:flex-row md:items-end">
            <Button size="lg" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90" asChild>
              <a href="#contact">Request Access</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-transparent text-white border-white/20 hover:bg-white/20 hover:text-white"
              asChild
            >
              <a href="#products">Learn More</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <svg
          className="h-6 w-6 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
