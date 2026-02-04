"use client";

import { Terminal, Server, Cloud, Shield } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-mono text-primary uppercase tracking-widest">
            À propos
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main text */}
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              Étudiant en cybersécurité en formation Bac+5, je me spécialise dans
              la conception et l{"'"}administration d{"'"}
              <span className="text-primary font-medium">
                infrastructures sécurisées
              </span>
              , les réseaux, le cloud et la supervision.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Passionné par la protection des systèmes d{"'"}information, je
              m{"'"}intéresse particulièrement à la surveillance proactive et à
              la construction d{"'"}architectures résilientes capables de
              résister aux menaces modernes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Mon objectif : contribuer à la sécurisation des infrastructures
              critiques et accompagner les organisations dans leur transformation
              numérique sécurisée.
            </p>
          </div>

          {/* Quick stats */}
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors group">
              <Terminal className="w-5 h-5 text-primary mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-sm text-muted-foreground">Focus</div>
              <div className="text-foreground font-medium">Sécurité Défensive</div>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors group">
              <Server className="w-5 h-5 text-primary mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-sm text-muted-foreground">Spécialité</div>
              <div className="text-foreground font-medium">Infrastructure</div>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors group">
              <Cloud className="w-5 h-5 text-primary mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-sm text-muted-foreground">Cloud</div>
              <div className="text-foreground font-medium">Azure</div>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors group">
              <Shield className="w-5 h-5 text-primary mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-sm text-muted-foreground">Niveau</div>
              <div className="text-foreground font-medium">Bac+5 en cours</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
