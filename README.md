# Ghinwa Ismail — Research Portfolio

Personal academic portfolio of Ghinwa Ismail, PhD researcher at the University
of Strasbourg's ICube Laboratory.

The site presents research on Network Digital Twins, machine learning for
wireless systems, 5G/IoT, SDN and edge computing, alongside publications,
projects, experience, education, awards, and contact links.

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
