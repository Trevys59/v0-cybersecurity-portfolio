"use client";

import { Shield, Server, Eye, FileCheck } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Securite defensive",
    description: "Configuration pare-feu, controle d'acces, supervision et reponse a incident.",
  },
  {
    icon: Server,
    title: "Infrastructure",
    description: "Deploiement et administration de systemes Linux/Windows, virtualisation, cloud.",
  },
  {
    icon: Eye,
    title: "Supervision",
    description: "Mise en place de monitoring, alerting et tableaux de bord pour une visibilite complete.",
  },
  {
    icon: FileCheck,
    title: "Conformite",
    description: "Connaissance des normes RGPD, ISO 27001, NIS2 et analyse de risques.",
  },
];

export function PresentationSection() {
  return (
    <section id="presentation" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Qui suis-je ?
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              Étudiant en cybersécurité en Bac+5, je me forme dans le domaine de la cybersécurité passant par la
              <span className="text-primary font-medium"> Blue Team & Red Team</span>,
              avec un goût pour la GRC.
            </p>
            <p>
              Je m&apos;interesse particulièrement a la surveillance des systèmes et a la manière de construire
              des architectures solides face aux menaces actuelles. J&apos;aime l&apos;idée d&apos;anticiper les
              problèmes plutôt que de les subir.
            </p>
            <p>
              Mon objectif : travailler dans la securité des infrastructures et aider les organisations
              a évoluer vers un numerique plus sur.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-8">
            Mes domaines d&apos;intervention
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {service.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick info cards */}
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="p-6 rounded-lg bg-primary/5 border border-primary/20 text-center">
            <div className="text-3xl font-bold text-primary mb-2">Bac+5</div>
            <div className="text-sm text-muted-foreground">En cours</div>
          </div>
          <div className="p-6 rounded-lg bg-primary/5 border border-primary/20 text-center">
            <div className="text-3xl font-bold text-primary mb-2">Consultant Cyber / Blue Team</div>
            <div className="text-sm text-muted-foreground">Orientation</div>
          </div>
          <div className="p-6 rounded-lg bg-primary/5 border border-primary/20 text-center">
            <div className="text-3xl font-bold text-primary mb-2">Alternance</div>
            <div className="text-sm text-muted-foreground">Recherche active</div>
          </div>
        </div>
      </div>
    </section>
  );
}
