# Ghinwa Ismail — Career Portfolio

Personal career portfolio of Ghinwa Ismail, a telecommunications researcher and
engineer currently pursuing a PhD at the University of Strasbourg's ICube Laboratory.

The site presents professional experience, engineering projects, publications,
education, student supervision, and recognition. The current PhD role appears
within the career timeline.

## Project structure

- `app/page.tsx` contains the portfolio content and semantic page structure.
- `app/globals.css` contains the full visual design, responsive layout, and motion.
- `public/assets/images` groups photographs by profile, publications, activities,
  education, recognition, and social sharing.
- `public/assets/documents` contains the CV and research poster.
- `public/assets/icons` contains the site favicon and touch icon.
- `.github/workflows/deploy-pages.yml` builds and publishes the site.

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm test
npm run export:github
```

Pushing the `main` branch automatically builds and deploys the static portfolio
to GitHub Pages.
