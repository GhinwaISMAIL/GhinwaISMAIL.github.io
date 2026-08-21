import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders Ghinwa Ismail's complete research portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Ghinwa Ismail \| Network Digital Twins for 5G Systems<\/title>/i);
  assert.match(html, /PhD Researcher in Network Digital Twins for 5G Systems/);
  assert.match(html, /My research develops trustworthy Network Digital Twins/);
  assert.match(html, /uncertainty-aware KPI prediction, what-if analysis, and adaptive network operation/);
  assert.doesNotMatch(html, /predict network behaviour, support what-if analysis/);
  assert.match(html, /Academic research portfolio/);
  assert.match(html, /A selection of research and engineering work/);
  assert.match(html, /Network Digital Twins for 5G/);
  assert.match(html, /Trace-Driven Traffic Modelling/);
  assert.match(html, /Reproducible 5G Experimentation/);
  assert.match(html, /KPI Prediction and What-If Analysis/);
  assert.match(html, /Ongoing research direction/);
  assert.match(html, /Lightweight Trace-Driven Burst Traffic Generation/);
  assert.match(html, /IEEE NetSoft(?: 2026)? · Berlin, Germany/);
  assert.match(html, /Full paper · 2026/);
  assert.match(html, /Full paper · Presented at IEEE NetSoft 2026/);
  assert.match(html, /10\.1109\/NETSOFT70012\.2026\.11603454/);
  assert.doesNotMatch(html, /Munich, Germany/);
  assert.match(html, /Toward Trustworthy Digital Twins for 5G Networks/);
  assert.match(html, /TwinDash/);
  assert.match(html, /Accepted demo/);
  assert.match(html, /Publication forthcoming/);
  assert.match(html, /Google Scholar/);
  assert.match(html, /scholar\.google\.com\/citations\?user=uCI4JNcAAAAJ&amp;hl=en/);
  assert.match(html, /Doctoral supervisors/);
  assert.match(html, /Fabrice Théoleyre/);
  assert.match(html, /Samir Si-Mohammed/);
  assert.match(html, /Presenting at IEEE NetSoft in Berlin/);
  assert.match(html, /SLICES-RI \/ CONVERGE Summer School/);
  assert.match(html, /INESC TEC in Porto, Portugal/);
  assert.match(html, /Jeronimo Herdoïza/);
  assert.match(html, /Deployment and Benchmarking of a Reproducible 5G Standalone Platform/);
  assert.match(html, /id="publications"/);
  assert.match(html, /id="experience"/);
  assert.match(html, /id="projects"/);
  assert.match(html, /More projects/);
  assert.match(html, /href="#main-content"[^>]*>Skip to main content/);
  assert.match(html, /<main id="main-content">/);
  assert.match(html, /rel="canonical" href="https:\/\/ghinwaismail\.github\.io\/?"/);
  assert.match(html, /"@type":"ProfilePage"/);
  assert.match(html, /"@type":"Person"/);
  assert.match(html, /\/assets\/images\/profile\/portrait-highres\.jpg/);
  assert.match(html, /\/assets\/documents\/resume\.pdf/);
  assert.match(html, /\/assets\/icons\/favicon\.svg/);
  assert.doesNotMatch(html, /(?:src|href)="\/(?:portrait-highres|resume|poster-2026)\.(?:jpg|pdf)"/);
  assert.equal((html.match(/<img\b/g) ?? []).length, 8);
  assert.equal((html.match(/<img\b[^>]*\bwidth="\d+"[^>]*\bheight="\d+"/g) ?? []).length, 8);
  assert.equal((html.match(/<img\b[^>]*\bloading="lazy"/g) ?? []).length, 7);
  assert.ok(
    html.indexOf("<header") < html.indexOf('<main id="main-content">'),
    "the site header sits outside and before the main landmark",
  );
  assert.ok(
    html.lastIndexOf("</main>") < html.indexOf('<footer id="contact"'),
    "the site footer sits outside and after the main landmark",
  );
  assert.ok(
    html.indexOf("SLICES-RI / CONVERGE Summer School") > html.indexOf('id="experience"'),
    "academic activities belong in the experience section",
  );
  assert.ok(
    html.indexOf('id="about"') < html.indexOf('id="work"') &&
      html.indexOf('id="work"') < html.indexOf('id="research"') &&
      html.indexOf('id="publications"') < html.indexOf('id="projects"') &&
      html.indexOf('id="projects"') < html.indexOf('id="experience"'),
    "the main sections follow the intended portfolio order",
  );
  assert.doesNotMatch(html, /SkeletonPreview|react-loading-skeleton/i);
});

test("ships the public portfolio assets and removes starter-only files", async () => {
  const assetPaths = [
    "public/assets/documents/resume.pdf",
    "public/assets/documents/poster-2026.pdf",
    "public/assets/icons/favicon.svg",
    "public/assets/icons/favicon-32.png",
    "public/assets/icons/apple-touch-icon.png",
    "public/assets/images/social/og.png",
    "public/assets/images/profile/portrait-highres.jpg",
    "public/assets/images/profile/portrait-highres-700.jpg",
    "public/assets/images/publications/poster-2026.jpg",
    "public/assets/images/publications/poster-2026-800.jpg",
    "public/assets/images/publications/poster-award-certificate.png",
    "public/assets/images/publications/poster-award-certificate-640.jpg",
    "public/assets/images/publications/poster-presentation-main.jpg",
    "public/assets/images/publications/poster-presentation-main-540.jpg",
    "public/assets/images/publications/poster-presentation-full-480.jpg",
    "public/assets/images/activities/netsoft-2026-presentation.jpg",
    "public/assets/images/activities/netsoft-2026-presentation-800.jpg",
    "public/assets/images/activities/slices-ri-summer-school-2025.jpg",
    "public/assets/images/activities/slices-ri-summer-school-2025-800.jpg",
    "public/assets/images/education/tishreen-graduation.jpg",
    "public/assets/images/education/tishreen-graduation-569.jpg",
    "public/assets/images/education/calabria-graduation.jpg",
    "public/assets/images/education/calabria-graduation-700.jpg",
    "public/assets/images/education/tsp-graduation.jpg",
    "public/assets/images/education/tsp-graduation-700.jpg",
    "public/assets/images/recognition/al-basil-award.jpg",
    "public/assets/images/recognition/al-basil-award-900.jpg",
  ];

  await Promise.all(assetPaths.map((path) => access(new URL(path, projectRoot))));

  await assert.rejects(access(new URL("app/_sites-preview/SkeletonPreview.tsx", projectRoot)));
  await assert.rejects(access(new URL("app/_sites-preview/preview.css", projectRoot)));
  await assert.rejects(access(new URL("public/profile.png", projectRoot)));
  await assert.rejects(access(new URL("public/file.svg", projectRoot)));
});
