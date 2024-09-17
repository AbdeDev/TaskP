# TaskP

## Fonctionnalités

- **Authentification via GitHub** : Les utilisateurs peuvent se connecter via GitHub pour gérer leurs tâches.
- **Ajouter des tâches** : Ajoutez de nouvelles tâches via un formulaire simple.
- **Marquer une tâche comme complétée** : Cochez une tâche pour indiquer qu'elle est terminée.
- **Supprimer une tâche** : Supprimez les tâches indésirables.
- **Recherche** : Filtrez vos tâches par mots-clés.
- **Filtrer par état** : Affichez uniquement les tâches complétées, non complétées ou toutes les tâches.
- **Notification Toast** : Notification à chaque ajout de tâche.
- **Interface utilisateur responsive** : Interface élégante et entièrement responsive pour une expérience fluide sur mobile et desktop.

## Stack utilisée

- **Next.js** : Framework React pour le front-end et l'API.
- **TypeScript** : Typage statique pour la robustesse du code.
- **Tailwind CSS** : Framework CSS pour des interfaces utilisateur réactives et personnalisables.
- **Prisma** : ORM utilisé pour interagir avec la base de données PostgreSQL.
- **PostgreSQL** : Base de données relationnelle pour stocker les tâches.
- **NextAuth** : Gestion de l'authentification avec GitHub.
- **Zustand** : Gestion des états globaux pour les tâches.
- **TanStack Query** : Gestion des requêtes asynchrones.
- **Vitest** : Framework de tests unitaires.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) v16+ et [pnpm](https://pnpm.io/)
- [PostgreSQL](https://www.postgresql.org/) pour la base de données
- Compte GitHub pour l'authentification OAuth

## Installation

1. **Cloner le projet** :

   ```bash
   git clone https://github.com/votre-utilisateur/task-manager.git
   cd task-manager

2. **Installer et utiliser les dépendances en local** :

   ```pnpm install

   ```pnpm prisma generate

   ```pnpm prisma migrate dev

   ```pnpm run dev

   ```pnpm test

   ```DATABASE_URL=postgresql://<username>:<password>@<host>:<port>/<database>
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=your_secret_key
    GITHUB_CLIENT_ID=your_github_client_id
    GITHUB_CLIENT_SECRET=your_github_client_secret

## Utilisation

- **Connexion** : Cliquez sur "Connexion avec GitHub" pour vous authentifier.
- **Ajouter une tâche** : Entrez une nouvelle tâche dans le formulaire et cliquez sur "Ajouter".
- **Marquer comme complétée** : Cliquez sur le texte de la tâche pour la marquer comme complétée ou non.
- **Supprimer une tâche** : Cliquez sur l'icône de la corbeille pour supprimer une tâche.
- **Recherche et filtrage** : Utilisez la barre de recherche et le menu déroulant pour filtrer les tâches