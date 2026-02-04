"use client";

import { experiences } from "@/lib/data";
import { Briefcase, ChevronRight } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-mono text-primary uppercase tracking-widest">
            Expériences
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={`${exp.title}-${index}`} className="relative pl-20">
                {/* Timeline dot */}
                <div className="absolute left-6 top-1 w-5 h-5 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                  <Briefcase className="w-2.5 h-2.5 text-primary" />
                </div>

                {/* Content */}
                <div className="group">
                  <div className="text-sm font-mono text-primary mb-1">
                    {exp.period}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <div className="text-muted-foreground mb-4">{exp.company}</div>

                  <ul className="space-y-2">
                    {exp.tasks.map((task) => (
                      <li
                        key={task}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
