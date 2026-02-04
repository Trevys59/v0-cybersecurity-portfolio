"use client";

import { Button } from "@/components/ui/button";
import { Shield, ChevronDown, Download, FolderOpen, Mail } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,170,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,170,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Shield icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Shield className="w-10 h-10 text-primary" />
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          <span className="text-foreground">Trevys</span>{" "}
          <span className="text-primary">Sarrazyn</span>
        </h1>

        {/* Title */}
        <h2 className="text-lg md:text-xl text-muted-foreground mb-6 font-mono animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          Étudiant en Cybersécurité – Administrateur d{"'"}Infrastructures Sécurisées
        </h2>

        {/* Slogan */}
        <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          {"\""}Protéger les systèmes, anticiper les menaces, bâtir des infrastructures résilientes.{"\""}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <Button 
            size="lg" 
            className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8"
          >
            <Download className="w-4 h-4 mr-2 transition-transform group-hover:-translate-y-0.5" />
            Télécharger CV
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => scrollToSection("projects")}
            className="border-primary/50 text-primary hover:bg-primary/10 px-8"
          >
            <FolderOpen className="w-4 h-4 mr-2" />
            Voir mes projets
          </Button>
          <Button 
            variant="ghost" 
            size="lg" 
            onClick={() => scrollToSection("contact")}
            className="text-muted-foreground hover:text-primary px-8"
          >
            <Mail className="w-4 h-4 mr-2" />
            Me contacter
          </Button>
        </div>

        {/* Scroll indicator */}
        <button
          type="button"
          onClick={() => scrollToSection("about")}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}
