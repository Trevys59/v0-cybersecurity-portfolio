import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowDown, Download } from "lucide-react";
export function HeroSection() {
  return (
    <section className="hero-shell">
      <div className="network-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-copy">
        <p className="eyebrow intro">PURP5 / CYBERSÉCURITÉ</p>
        <p className="availability intro">
          Security Engineer · Alternance chez Advens
        </p>
        <h1 className="intro">
          Trevys
          <br />
          <span>Sarrazyn.</span>
        </h1>
        <p className="hero-position intro">
          Comprendre les systèmes.
          <br />
          Sécuriser les accès.
        </p>
        <p className="hero-description intro">
          Étudiant en mastère cybersécurité, je construis mon parcours autour
          des identités, des infrastructures et de la sécurité défensive.
        </p>
        <div className="hero-actions intro">
          <Link className="action-primary" href="#parcours">
            Explorer mon parcours <ArrowDown size={17} />
          </Link>
          <a
            className="action-secondary"
            href="/CV_Trevys_Sarrazyn.pdf"
            download
          >
            Mon CV <Download size={17} />
          </a>
        </div>
        <div className="hero-socials">
          <a
            href="https://github.com/Trevys59"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <ArrowUpRight size={14} />
          </a>
          <a
            href="https://www.linkedin.com/in/trevys-sarrazyn-2507551b1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <ArrowUpRight size={14} />
          </a>
          <a
            href="https://tryhackme.com/p/Purp5"
            target="_blank"
            rel="noopener noreferrer"
          >
            TryHackMe
          </a>
          <a
            href="https://www.root-me.org/Purpy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Root-Me
          </a>
        </div>
      </div>
      <div className="identity-panel intro">
        <div className="identity-top">
          <span>IDENTITÉ / 01</span>
          <span>SDC-OSE</span>
        </div>
        <div className="identity-orbit">
          <Image
            src="/images/purp5-logo.png"
            alt="Identité PURP5"
            width={200}
            height={200}
            priority
          />
        </div>
        <div className="identity-bottom">
          <p>La technique, avec méthode.</p>
          <span>IAM · INFRASTRUCTURE · BLUE TEAM</span>
        </div>
      </div>
      <div className="hero-foot">
        <span>APPRENDRE. PRATIQUER. TRANSMETTRE.</span>
        <a href="#parcours">
          La suite de mon parcours <ArrowDown size={16} />
        </a>
      </div>
    </section>
  );
}
