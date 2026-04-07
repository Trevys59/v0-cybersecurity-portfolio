"use client";

import { contactInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Mail, Globe, Linkedin, Github, ExternalLink } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-mono text-primary uppercase tracking-widest">
            Contact
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Vous avez un projet, une opportunité ou simplement une question ?
          N{"'"}hésitez pas à me contacter.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-4">
            <a
              href={`mailto:${contactInfo.email}`}
              className="group flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <div className="text-foreground group-hover:text-primary transition-colors">
                  {contactInfo.email}
                </div>
              </div>
            </a>


          </div>

          {/* Social links */}
          <div className="flex flex-col justify-center gap-4">
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="w-full justify-start border-border hover:border-primary/50 hover:bg-primary/10 text-foreground hover:text-primary bg-transparent"
              >
                <Linkedin className="w-5 h-5 mr-3" />
                LinkedIn
                <ExternalLink className="w-4 h-4 ml-auto" />
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
                className="w-full justify-start border-border hover:border-primary/50 hover:bg-primary/10 text-foreground hover:text-primary bg-transparent"
              >
                <Github className="w-5 h-5 mr-3" />
                GitHub
                <ExternalLink className="w-4 h-4 ml-auto" />
              </Button>
            </a>

            <a
              href="https://tryhackme.com/p/Purp5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="w-full justify-start border-border hover:border-primary/50 hover:bg-primary/10 text-foreground hover:text-primary bg-transparent"
              >
                <Globe className="w-5 h-5 mr-3" />
                TryHackMe
                <ExternalLink className="w-4 h-4 ml-auto" />
              </Button>
            </a>


          </div>
        </div>
      </div>
    </section>
  );
}
