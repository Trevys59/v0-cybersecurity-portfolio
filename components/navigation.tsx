"use client";

import { useState, useEffect } from "react";
import { Shield, Menu, X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "À propos" },
  { href: "#education", label: "Formation" },
  { href: "#skills", label: "Compétences" },
  { href: "#experience", label: "Expériences" },
  { href: "#projects", label: "Projets" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
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
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <Shield className="w-6 h-6 text-primary" />
            <span className="font-semibold">Trevys Sarrazyn   </span>
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://calendly.com/trevys-sarrazyn/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2"
            >
              <Button size="sm" className="gap-2">
                <Calendar className="w-4 h-4" />
                Call with me
              </Button>
            </a>
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
                <button
                  key={link.href}
                  type="button"
                  onClick={() => scrollToSection(link.href)}
                  className="px-4 py-2 text-left text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://calendly.com/trevys-sarrazyn/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2"
              >
                <Button size="sm" className="w-full gap-2">
                  <Calendar className="w-4 h-4" />
                  Call with me
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
