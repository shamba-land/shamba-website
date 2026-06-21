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
  { label: "Products", href: "#products" },
  { label: "Platform", href: "#platform" },
  { label: "Features", href: "#features" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        isScrolled ? "sticky" : "absolute"
      } top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background" : "bg-transparent"
      }`}
    >
      <div
        className={`container flex h-16 items-center justify-between ${
          isScrolled
            ? "border-b border-border"
            : "border-b border-white/20"
        }`}
      >
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <Image
              src={isScrolled ? "/logo.svg" : "/logo-white.svg"}
              alt="Shamba.land"
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
                        isScrolled
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
          {isScrolled ? (
            <>
              <Button variant="outline" asChild className="hidden md:inline-flex hover:bg-primary/10 hover:text-primary">
                <a href="#contact">Request Demo</a>
              </Button>
              {/* Desktop: Open the live app. Mobile: surface a demo CTA
                  instead — sending mobile visitors straight into the app
                  without context tends to feel jarring. The /signup
                  deeplink lands unauthenticated visitors on the signup
                  flow; the app's auth guard sends already-signed-in
                  users to their home. */}
              <Button asChild className="hidden md:inline-flex">
                <a href="https://platform.shamba.land/signup" target="_blank" rel="noopener noreferrer">Open Shamba</a>
              </Button>
              <Button asChild className="md:hidden">
                <a href="#contact">Request Demo</a>
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outline"
                asChild
                className="hidden md:inline-flex bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                <a href="#contact">Request Demo</a>
              </Button>
              <Button asChild className="hidden md:inline-flex bg-white text-primary hover:bg-white/90">
                <a href="https://platform.shamba.land/signup" target="_blank" rel="noopener noreferrer">Open Shamba</a>
              </Button>
              <Button asChild className="md:hidden bg-white text-primary hover:bg-white/90">
                <a href="#contact">Request Demo</a>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
