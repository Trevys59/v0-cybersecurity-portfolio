import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Skills } from "@/components/sections/skills";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Qualities } from "@/components/sections/qualities";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV | Trevys Sarrazyn",
  description: "Curriculum Vitae de Trevys Sarrazyn - Competences, formations, experiences et projets en cybersecurite.",
};

export default function CVPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* CV Header */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Curriculum Vitae
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Retrouvez ici l&apos;ensemble de mes compétences, formations, expériences professionnelles et projets réalisés.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Education Section */}
      <Education />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Qualities Section */}
      <Qualities />

      <Footer />
    </main>
  );
}
