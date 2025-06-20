# Nolwen-front

## Table des matières
- [Aperçu](#aperçu)
- [Technologies utilisées](#technologies-utilisées)
- [Structure du projet](#structure-du-projet)
- [Pages et composants](#pages-et-composants)
- [Installation](#installation)
- [Commandes disponibles](#commandes-disponibles)
- [Intégration Strapi](#intégration-strapi)


## Aperçu
Un site web vitrine professionnel construit avec Astro.js, proposant une gestion de contenu dynamique via Strapi CMS. Le site comprend différentes sections comme le portfolio, les formations, le calendrier et les formulaires de contact.

## Technologies utilisées
- **Astro.js** (v5.6.1) - Framework web moderne
- **React** (v19.1.0) - Composants interactifs
- **TailwindCSS** (v3.4.17) - Framework CSS utilitaire
- **FullCalendar** (v6.1.17) - Gestion du calendrier
- **Marked** (v15.0.12) - Analyse Markdown
- **Font Awesome** - Icônes
- **TypeScript** - Typage statique

## Structure du projet
```
front/
├── .astro/              # Configuration Astro
├── public/             
│   ├── favicon.svg
│   ├── images/
│   └── font/
├── src/
│   ├── components/      # Composants réutilisables
│   │   ├── Calendar.jsx
│   │   ├── Footer.astro
│   │   └── Navbar.astro
│   ├── layouts/
│   │   └── Layout.astro # Layout principal
│   ├── pages/          # Routes de l'application
│   │   ├── index.astro
│   │   ├── formations.astro
│   │   ├── portfolio.astro
│   │   ├── contacts.astro
│   │   ├── calendrier.astro
│   │   └── mentions-legales.astro
│   ├── styles/
│   │   └── global.css
│   └── types/          # Définitions TypeScript
├── package.json
└── tailwind.config.mjs
```

## Pages et composants

### Pages principales
1. **Accueil (index.astro)**
   - Sections dynamiques
   - Formations mises en avant
   - Blocs de texte personnalisables

2. **Formations (formations.astro)**
   - Liste des formations disponibles
   - Cartes interactives avec images
   - Liens vers les documents PDF

3. **Portfolio (portfolio.astro)**
   - Contenu Markdown dynamique
   - Mise en forme personnalisée
   - Support des médias

4. **Contact (contacts.astro)**
   - Formulaire de contact interactif
   - Validation des champs
   - Notifications toast

5. **Calendrier (calendrier.astro)**
   - Intégration FullCalendar
   - Affichage des événements
   - Interface interactive

### Composants clés
- **Layout.astro** : Structure principale du site, polices et SEO
- **Navbar.astro** : Navigation responsive avec menu dynamique
- **Footer.astro** : Liens de navigation, informations de contact, réseaux sociaux

## Installation

1. Cloner le dépôt :
```bash
git clone <url-du-dépôt>
cd Nolwen-front
```

2. Installer les dépendances :
```bash
npm install
```

3. Configurer les variables d'environnement :
```env
PUBLIC_STRAPI_URL=<votre_url_strapi>
```

4. Installer les plugins Tailwind :
```bash
npm install -D @tailwindcss/typography
```

## Commandes disponibles
```bash
# Serveur de développement
npm run dev

# Construction du projet
npm run build

# Prévisualisation de la version de production
npm run preview
```

## Intégration Strapi

### Points d'accès disponibles
- `/api/titles` - Titres des sections
- `/api/resources` - Ressources et formations
- `/api/portfolios` - Contenu du portfolio
- `/api/events` - Événements du calendrier
- `/api/contacts` - Gestion du formulaire de contact
...

Pour voir l'ensemble des endpoints voir sur Strapi.




