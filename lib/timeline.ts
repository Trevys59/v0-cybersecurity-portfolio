import { education, experiences, projects } from "./data";
export type TimelineCategory =
  "Formations" | "Expériences" | "Projets" | "Certifications";
export interface TimelineEntry {
  id: string;
  category: TimelineCategory;
  date: string;
  title: string;
  context: string;
  details: string[];
  technologies: string[];
}
export const timelineEntries: TimelineEntry[] = [
  {
    id: "advens",
    category: "Expériences",
    date: "En cours · début à confirmer",
    title: "Security Engineer",
    context: "Advens · SDC-OSE · Alternance",
    details: [
      "Poste et équipe confirmés. Les missions détaillées et la date de début restent à valider.",
    ],
    technologies: [],
  },
  ...education.map((e, i) => ({
    id: `formation-${i}`,
    category: "Formations" as const,
    date: e.period,
    title: e.degree,
    context: e.school,
    details: e.description ? [e.description] : [],
    technologies: [],
  })),
  ...experiences
    .slice(1)
    .map((e, i) => ({
      id: `experience-${i}`,
      category: "Expériences" as const,
      date: e.period,
      title: e.title,
      context: e.company,
      details: e.tasks,
      technologies:
        i === 0
          ? ["Proxmox", "Active Directory", "pfSense", "Prometheus", "Grafana"]
          : [],
    })),
  ...projects.map((e) => ({
    id: e.id,
    category: "Projets" as const,
    date: "Date à confirmer",
    title: e.title,
    context: "Projet de formation / laboratoire",
    details: [e.description, e.securityObjective],
    technologies: e.technologies,
  })),
];
// Explicit ordering uses only dates already present in the portfolio.
export const datedIds = [
  "formation-2",
  "experience-1",
  "formation-1",
  "experience-0",
  "formation-0",
];
