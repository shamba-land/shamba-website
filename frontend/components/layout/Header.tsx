"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const navItems = [
  { label: "Products", href: "/#products" },
  { label: "Platform", href: "/#platform" },
  { label: "Features", href: "/#features" },
];

export function Header({ solid = false }: { solid?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // `solid` forces the opaque/dark-logo header on non-hero pages (e.g.
  // the legal pages), which have a light background from the top where
  // the transparent white-logo variant would be illegible.
  const showSolid = solid || isScrolled;

  return (
    <header
      className={`${
        showSolid ? "sticky" : "absolute"
      } top-0 z-50 w-full transition-all duration-300 ${
        showSolid ? "bg-background" : "bg-transparent"
      }`}
    >
      <div
        className={`container flex h-16 items-center justify-between ${
          showSolid
            ? "border-b border-border"
            : "border-b border-white/20"
        }`}
      >
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <Image
              src={showSolid ? "/logo.svg" : "/logo-white.svg"}
              alt="Shamba"
              width={111}
              height={32}
              className="h-6 w-auto transition-opacity duration-300"
              priority
            />
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <a
                      href={item.href}
                      className={`px-4 py-2 text-sm font-medium transition-colors ${
                        showSolid
                          ? "hover:text-primary"
                          : "text-white hover:text-white/80"
                      }`}
                    >
                      {item.label}
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          {showSolid ? (
            <>
              <Button variant="outline" asChild className="hidden md:inline-flex bg-white hover:bg-primary/10 hover:text-primary">
                <Link href="/#contact">Request a demo</Link>
              </Button>
              {/* Desktop: Open the live app. Mobile: surface a demo CTA
                  instead, since sending mobile visitors straight into the app
                  without context tends to feel jarring. The /signup
                  deeplink lands unauthenticated visitors on the signup
                  flow; the app's auth guard sends already-signed-in
                  users to their home. */}
              <Button asChild className="hidden md:inline-flex">
                <a href="https://platform.shamba.com/signup" target="_blank" rel="noopener noreferrer">Open Shamba</a>
              </Button>
              <Button asChild className="md:hidden">
                <a href="https://platform.shamba.com/signup" target="_blank" rel="noopener noreferrer">Sign up</a>
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outline"
                asChild
                className="hidden md:inline-flex bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/#contact">Request a demo</Link>
              </Button>
              <Button asChild className="hidden md:inline-flex bg-white text-primary hover:bg-white/90">
                <a href="https://platform.shamba.com/signup" target="_blank" rel="noopener noreferrer">Open Shamba</a>
              </Button>
              <Button asChild className="md:hidden bg-white text-primary hover:bg-white/90">
                <a href="https://platform.shamba.com/signup" target="_blank" rel="noopener noreferrer">Sign up</a>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
