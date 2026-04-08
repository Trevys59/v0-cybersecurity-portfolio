import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/sections/hero-section";
import { PresentationSection } from "@/components/sections/presentation-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/footer";
import { DecorativeBlobs } from "@/components/decorative-blobs";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <DecorativeBlobs />
      <Navigation />
      <HeroSection />
      <PresentationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
