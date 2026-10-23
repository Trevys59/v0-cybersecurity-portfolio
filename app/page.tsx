import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/sections/hero-section";
import { PresentationSection } from "@/components/sections/presentation-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/footer";

import { Timeline } from "@/components/sections/timeline";
import { Projects } from "@/components/sections/projects";

export default function Home() {
  return (
    <>
      <Navigation />
      <main
        id="main-content"
        tabIndex={-1}
        className="min-h-screen bg-background text-foreground"
      >
        <HeroSection />
        <Timeline />
        <Projects />
        <PresentationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
