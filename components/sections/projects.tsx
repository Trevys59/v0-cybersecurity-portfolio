"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, Shield, X } from "lucide-react";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-mono text-primary uppercase tracking-widest">Projets</h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Découvrez les projets réalisés pendant ma formation d’Administrateur
          d’Infrastructures Sécurisées chez Simplon, de décembre 2024 à octobre 2025.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article key={project.id} id={`project-${project.id}`} className="project-card reveal">
              <div className="project-icon"><Shield size={24} aria-hidden="true" /></div>
              <h3 className="text-lg font-semibold mb-4">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.slice(0, 4).map((tech) => <Badge key={tech} variant="secondary">{tech}</Badge>)}
                {project.technologies.length > 4 && <span className="text-xs text-muted-foreground self-center">+{project.technologies.length - 4} outils</span>}
              </div>
              <Dialog.Root>
                <Dialog.Trigger className="project-open" aria-label={`Explorer le projet : ${project.title}`}>
                  Explorer le projet <ArrowUpRight size={18} aria-hidden="true" />
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="project-overlay" />
                  <Dialog.Content className="project-dialog" aria-describedby={undefined}>
                    <Dialog.Close className="dialog-close" aria-label="Fermer la fiche projet"><X size={22} /></Dialog.Close>
                    <p className="eyebrow">PROJET / FORMATION AIS</p>
                    <Dialog.Title className="project-dialog-title">{project.title}</Dialog.Title>
                    <p className="text-sm text-muted-foreground mb-8">Simplon · Décembre 2024 – Octobre 2025</p>
                    <h3>Contexte et réalisations</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-objective"><h3>Objectif sécurité</h3><p>{project.securityObjective}</p></div>
                    <h3>Technologies utilisées</h3>
                    <div className="tech-list">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
