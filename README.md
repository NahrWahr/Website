# Rahul Narwar — Personal Website

Portfolio site built with React, TypeScript, and Vite. Hosted on GitHub Pages.

## Development

```bash
npm install
npm run dev
```

## Building

```bash
npm run build
npm run preview   # Preview the production build locally
```

## Content

- **Projects** — Add markdown files to `src/content/projects/` with frontmatter (`title`, `description`, `imageUrl`, `order`).
- **Blog/Manuscripts** — Add markdown files to `src/content/blogs/` with frontmatter (`title`, `date`).
- **Images** — Place images in `public/images/`.
- **Documents** — Place PDFs in `public/documents/`.

KaTeX math is supported in all markdown content via `remark-math` and `rehype-katex`.

## Deployment

The site uses `HashRouter` for GitHub Pages compatibility. Deploy by pushing to the appropriate branch with GitHub Pages configured to serve from `dist/`.
