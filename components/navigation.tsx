"use client";

import { useState, useEffect } from "react";
import { Menu, X, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/cv", label: "CV" },
  { href: "/blog", label: "Blog" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactClick = () => {
    if (pathname === "/") {
      // On homepage, scroll to contact section
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      // On other pages, navigate to homepage contact section
      window.location.href = "/#contact";
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
          >
            <Image
              src="/images/purp5-logo.png"
              alt="PURP5 Logo"
              width={36}
              height={36}
              className="rounded"
            />
            <span className="font-semibold">Trevys Sarrazyn</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm transition-colors",
                  pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              size="sm" 
              className="ml-4 gap-2"
              onClick={handleContactClick}
            >
              <Mail className="w-4 h-4" />
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Mobile navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-2 text-left rounded-md transition-colors",
                    pathname === link.href
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                className="mt-2 w-full gap-2"
                onClick={handleContactClick}
              >
                <Mail className="w-4 h-4" />
                Contact
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
