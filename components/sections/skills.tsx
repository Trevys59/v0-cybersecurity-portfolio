"use client";

import React from "react"

import { skills } from "@/lib/data";
import {
  Shield,
  Network,
  Cloud,
  FileCheck,
  Server,
  Code,
  Kanban,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  shield: <Shield className="w-6 h-6" />,
  network: <Network className="w-6 h-6" />,
  cloud: <Cloud className="w-6 h-6" />,
  compliance: <FileCheck className="w-6 h-6" />,
  server: <Server className="w-6 h-6" />,
  code: <Code className="w-6 h-6" />,
  project: <Kanban className="w-6 h-6" />,
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-mono text-primary uppercase tracking-widest">
            Compétences
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="group p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon and category */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {iconMap[skill.icon]}
                </div>
                <h3 className="font-semibold text-foreground">
                  {skill.category}
                </h3>
              </div>

              {/* Skill items */}
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
