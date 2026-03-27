"use client";

import { Github, Linkedin } from "lucide-react";
import { contactInfo } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and copyright */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/purp5-logo.png"
              alt="PURP5 Logo"
              width={28}
              height={28}
              className="rounded"
            />
            <span className="text-sm text-muted-foreground">
              {currentYear} Trevys Sarrazyn. Tous droits réservés.
            </span>
          </div>

          {/* Navigation links */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Accueil
            </Link>
            <Link
              href="/cv"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              CV
            </Link>
            <Link
              href="/blog"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Blog
            </Link>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Built with */}
        <div className="mt-8 pt-6 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground">
            Conçu avec passion pour la cybersécurité
          </p>
        </div>
      </div>
    </footer>
  );
}
