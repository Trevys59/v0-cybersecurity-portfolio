"use client";

import { contactInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, ExternalLink, Calendar } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Un projet en tête ?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Vous avez une opportunité d&apos;alternance, un projet ou simplement une question ?
            N&apos;hesitez pas a me contacter.
          </p>
        </div>

        {/* Contact options */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Email card */}
          <a
            href={`mailto:${contactInfo.email}`}
            className="group flex items-center gap-4 p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300"
          >
            <div className="p-4 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">Email</div>
              <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                {contactInfo.email}
              </div>
            </div>
          </a>

          {/* Calendly card */}
          <a
            href="https://calendly.com/trevys-sarrazyn/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300"
          >
            <div className="p-4 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">Entretien</div>
              <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                Reserver un créneau
              </div>
            </div>
          </a>
        </div>

        {/* Social links */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-border hover:border-primary/50 hover:bg-primary/10 text-foreground hover:text-primary bg-transparent"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
              <ExternalLink className="w-4 h-4" />
            </Button>
          </a>

          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-border hover:border-primary/50 hover:bg-primary/10 text-foreground hover:text-primary bg-transparent"
            >
              <Github className="w-5 h-5" />
              GitHub
              <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
        </div>

        {/* Availability notice */}
        <div className="mt-12 p-6 rounded-lg bg-primary/5 border border-primary/20 text-center">
          <p className="text-muted-foreground">
            Actuellement a la recherche d&apos;une{" "}
            <span className="text-primary font-medium">alternance</span> en cybersécurité
            pour le Mastere Expert en Securite Informatique.
          </p>
        </div>
      </div>
    </section>
  );
}
