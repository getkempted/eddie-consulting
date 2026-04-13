/**
 * One-off visual snapshots for QA (desktop + mobile viewports).
 * Usage: ensure `npm run dev` is running, then: node scripts/visual-snapshot.mjs [baseUrl]
 */
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outDir = join(root, "playwright-output");

const baseUrl = process.argv[2] ?? "http://localhost:3002";
const routes = ["/", "/services", "/about", "/contact"];

const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
for (const vp of viewports) {
  const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
  const page = await context.newPage();
  for (const route of routes) {
    const url = `${baseUrl}${route === "/" ? "" : route}`;
    const slug = route === "/" ? "home" : route.replace(/^\//, "");
    const file = join(outDir, `${vp.name}-${slug}.png`);
    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
      await page.waitForTimeout(800);
      await page.screenshot({ path: file, fullPage: true });
      console.log("wrote", file);
    } catch (e) {
      console.error("failed", url, e);
    }
  }
  await context.close();
}
await browser.close();
