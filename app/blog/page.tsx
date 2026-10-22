import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { FileText, Eye, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Veilles | Trevys Sarrazyn",
  description:
    "Articles, reflexions et veilles technologiques sur la cybersecurite.",
};

// Blog posts - articles personnels
const blogPosts = [
  {
    id: "coming-soon",
    title: "Articles a venir...",
    excerpt:
      "Des articles sur la cybersecurite, les bonnes pratiques de securisation d'infrastructures, et mes retours d'experience seront bientot disponibles.",
    date: "Bientot",
    tags: ["Cybersecurite", "Infrastructure"],
  },
];

// Veilles technologiques
const veilles = [
  {
    id: "caido",
    title: "Veille Caido",
    excerpt:
      "Exploration de Caido, un outil moderne de proxy d'interception pour les tests de securite web, alternative a Burp Suite.",
    tags: ["Pentest", "Outils", "Web Security"],
    url: "https://canva.link/gjlj7n3369r8frs",
  },
  {
    id: "steganographie",
    title: "Veille Steganographie",
    excerpt:
      "Decouverte des techniques de steganographie, l'art de dissimuler des informations dans des fichiers multimedia.",
    tags: ["Steganographie", "Forensics", "OSINT"],
    url: "https://canva.link/vu52jmy0f0uifxy",
  },
];

export default function BlogPage() {
  const hasBlogPosts =
    blogPosts.length > 0 && blogPosts[0].id !== "coming-soon";

  return (
    <main
      id="main-content"
      className="min-h-screen bg-background text-foreground"
    >
      <Navigation />

      {/* Page Header */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Blog & Veilles
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mes articles, reflexions et veilles technologiques sur la
            cybersecurite.
          </p>
        </div>
      </section>

      {/* Veilles Section */}
      <section className="py-12 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10">
              <Eye className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">
              Veilles Technologiques
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {veilles.map((veille) => (
              <a
                key={veille.id}
                href={veille.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {veille.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-2" />
                </div>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {veille.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {veille.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Articles</h2>
          </div>

          {!hasBlogPosts ? (
            // Coming soon state
            <div className="text-center py-16 rounded-lg bg-card border border-border">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/30 mb-6">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Contenu en preparation
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto mb-6 text-sm">
                Des articles sur la cybersecurite, les bonnes pratiques de
                securisation d&apos;infrastructures et mes retours
                d&apos;experience seront bientot disponibles.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {["Cybersecurite", "Infrastructure", "Cloud", "DevSecOps"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          ) : (
            // Blog posts grid
            <div className="grid gap-6">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="group p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
