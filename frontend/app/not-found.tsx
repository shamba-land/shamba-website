import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/layout/Footer";
import { GeoDecorations } from "@/components/ui/GeoDecorations";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Static Header */}
      <header className="sticky top-0 z-50 w-full bg-background">
        <div className="container flex h-16 items-center justify-between border-b border-border">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Shamba"
              width={111}
              height={32}
              className="h-6 w-auto"
              priority
            />
          </Link>
          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </header>

      {/* 404 Content */}
      <main className="flex-1 relative overflow-hidden geo-grid-bg">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/4 to-background" />

        {/* Decorative blur elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/8 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/8 rounded-full blur-3xl" />

        {/* Geo coordinate decorations */}
        <GeoDecorations />

        <div className="container relative flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
          {/* 404 Number */}
          <div className="mb-6">
            <span className="text-8xl md:text-9xl font-bold text-primary/20">404</span>
          </div>

          {/* Message */}
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Page not found
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/">
                <svg
                  className="mr-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Back to Home
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/#contact">
                Contact Support
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
