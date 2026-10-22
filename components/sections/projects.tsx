"use client";

import { projects } from "@/lib/data";

import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-mono text-primary uppercase tracking-widest">
            Projets
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Découvrez une sélection de projets réalisés dans le cadre de ma
          formation et de mes stages en cybersécurité.
        </p>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.id}
              id={`project-${project.id}`}
              className="reveal group relative p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project icon */}
              <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Shield className="w-6 h-6" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs bg-secondary text-secondary-foreground border-none"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <details className="project-details">
                <summary>Contexte et objectif sécurité</summary>
                <div>
                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Security objective */}
                  <div className="p-3 rounded-md bg-primary/5 border border-primary/20 mb-4">
                    <div className="text-xs font-mono text-primary mb-1">
                      Objectif sécurité
                    </div>
                    <p className="text-sm text-foreground/80">
                      {project.securityObjective}
                    </p>
                  </div>
                </div>
              </details>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
