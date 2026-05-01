# IEEE RAS TC on Robot Learning Website

Static website scaffold for the IEEE RAS Technical Committee on Robot Learning.

## Stack

- Astro
- Tailwind through the Tailwind Vite plugin
- Markdown content collections for news, events, people, and resources
- GitHub Pages deployment through GitHub Actions

## Local Development

```bash
npm install
npm run dev
```

## Content Editing

- News posts: `src/content/news`
- Events: `src/content/events`
- People: `src/content/people`
- Resources: `src/content/resources`

Most launch work should happen in content files before touching layout code.

Team-facing guides:

- `docs/CONTENT_EDITING.md`
- `docs/PROJECT_STRUCTURE.md`

## Deployment

The workflow in `.github/workflows/deploy.yml` builds the site and publishes `dist` to GitHub Pages when changes land on `main`.

For the final organization URL, use an organization named `robot-learning` with a repository named `robot-learning.github.io`, then enable GitHub Pages with GitHub Actions as the source.
