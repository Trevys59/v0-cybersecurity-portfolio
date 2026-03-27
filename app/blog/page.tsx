import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { FileText, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Trevys Sarrazyn",
  description: "Articles et reflexions sur la cybersecurite, les infrastructures et les technologies.",
};

// Placeholder blog posts - to be replaced with actual content
const blogPosts = [
  {
    id: "coming-soon",
    title: "Articles a venir...",
    excerpt: "Des articles sur la cybersecurite, les bonnes pratiques de securisation d&apos;infrastructures, et mes retours d&apos;experience seront bientot disponibles.",
    date: "Bientot",
    readTime: null,
    tags: ["Cybersecurite", "Infrastructure"],
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Blog Header */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Blog
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Reflexions, tutoriels et retours d&apos;experience sur la cybersecurite et les infrastructures.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {blogPosts.length === 1 && blogPosts[0].id === "coming-soon" ? (
            // Coming soon state
            <div className="text-center py-24">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/30 mb-8">
                <FileText className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Contenu en preparation
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto mb-8">
                Des articles sur la cybersecurite, les bonnes pratiques de securisation 
                d&apos;infrastructures et mes retours d&apos;experience seront bientot disponibles.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {["Cybersecurite", "Infrastructure", "Cloud", "DevSecOps", "Veille"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm"
                  >
                    {tag}
                  </span>
                ))}
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
                    {post.readTime && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </>
                    )}
                  </div>
                  <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {post.title}
                  </h2>
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
