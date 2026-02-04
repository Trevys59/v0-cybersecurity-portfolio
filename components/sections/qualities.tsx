"use client";

import { qualities, interests } from "@/lib/data";
import { Sparkles, Heart } from "lucide-react";

export function Qualities() {
  return (
    <section id="qualities" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Qualities */}
          <div>
            {/* Section header */}
            <div className="flex items-center gap-4 mb-8">
              <Sparkles className="w-5 h-5 text-primary" />
              <h2 className="text-sm font-mono text-primary uppercase tracking-widest">
                Qualités
              </h2>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="space-y-4">
              {qualities.map((quality, index) => (
                <div
                  key={quality.label}
                  className="group p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                    {quality.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {quality.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div>
            {/* Section header */}
            <div className="flex items-center gap-4 mb-8">
              <Heart className="w-5 h-5 text-primary" />
              <h2 className="text-sm font-mono text-primary uppercase tracking-widest">
                Centres d{"'"}intérêt
              </h2>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="space-y-4">
              {interests.map((interest, index) => (
                <div
                  key={interest.label}
                  className="group p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                    {interest.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {interest.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
