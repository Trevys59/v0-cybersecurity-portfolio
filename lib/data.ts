export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  securityObjective: string;
}

export const projects: Project[] = [
  {
    id: "seahawks-monitoring",
    title: "Seahawks Monitoring – Infrastructure Multi-Sites Supervisée et Sécurisée",
    description:
      "Conception et déploiement d’une infrastructure multi-sites haute disponibilité reposant sur Proxmox, pfSense et une segmentation VLAN avancée. Mise en place d’un VPN Site-to-Site IPsec entre Roubaix et Kansas, d’un VPN Client-to-Site WireGuard pour les franchises NFL, d’un cluster web Nester derrière HAProxy en DMZ, d’une base MariaDB multi-tenant (Nester Manager), d’un pipeline CI/CD GitLab et d’une stack complète de supervision (Prometheus, Grafana, Loki, Alertmanager). Le projet intègre également un système de ticketing et d’inventaire GLPI, une stratégie de sauvegarde Veeam avec “backup du backup”, ainsi qu’une télémaintenance sécurisée via VM rebond.",
    technologies: [
      "Proxmox VE",
      "ZFS RAIDZ-3",
      "pfSense",
      "IPsec",
      "WireGuard",
      "VLAN",
      "HAProxy",
      "NGINX",
      "MariaDB",
      "Python (Flask)",
      "GitLab CI/CD",
      "Prometheus",
      "Grafana",
      "Loki",
      "GLPI",
      "Veeam Backup",
      "Debian",
      "Ubuntu Server",
      "Rocky Linux",
      "AlmaLinux",
      "Arch Linux"
    ],
    securityObjective:
      "Garantir la supervision centralisée d’infrastructures distantes tout en assurant l’isolation réseau, le chiffrement des communications inter-sites, la haute disponibilité des services critiques et la résilience des données via une stratégie de sauvegarde redondante."
  },
  {
    id: "tp-intrusion-ad",
    title: "Simulation d’Intrusion et Mouvement Latéral",
    description:
      "Réalisation d’un scénario d’attaque complet en environnement contrôlé : création d’un reverse shell, compromission d’un wiki via bruteforce, déploiement d’un cheval de Troie, pivot réseau et scan interne avec nmap. Objectif : comprendre les mécanismes d’intrusion afin de mieux sécuriser les infrastructures.",
    technologies: [
      "Linux",
      "Bash",
      "Netcat",
      "Nmap",
      "Python",
      "Dokuwiki",
      "LaZagne"
    ],
    securityObjective:
      "Identifier les vecteurs d’attaque (reverse shell, bruteforce, élévation de privilèges) pour renforcer la détection et la résilience face aux compromissions internes."
  },
  {
    id: "infra-linux-azure",
    title: "Infrastructure Linux Sécurisée sur Azure",
    description:
      "Déploiement et administration de machines virtuelles Linux sur Microsoft Azure avec accès sécurisé via Bastion. Configuration réseau, validation des accès distants et mise en ligne d’une application web (Fly Airlines) accessible de manière contrôlée.",
    technologies: [
      "Microsoft Azure",
      "Azure Bastion",
      "Ubuntu Server",
      "VM",
      "Réseau Cloud"
    ],
    securityObjective:
      "Sécuriser l’accès aux machines virtuelles sans exposition publique via Bastion et garantir l’isolation réseau des ressources cloud."
  },
  {
    id: "infrastructure-securisee-vlan-vpn-web",
    title: "Déploiement d’une Infrastructure Sécurisée Segmentée (VLAN + VPN + Apache)",
    description:
      "Conception et mise en œuvre d’une infrastructure réseau segmentée sous pfSense avec création de VLANs dédiés (Windows, Linux, Clients), configuration de règles de pare-feu inter-VLAN, déploiement d’un serveur Web Apache sur Debian 11 avec hôtes virtuels, et mise en place d’un VPN OpenVPN sécurisé avec certificats (CA interne, AES-256, SHA256). L’objectif était d’assurer l’isolation des environnements, le contrôle des flux et l’accès distant sécurisé aux ressources internes.",
    technologies: [
      "pfSense",
      "VLAN",
      "Firewall",
      "OpenVPN",
      "Apache2",
      "Debian 11",
      "UFW",
      "NAT",
      "AES-256",
      "SHA256"
    ],
    securityObjective:
      "Isoler les environnements via segmentation réseau, contrôler strictement les flux inter-VLAN et garantir un accès distant chiffré aux ressources internes grâce à OpenVPN."
  },
  {
    id: "audit-securisation-ad",
    title: "Audit et Sécurisation d’une Infrastructure Active Directory",
    description:
      "Audit complet d’un domaine Active Directory avec Ping Castle et Purple Knight, identification des vulnérabilités (objets obsolètes, comptes privilégiés, protocoles faibles), déploiement d’un serveur Core sécurisé et création d’un domaine renforcé via Hello-My-Dir. Comparaison avant/après pour mesurer l’amélioration de la posture de sécurité.",
    technologies: [
      "Active Directory",
      "Windows Server Core",
      "Ping Castle",
      "Purple Knight",
      "Hello-My-Dir"
    ],
    securityObjective:
      "Réduire la surface d’attaque du domaine AD en corrigeant les vulnérabilités critiques et en appliquant des standards de sécurité avancés."
  },
  {
    id: "rds-remoteapp-deployment",
    title: "Déploiement et Publication Sécurisée d’Applications via RDS",
    description:
      "Conception et déploiement d’une infrastructure Remote Desktop Services (RDS) sous Windows Server permettant la publication d’applications via RemoteApp et interface Web sécurisée (HTTPS). Mise en place d’une collection de sessions, gestion des droits d’accès utilisateurs, intégration Active Directory et distribution centralisée des applications sans installation locale sur les postes clients.",
    technologies: [
      "Windows Server",
      "RDS",
      "RemoteApp",
      "RDP",
      "HTTPS",
      "Active Directory"
    ],
    securityObjective:
      "Centraliser l’exécution des applications sur un serveur sécurisé afin de limiter l’exposition des postes clients, maîtriser les droits d’accès et garantir un accès distant chiffré aux ressources."
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
    description: ""
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
