"use client";

import { education } from "@/lib/data";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-mono text-primary uppercase tracking-widest">
            Formation
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Education cards */}
        <div className="grid gap-6">
          {education.map((edu, index) => (
            <div
              key={edu.degree}
              className="group relative p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex-shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <span className="text-sm font-mono text-primary">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{edu.school}</p>
                  <p className="text-muted-foreground">{edu.school}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
