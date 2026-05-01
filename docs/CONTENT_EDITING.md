# Content Editing Guide

This site is built so most updates do not require editing HTML or Astro components.

## Fastest Editing Option

For simple updates, edit Markdown files in GitHub:

- People: `src/content/people`
- Events: `src/content/events`
- News: `src/content/news`
- Resources: `src/content/resources`

Each file starts with frontmatter between `---` lines. That frontmatter controls the cards and listings on the site.

Example person file:

```md
---
name: "Jane Doe"
role: "Student Co-Chair; PhD"
affiliation: "Example University"
location: "City"
country: "USA"
email: "jane@example.edu"
group: "student"
order: 4
---

Optional notes can go here.
```

After editing in GitHub, open a pull request. When the pull request is merged into `main`, GitHub Pages will rebuild the site.

## Common Updates

### Add a Person

Create a file in `src/content/people`, for example:

```text
src/content/people/jane-doe.md
```

Use one of these groups:

- `chair`
- `junior`
- `student`

The `order` number controls display order within the group.

### Add an Event

Create a file in `src/content/events`.

Use `href` for registration pages, Google Slides, workshop pages, or calendar links.

### Update the ICRA 2026 Welcome Kit

Replace this placeholder wherever it appears:

```text
https://docs.google.com/presentation/d/REPLACE_WITH_ICRA_2026_WELCOME_KIT_ID/edit
```

Files currently using it:

- `src/content/events/icra-meetup.md`
- `src/content/resources/icra-2026-welcome-kit.md`

The homepage button reads from the resource file, so updating the resource link updates the homepage CTA too.

## Local Preview

```bash
npm install
npm run dev
```

Production check:

```bash
npm run build
```
