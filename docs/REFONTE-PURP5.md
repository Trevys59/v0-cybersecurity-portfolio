# Refonte PURP5 — version de travail

## Périmètre validé

Modernisation violette du portfolio existant, frise interactive, thèmes clair/sombre/système et présentation de Trevys Sarrazyn comme Security Engineer en alternance chez Advens, équipe SDC-OSE. La production nécessite une validation explicite distincte.

Référence initiale : `c8d84fae1693557d3aa0b657db18ef96fd9c446d`.
Branche locale : `feat/purp5-interactive-portfolio`.

## Modifications

- Accueil avec identité PURP5 conservée, titre Security Engineer, accès au parcours, CV et profils existants.
- Citation conservée dans la présentation secondaire.
- Frise filtrable avec formations, expériences, projets et état explicite pour les certifications non documentées.
- Jalons ouverts par des éléments HTML `details`/`summary`, utilisables au clavier sans dépendance d’animation.
- Dates connues reprises du dépôt. Projets non datés et début chez Advens explicitement à confirmer.
- Aucune maîtrise IAM, mission professionnelle détaillée ou certification inventée.
- Six fiches projets conservées ; les anciens boutons sans action deviennent des détails développables.
- `next-themes` réutilisé : préférence système et choix utilisateur persisté. Aucun fournisseur de thème ajouté.
- Palette partagée, focus visible, lien d’évitement, menu mobile nommé, état annoncé et fermeture avec Échap.
- Animations CSS et IntersectionObserver ; contenu lisible même sans animation ; réduction système respectée.
- Écran de chargement artificiel retiré du layout ; fichiers historiques conservés.
- Vérification TypeScript rétablie au build, ESLint configuré, optimisation Next Image réactivée.
- Police système sans téléchargement externe requis au build.
- Logo et PDF d’origine conservés à l’identique. Le PDF peut encore contenir l’ancien statut : mise à jour éditoriale distincte à prévoir.

## Organisation et compatibilité

Conservation de Next.js 16.0.10, React 19.2.0, Tailwind 4 et App Router. Aucun changement du projet Vercel, de la branche de production ou des liens v0. Le README initial conserve le lien vers la conversation v0.

`lib/data.ts` reste la source des projets et du CV. `lib/timeline.ts` assemble la frise sans dates inventées. Les styles communs sont dans `app/globals.css`.

Les dépendances de développement ESLint sont verrouillées dans pnpm-lock.yaml. `pnpm-workspace.yaml` autorise les scripts d’installation de sharp et unrs-resolver. Aucune nouvelle dépendance d’animation.

## Vérifications réalisées

- Build de production : PASS ; routes `/`, `/cv`, `/blog` générées.
- `tsc --noEmit` : PASS.
- ESLint avec `--max-warnings 0` : PASS.
- Serveur de production : HTTP 200 pour accueil, CV, blog, PDF et logo.
- PDF servi identique au fichier initial : PASS.
- HTML de l’accueil : identifiants uniques, ancres locales résolues, absence de boutons imbriqués dans des liens : PASS.
- Contrastes des tokens principaux : sombre 8,40:1 ; clair 6,00:1 ; bouton sombre 7,69:1 ; bouton clair 7,73:1. Ces calculs ne constituent pas un audit WCAG complet.
- `git diff --check` : PASS.

## Vérifications restantes et blocages

- Création de branche distante refusée par le connecteur GitHub : HTTP 403, « Resource not accessible by integration ».
- Inspection du projet Vercel refusée : HTTP 403, espace `trevys59s-projects` non autorisé pour la connexion actuelle.
- Aucun push, aucune PR, aucun aperçu Vercel et aucune publication en production réalisés.
- Le navigateur distant ne peut pas joindre localhost. Les interactions client, la persistance du thème après rechargement, l’absence de flash, les captures mobile/tablette/desktop, la navigation clavier et Lighthouse restent à vérifier dans un navigateur sur un aperçu accessible.
- Liens externes conservés, mais destinations externes et document LinkedIn non vérifiés.
- Synchronisation v0 décrite par le README, mais aller-retour réel non testé.
- Versions existantes conservées ; audit de vulnérabilités des dépendances à réaliser avant publication.

## Reprise

1. Autoriser l’écriture sur le dépôt existant pour la connexion GitHub et l’accès à l’espace Vercel existant.
2. Publier uniquement la branche dédiée, puis ouvrir une PR en brouillon.
3. Vérifier le projet et la branche de production avant toute action de déploiement.
4. Obtenir la prévisualisation du projet existant et tester les parcours utilisateur et les deux thèmes sur mobile et ordinateur.
5. Confirmer la date de début chez Advens et les données professionnelles manquantes ; actualiser le PDF si souhaité.
6. Présenter la prévisualisation et attendre l’accord explicite avant fusion/publication.
