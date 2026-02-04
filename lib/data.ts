export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  securityObjective: string;
}

export const projects: Project[] = [
  {
    id: "infra-multisite",
    title: "Infrastructure Sécurisée Multi-Sites",
    description:
      "Conception et déploiement d'une infrastructure virtualisée interconnectant plusieurs sites distants avec une haute disponibilité et une sécurité renforcée.",
    technologies: ["Proxmox", "pfSense", "VPN IPsec", "VLAN", "HAProxy"],
    securityObjective:
      "Assurer la confidentialité des échanges inter-sites et la résilience face aux pannes.",
  },
  {
    id: "supervision-centralisee",
    title: "Supervision Centralisée",
    description:
      "Mise en place d'une stack de supervision complète permettant le monitoring en temps réel des infrastructures, avec alerting et dashboards personnalisés.",
    technologies: ["Prometheus", "Grafana", "Loki", "Alertmanager", "Node Exporter"],
    securityObjective:
      "Détecter les anomalies et intrusions potentielles grâce à une surveillance proactive.",
  },
  {
    id: "cloud-azure",
    title: "Architecture Cloud Sécurisée sur Azure",
    description:
      "Déploiement d'une architecture cloud respectant les bonnes pratiques de sécurité avec gestion des identités, chiffrement et segmentation réseau.",
    technologies: ["Azure", "Azure AD", "Key Vault", "NSG", "Azure Firewall"],
    securityObjective:
      "Appliquer le principe du moindre privilège et protéger les données sensibles dans le cloud.",
  },
  {
    id: "audit-reseau",
    title: "Audit de Sécurité Réseau",
    description:
      "Réalisation d'un audit complet d'un réseau d'entreprise incluant analyse des vulnérabilités, tests de pénétration et recommandations de remédiation.",
    technologies: ["Nmap", "Wireshark", "Nessus", "Metasploit", "Burp Suite"],
    securityObjective:
      "Identifier et prioriser les failles de sécurité pour renforcer la posture défensive.",
  },
  {
    id: "automation-python",
    title: "Outil Python d'Automatisation Sécurité",
    description:
      "Développement d'un outil en Python automatisant les tâches répétitives de sécurité : scan de ports, vérification de configurations, génération de rapports.",
    technologies: ["Python", "Scapy", "Paramiko", "Jinja2", "SQLite"],
    securityObjective:
      "Réduire le temps de réponse aux incidents et standardiser les procédures de contrôle.",
  },
];

export interface Skill {
  category: string;
  items: string[];
  icon: string;
}

export const skills: Skill[] = [
  {
    category: "Cybersécurité",
    items: ["Analyse de vulnérabilités web, systèmes et réseaux", "Sécurité défensive: configuration pare-feu, gestion contrôle d’accès AD", "Sécurité offensive : OSINT, tests d’intrusion", "Investigation numérique & réponse à incident"],
    icon: "shield",
  },
  {
    category: "Systèmes & Réseaux",
    items: ["Linux/Ubuntu", "Windows Server", "VPN", "Segmentation réseau", "DHCP", "DNS", "AD", "Supervision, PRA / PCA, documentation technique"],
    icon: "network",
  },
  {
    category: "Cloud",
    items: ["Azure", "IAM"],
    icon: "cloud",
  },
  {
    category: "Gouvernance & Conformité",
    items: ["RGPD", "ISO 27001", "NIS2", "Analyse de risques"],
    icon: "compliance",
  },
  {
    category: "Virtualisation",
    items: ["Proxmox", "Docker", "VMware"],
    icon: "server",
  },
  {
    category: "Développement & Automatisation",
    items: ["Python", "Shell/Bash", "C/C++", "Java", "PHP", "JavaScript"],
    icon: "code",
  },
  {
    category: "Gestion de Projet",
    items: ["Méthodes agiles", "outils de plannification", "Documentation technique"],
    icon: "project",
  },
];

export interface Experience {
  title: string;
  company: string;
  period: string;
  tasks: string[];
}

export const experiences: Experience[] = [
  {
    title: "Stage Administrateur d'Infrastructures Sécurisées",
    company: "Chez un indépendant",
    period: "Juin 2025 – Septembre 2025",
    tasks: [
      "Déploiement d'une infrastructure virtualisée avec Proxmox",
      "Configuration de réseaux segmentés (DHCP, DNS, Active Directory)",
      "Mise en place d'un cluster web haute disponibilité",
      "Implémentation de VPN site-à-site avec pfSense",
      "Déploiement de la supervision (Prometheus, Grafana, Loki)",
    ],
  },
  {
    title: "Stage Développeur Web No Code",
    company: "Anzar",
    period: "Mai 2023 – Juillet 2023",
    tasks: [
      "Rédaction du cahier des charges fonctionnel",
      "Développement et personnalisation de solutions web",
      "Tests fonctionnels et livraison client",
    ],
  },
];

export interface Education {
  degree: string;
  school: string;
  period: string;
  description: string;
}

export const education: Education[] = [
  {
    degree: "Mastère Cybersécurité",
    school: "La Plateforme_",
    period: "01/2026 – 07/2027",
    description: "Expert en sécurité informatique & cybersécurité. Titre professionnel de niveau 7",
  },
  {
    degree: "Administrateur d'Infrastructures Sécurisées",
    school: "Simplon",
    period: "12/2024 – 10/2025",
    description: "Titre professionnel de niveau 6",
  },
  {
    degree: "BTS Systèmes Numériques – option Informatique & Réseaux",
    school: "Lycée César Baggio",
    period: "09/2022 – 07/2024",
  },
];

export const qualities = [
  { label: "Autonome", description: "Capable de mener des projets en toute indépendance" },
  { label: "Rigoureux", description: "Attention aux détails et respect des procédures" },
  { label: "Curieux", description: "Veille technologique constante et apprentissage continu" },
  { label: "Esprit d'équipe", description: "Collaboration efficace et communication claire" },
  { label: "Sérieux", description: "Engagement et fiabilité dans les missions confiées" },
];

export const interests = [
  { label: "Taekwondo", description: "1er Dan, Coach, DIF" },
  { label: "Animation BAFA", description: "Encadrement de jeunes" },
  { label: "Voyages", description: "Jura, Espagne, Portugal" },
];

export const contactInfo = {
  email: "trevys.sarrazyn@gmail.com",
  phone: "+33 7 66 44 78 19",
  linkedin: "https://www.linkedin.com/in/trevys-sarrazyn-2507551b1/",
  github: "https://github.com/Trevys59",
};
