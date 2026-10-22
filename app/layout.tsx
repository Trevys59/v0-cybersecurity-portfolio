import React from "react";
import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { RevealObserver } from "@/components/reveal-observer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trevys Sarrazyn | Portfolio Cybersécurité",
  description:
    "Trevys Sarrazyn, Security Engineer en alternance chez Advens, équipe SDC-OSE. Parcours, projets et formation en cybersécurité.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a className="skip-link" href="#main-content">
            Aller au contenu
          </a>
          <RevealObserver />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
