# Raison Portfolio

A personal portfolio by Raison Cibaj, built with React and TypeScript. The site is intended to showcase new projects, interactive tools, and experiments alongside an About Me page with professional background and contact information.

## Current status

- **About Me (`/about`):** introduction, experience highlights, technical skills, work experience, education, and contact links.
- **Projects (`/`):** reserved for the project gallery; currently an empty placeholder.
- Shared navigation, responsive Material UI layouts, and a custom green theme.

The project gallery will focus on new builds and usable demos. Previous employment is covered on the About Me page.

## Tech stack

- React and TypeScript
- Vite for development and production builds
- React Router for page routing
- Material UI and Emotion for styling
- Font Awesome and local SVG assets for icons
- Oxlint for linting and Prettier for formatting

## Getting started

Install Node.js and npm, then clone the repository and install its dependencies:

```sh
git clone https://github.com/Raison94/raison-portfolio.git
cd raison-portfolio
npm ci
npm run dev
```

Open the local URL printed by Vite and navigate to `/about` to see the implemented page. The root route is currently blank while the project gallery is being built.

## Commands

| Command                | Description                                           |
| ---------------------- | ----------------------------------------------------- |
| `npm run dev`          | Start the development server                          |
| `npm run build`        | Run TypeScript checks and build the site into `dist/` |
| `npm run preview`      | Preview the production build locally after building   |
| `npm run lint`         | Check code with Oxlint                                |
| `npm run format`       | Format project files with Prettier                    |
| `npm run format:check` | Check formatting without changing files               |

## Project structure

```text
src/
  assets/skills/       Technology icons and their license notices
  components/         Shared UI components; ProjectCard is a placeholder
  data/
    about.json        Profile, skills, work history, education, and contact content
    about.ts          Resolves skill asset URLs for the bundled application
    projects.ts       Placeholder for future project data
  layout/             Shared navbar and page container
  pages/
    about/            About section components and shared section styles
    AboutPage.tsx     Composes the About Me sections
    ProjectsPage.tsx  Placeholder for the project gallery
  routes/             Route definitions
  App.tsx             Root application component
  main.tsx            Application setup, router, fonts, and theme provider
  theme.ts            Shared colors, typography, and Material UI overrides
```

## Updating the site

Edit `src/data/about.json` to update profile content. Each section is rendered by a component in `src/pages/about/`, assembled in `src/pages/AboutPage.tsx`. Some content, such as the journey and strengths entries, is retained in the data but is not currently displayed.

Use `src/theme.ts` for shared design settings and `src/pages/about/about.styles.ts` for About page layouts and section styles.

To add a new project, build its interface, add it to the gallery in `src/pages/ProjectsPage.tsx`, and register a route in `src/routes/AppRoutes.tsx` if it needs a dedicated page.

## Production build

```sh
npm run lint
npm run format:check
npm run build
npm run preview
```

The generated site is in `dist/`. Routing uses `BrowserRouter`, so production hosting must serve `index.html` for application routes such as `/about` when they are opened directly.

Third-party icon attribution and license notices are kept in `src/assets/skills/`.
