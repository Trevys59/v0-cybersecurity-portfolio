"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ThemeSwitch } from "./theme-switch";
const links = [
  { href: "/", label: "Accueil" },
  { href: "/#parcours", label: "Parcours" },
  { href: "/#projects", label: "Projets" },
  { href: "/cv", label: "CV" },
  { href: "/blog", label: "Blog" },
];
export function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [section, setSection] = useState("/");
  const progress = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const range = document.documentElement.scrollHeight - window.innerHeight;
      progress.current?.style.setProperty("transform", `scaleX(${range > 0 ? Math.min(1, Math.max(0, window.scrollY / range)) : 0})`);
      if (pathname === "/") {
        let current = "/";
        for (const id of ["parcours", "projects", "contact"]) {
          const element = document.getElementById(id);
          if (element && element.getBoundingClientRect().top <= window.innerHeight * 0.35) current = `/#${id}`;
        }
        setSection(current);
      }
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const resize = new ResizeObserver(schedule);
    resize.observe(document.body);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [pathname]);
  const active = pathname === "/" ? section : pathname;
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Navigation principale">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <Image
            src="/images/purp5-logo.png"
            alt="PURP5"
            width={40}
            height={40}
            priority
          />
          <span>
            Trevys Sarrazyn
            <span className="brand-caption">SECURITY ENGINEER</span>
          </span>
        </Link>
        <div className="desktop-nav">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={active === l.href ? (l.href.includes("#") ? "location" : "page") : undefined}
            >
              {l.label}
            </Link>
          ))}
          <Link className="contact-link" href="/#contact" aria-current={active === "/#contact" ? "location" : undefined}>
            Contact
          </Link>
        </div>
        <div className="nav-actions">
          <ThemeSwitch />
          <button
            className="mobile-toggle"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div
            id="mobile-navigation"
            className="mobile-nav"
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setOpen(false);
                document
                  .querySelector<HTMLButtonElement>(".mobile-toggle")
                  ?.focus();
              }
            }}
          >
            {[...links, { href: "/#contact", label: "Contact" }].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={active === l.href ? (l.href.includes("#") ? "location" : "page") : undefined}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
      <div className="reading-progress" aria-hidden="true"><div ref={progress} /></div>
    </header>
  );
}
