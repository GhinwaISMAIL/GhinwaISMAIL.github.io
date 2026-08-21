import { cp, mkdir, rm, writeFile } from "node:fs/promises";

const outputRoot = new URL("../github-pages/", import.meta.url);
const clientRoot = new URL("../dist/client/", import.meta.url);
const workerUrl = new URL("../dist/server/index.js", import.meta.url);

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });
await cp(clientRoot, outputRoot, { recursive: true });

const { default: worker } = await import(`${workerUrl.href}?export=${Date.now()}`);
const response = await worker.fetch(
  new Request("https://ghinwaismail.github.io/", {
    headers: { accept: "text/html" },
  }),
  {
    ASSETS: {
      fetch: async () => new Response("Not found", { status: 404 }),
    },
  },
  {
    waitUntil() {},
    passThroughOnException() {},
  },
);

if (!response.ok) {
  throw new Error(`Static rendering failed with status ${response.status}`);
}

const html = await response.text();
await writeFile(new URL("index.html", outputRoot), html, "utf8");
await writeFile(new URL("404.html", outputRoot), html, "utf8");
await writeFile(new URL(".nojekyll", outputRoot), "", "utf8");
await rm(new URL(".assetsignore", outputRoot), { force: true });
await rm(new URL("_headers", outputRoot), { force: true });
await rm(new URL(".vite/", outputRoot), { recursive: true, force: true });
await rm(new URL("vinext-client-entry-manifest.json", outputRoot), { force: true });

console.log("GitHub Pages artifact created in github-pages/");
