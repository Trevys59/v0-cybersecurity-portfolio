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
              Étudiant en cybersécurité en Bac+5, je me forme dans
              la conception et l{"'"}administration d{"'"}
              <span className="text-primary font-medium">
                infrastructures sécurisées
              </span>
              , entre réseaux, cloud et supervision.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Je m{"'"}intéresse beaucoup à la surveillance des systèmes et à la manière de construire des architectures solides face aux menaces actuelles. J{"'"}aime l{"'"}idée d{"'"}anticiper les problèmes plutôt que de les subir.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Mon objectif : travailler dans la sécurité des infrastructures et aider les organisations à évoluer vers un numérique plus sûr.
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
              <div className="text-sm text-muted-foreground">Métiers visés</div>
              <div className="text-foreground font-medium">Consultant Cyber ou Blue Team</div>
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
