"use client";
import { useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { timelineEntries, datedIds, type TimelineEntry } from "@/lib/timeline";
const filters = [
  "Tout",
  "Formations",
  "Expériences",
  "Projets",
  "Certifications",
] as const;
function Entry({ entry }: { entry: TimelineEntry }) {
  return (
    <article className="timeline-item reveal">
      <div className="timeline-date">
        {entry.date}
        <span>{entry.category}</span>
      </div>
      <details className="timeline-card">
        <summary>
          <div>
            <p>{entry.context}</p>
            <h3>{entry.title}</h3>
          </div>
          <Plus className="expand-icon" size={20} />
        </summary>
        <div className="timeline-detail">
          {entry.details.map((t) => (
            <p key={t}>{t}</p>
          ))}
          {entry.technologies.length > 0 && (
            <div className="tech-list">
              {entry.technologies.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          )}
          {entry.category === "Projets" && (
            <a href={`#project-${entry.id}`} className="inline-link">
              Voir la fiche projet <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </details>
    </article>
  );
}
export function Timeline() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Tout");
  const matches = (e: TimelineEntry) =>
    filter === "Tout" || e.category === filter;
  const dated = datedIds
    .map((id) => timelineEntries.find((e) => e.id === id)!)
    .filter(matches);
  const pending = timelineEntries.filter(
    (e) => !datedIds.includes(e.id) && matches(e),
  );
  return (
    <section id="parcours" className="timeline-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / LE FIL DU PARCOURS</p>
          <h2>
            Chaque étape,
            <br />
            <span>une nouvelle perspective.</span>
          </h2>
        </div>
        <p>
          Des premières infrastructures aux enjeux d’identité. Ouvrez une étape
          pour découvrir son contexte et les technologies associées.
        </p>
      </div>
      <div
        className="filter-list"
        role="group"
        aria-label="Filtrer le parcours"
      >
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
          >
            {f}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        {dated.length + pending.length} étapes affichées
      </p>
      <div className="timeline-track">
        {dated.map((e) => (
          <Entry key={e.id} entry={e} />
        ))}
      </div>
      {pending.length > 0 && (
        <div className="pending-entries">
          <h3>À situer dans le parcours</h3>
          <p className="text-muted-foreground mb-8">
            Ces éléments sont présentés sans leur attribuer de date non
            confirmée.
          </p>
          {pending.map((e) => (
            <Entry key={e.id} entry={e} />
          ))}
        </div>
      )}
      {filter === "Certifications" && (
        <div className="empty-state">
          <h3>Un parcours à documenter</h3>
          <p>
            Aucune certification obtenue ou en préparation n’est encore
            confirmée dans les données du portfolio.
          </p>
        </div>
      )}
      <p className="timeline-note">
        Les niveaux de maîtrise ne sont pas déduits des technologies citées. Les
        distinctions « connue », « étudiée », « pratiquée » et « expliquée sans
        assistance » seront ajoutées après validation.
      </p>
    </section>
  );
}
