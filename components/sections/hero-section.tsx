"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Globe, Mail, Download } from "lucide-react";
import { contactInfo } from "@/lib/data";

const socialLinks = [
  {
    name: "GitHub",
    href: contactInfo.github,
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: contactInfo.linkedin,
    icon: Linkedin,
  },
  {
    name: "TryHackMe",
    href: "https://tryhackme.com/p/Purp5",
    icon: Globe,
  },
  {
    name: "Root-Me",
    href: "https://www.root-me.org/Purpy",
    icon: Globe,
  },
];

export function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(170,0,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(170,0,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-primary">Disponible pour alternance</span>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 text-balance">
          <span className="text-foreground">Trevys</span>{" "}
          <span className="text-primary">Sarrazyn</span>
        </h1>

        {/* Title */}
        <h2 className="text-lg md:text-xl text-muted-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          Etudiant en Cybersecurite
        </h2>

        {/* Slogan */}
        <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 text-balance">
          {"\""}Proteger les systemes, anticiper les menaces, batir des infrastructures resilientes.{"\""}
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="sm"
                className="gap-2 border-border hover:border-primary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary bg-transparent"
              >
                <link.icon className="w-4 h-4" />
                {link.name}
              </Button>
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <a href="/CV_Trevys_Sarrazyn.pdf" download>
            <Button
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8"
            >
              <Download className="w-4 h-4 mr-2 transition-transform group-hover:-translate-y-0.5" />
              Telecharger CV
            </Button>
          </a>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="border-primary/50 text-primary hover:bg-primary/10 px-8"
          >
            <Mail className="w-4 h-4 mr-2" />
            Me contacter
          </Button>
        </div>

        {/* Scroll indicator */}
        <button
          type="button"
          onClick={() => scrollToSection("presentation")}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}
