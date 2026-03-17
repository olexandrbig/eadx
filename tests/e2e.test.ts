import puppeteer, { type Browser, type Page } from "puppeteer";
import { execSync, spawn, type ChildProcess } from "child_process";
import path from "path";
import fs from "fs";

const PORT = 3099;
const BASE = `http://localhost:${PORT}`;
const SCREENSHOTS_DIR = path.resolve(__dirname, "screenshots");

let browser: Browser;
let page: Page;
let server: ChildProcess;

let passed = 0;
let failed = 0;

async function assert(name: string, fn: () => Promise<void>) {
  try {
    await fn();
    console.log(`  ✓ ${name}`);
    passed++;
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`  ✗ ${name}\n    ${msg}`);
    failed++;
  }
}

async function goTo(url: string) {
  const res = await page.goto(`${BASE}${url}`, { waitUntil: "load", timeout: 20000 });
  return res;
}

async function screenshot(name: string) {
  await page.screenshot({
    path: path.join(SCREENSHOTS_DIR, `${name}.png`),
    fullPage: true,
  });
  console.log(`    -> screenshot: ${name}.png`);
}

async function assertPageLoads(url: string, titleContains: string) {
  await assert(`loads and title contains "${titleContains}"`, async () => {
    const res = await goTo(url);
    const status = res?.status() ?? 0;
    if (status >= 400) throw new Error(`HTTP ${status}`);
    const title = await page.title();
    if (!title.includes(titleContains)) throw new Error(`Title: "${title}"`);
  });
}

async function assertHasHeading(text: string) {
  await assert(`has heading "${text}"`, async () => {
    const headings = await page.$$eval("h1, h2", (els) =>
      els.map((e) => e.textContent?.trim() ?? ""),
    );
    if (!headings.some((h) => h.includes(text))) {
      throw new Error(`Not found among: ${headings.slice(0, 5).join(" | ")}`);
    }
  });
}

async function assertHasElement(label: string, selector: string) {
  await assert(label, async () => {
    const el = await page.$(selector);
    if (!el) throw new Error(`Selector "${selector}" not found`);
  });
}

async function assertHasForm() {
  await assertHasElement("has contact form", "form");
}

async function assertHasHeaderAndFooter() {
  await assertHasElement("has header", "header");
  await assertHasElement("has footer", "footer");
}

async function setup() {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });

  console.log("Building...");
  execSync("npm run build", {
    cwd: path.resolve(__dirname, ".."),
    stdio: "pipe",
  });

  console.log("Starting server...");
  server = spawn("npx", ["next", "start", "-p", String(PORT)], {
    cwd: path.resolve(__dirname, ".."),
    stdio: "pipe",
    shell: true,
  });

  for (let i = 0; i < 30; i++) {
    try {
      await fetch(BASE);
      break;
    } catch {
      await new Promise((r) => setTimeout(r, 1000));
    }
  }

  browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
  page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
}

async function teardown() {
  await browser?.close();
  server?.kill();
}

async function run() {
  await setup();

  // ─── Homepage ─────────────────────────────────────────────────
  console.log("\n  [Homepage] /\n");

  await assertPageLoads("/", "EADX");
  await assert("has hero video", async () => {
    const video = await page.$("video");
    if (!video) throw new Error("No <video> element");
  });
  await assert("has all navigation links", async () => {
    const links = await page.$$eval("nav a", (els) =>
      els.map((e) => e.textContent?.trim() ?? ""),
    );
    for (const name of ["Home", "Services", "Company", "Career", "Contact"]) {
      if (!links.includes(name)) throw new Error(`Missing: ${name}`);
    }
  });
  await assert("has 3+ service card links", async () => {
    const count = await page.$$eval("a[href*='/services/']", (els) => els.length);
    if (count < 3) throw new Error(`Found ${count}, expected >= 3`);
  });
  await assertHasForm();
  await assertHasHeaderAndFooter();
  await screenshot("homepage-light");

  // ─── Services Listing ─────────────────────────────────────────
  console.log("\n  [Services] /services\n");

  await assertPageLoads("/services", "Services");
  await assertHasHeading("Services");
  await assertHasHeaderAndFooter();
  await screenshot("services-light");

  // ─── Enterprise Integration ───────────────────────────────────
  console.log("\n  [Enterprise Integration] /services/enterprise-integration\n");

  await assertPageLoads("/services/enterprise-integration", "Enterprise Integration");
  await assertHasHeading("Transform operational efficiency");
  await assert("has hero image", async () => {
    const img = await page.$("img[src*='enterprise-integration']");
    if (!img) throw new Error("Hero image not found");
  });
  await assert("has concerns table with 5+ rows", async () => {
    const rows = await page.$$eval("table tbody tr", (trs) => trs.length);
    if (rows < 5) throw new Error(`Found ${rows} rows`);
  });
  await assertHasForm();
  await assertHasHeaderAndFooter();
  await screenshot("enterprise-integration-light");

  // ─── Data & AI ────────────────────────────────────────────────
  console.log("\n  [Data & AI] /services/data-and-ai\n");

  await assertPageLoads("/services/data-and-ai", "Data & AI");
  await assert("has all 8 section headings", async () => {
    const headings = await page.$$eval("h1, h2", (els) =>
      els.map((e) => e.textContent?.trim() ?? ""),
    );
    const expected = [
      "Turn your data into a",
      "Data & AI Services",
      "Why high-quality data",
      "Our Data & AI service landscape",
      "What we deliver",
      "Real expertise. Real experience.",
      "Client stories",
      "Solving your top Data & AI concerns",
    ];
    for (const exp of expected) {
      if (!headings.some((h) => h.includes(exp))) {
        throw new Error(`Missing: "${exp}"`);
      }
    }
  });
  await assert("has hero image", async () => {
    const img = await page.$("img[src*='data-and-ai']");
    if (!img) throw new Error("Hero image not found");
  });
  await assert("capability stack has 5 tiers", async () => {
    const tiers = await page.$$eval("section", (sections) => {
      const s = sections.find((s) => s.textContent?.includes("CAPABILITY STACK"));
      if (!s) return [];
      const labels = s.querySelectorAll("span[class*='uppercase']");
      return Array.from(labels)
        .map((l) => l.textContent?.trim() ?? "")
        .filter((t) => ["INSIGHT", "CONSUME", "STORE", "MOVE", "SOURCE"].includes(t));
    });
    if (tiers.length < 5) throw new Error(`Found ${tiers.length} tiers`);
  });
  await assert("client stories has 3+ cards", async () => {
    const count = await page.$$eval("section", (sections) => {
      const s = sections.find((s) => s.textContent?.includes("Client stories"));
      if (!s) return 0;
      return s.querySelectorAll("[class*='rounded-xl']").length;
    });
    if (count < 3) throw new Error(`Found ${count} cards`);
  });
  await assert("concerns table has 6 rows", async () => {
    const rows = await page.$$eval("table tbody tr", (trs) => trs.length);
    if (rows !== 6) throw new Error(`Found ${rows} rows`);
  });
  await assertHasForm();
  await assertHasHeaderAndFooter();
  await screenshot("data-and-ai-light");

  // ─── Cloud Operations ─────────────────────────────────────────
  console.log("\n  [Cloud Operations] /services/cloud-operations\n");

  await assertPageLoads("/services/cloud-operations", "Cloud Operations");
  await assertHasHeading("Cloud Operations");
  await assertHasHeaderAndFooter();
  await screenshot("cloud-operations-light");

  // ─── Contact ──────────────────────────────────────────────────
  console.log("\n  [Contact] /contact\n");

  await assertPageLoads("/contact", "Contact");
  await assert("has hero image", async () => {
    const img = await page.$("img[src*='contacts']");
    if (!img) throw new Error("Hero image not found");
  });
  await assertHasForm();
  await assertHasHeaderAndFooter();
  await screenshot("contact-light");

  // ─── Company ──────────────────────────────────────────────────
  console.log("\n  [Company] /company\n");

  await assertPageLoads("/company", "Company");
  await assertHasElement("has article content", "article, main");
  await assertHasHeaderAndFooter();
  await screenshot("company-light");

  // ─── Career ───────────────────────────────────────────────────
  console.log("\n  [Career] /career\n");

  await page.goto("about:blank");
  await assertPageLoads("/career", "Career");
  await assertHasElement("has page content", "main, section");
  await assertHasHeaderAndFooter();
  await screenshot("career-light");

  // ─── webMethods Replacement ───────────────────────────────────
  console.log("\n  [EADX Viva] /webmethods-replacement\n");

  await assertPageLoads("/webmethods-replacement", "EADX");
  await assertHasElement("has page content", "main");
  await assertHasHeaderAndFooter();
  await screenshot("webmethods-replacement-light");

  // ─── SAP PO Migration ──────────────────────────────────────────
  console.log("\n  [SAP PO Migration] /sappo-migration\n");

  await assertPageLoads("/sappo-migration", "SAP PO");
  await assertHasHeading("SAP PO Migration to SAP Integration Suite (CPI)");
  await assertHasHeading("SAP XI → SAP PI → SAP PO");
  await assertHasHeading("Coming to an end");
  await assertHasHeading("What are your migration options?");
  await assertHasHeading("The SAP Integration Suite as your migration target platform");
  await assertHasHeading("avoid paying for extended support");
  await assertHasHeading("total cost of SAP CPI");
  await assertHasHeading("The Migration Approach");
  await assertHasHeading("Migration Tool Support");
  await assertHasHeading("Can AI Make Your SAP PO Migration Faster and Safer?");
  await assertHasHeading("Schedule free migration cost and effort assessment workshop");

  await assert("has timeline with 7 year circles", async () => {
    const circles = await page.$$eval(
      "section:nth-of-type(2) .rounded-full.text-white.font-bold",
      (els) => els.map((e) => e.textContent?.trim() ?? ""),
    );
    const years = ["2002", "2005", "2011", "2020", "2025", "2027", "2030"];
    for (const y of years) {
      if (!circles.includes(y)) throw new Error(`Missing year circle: ${y}`);
    }
  });

  await assert("has migration options table with 3 options", async () => {
    const options = await page.$$eval("td", (els) =>
      els.map((e) => e.textContent?.trim() ?? ""),
    );
    if (!options.some((o) => o.includes("Option 1"))) throw new Error("Missing Option 1");
    if (!options.some((o) => o.includes("Option 2"))) throw new Error("Missing Option 2");
    if (!options.some((o) => o.includes("Option 3"))) throw new Error("Missing Option 3");
  });

  await assert("has license diagram", async () => {
    const svgLines = await page.$$("svg line");
    if (svgLines.length < 5) throw new Error(`Expected 5+ SVG lines, got ${svgLines.length}`);
  });

  await assert("has migration tool table with 3 categories", async () => {
    const cells = await page.$$eval("td", (els) =>
      els.map((e) => e.textContent?.trim() ?? ""),
    );
    for (const cat of ["Standard", "Partial", "Exotic"]) {
      if (!cells.some((c) => c.includes(cat))) throw new Error(`Missing category: ${cat}`);
    }
  });

  await assert("has next steps table with 5 rows", async () => {
    const rows = await page.$$eval("table:last-of-type tbody tr", (els) => els.length);
    if (rows < 5) throw new Error(`Expected 5+ rows, got ${rows}`);
  });

  await assertHasForm();
  await assertHasHeaderAndFooter();
  await screenshot("sappo-migration-light");

  // ─── Legal Pages ──────────────────────────────────────────────
  console.log("\n  [Legal Pages]\n");

  for (const { url, title } of [
    { url: "/terms", title: "Terms" },
    { url: "/imprint", title: "Imprint" },
    { url: "/privacy", title: "Privacy" },
    { url: "/compliance", title: "Compliance" },
  ]) {
    await assertPageLoads(url, title);
    await assertHasHeaderAndFooter();
    await screenshot(`${url.slice(1)}-light`);
  }

  // ─── 404 ──────────────────────────────────────────────────────
  console.log("\n  [404]\n");

  await assert("non-existent page returns 404", async () => {
    const res = await page.goto(`${BASE}/non-existent-xyz`, {
      waitUntil: "load", timeout: 20000,
    });
    if (res?.status() !== 404) throw new Error(`Got ${res?.status()}`);
  });
  await screenshot("404-light");

  // ─── Transparent Header ───────────────────────────────────────
  console.log("\n  [Transparent Header]\n");

  for (const url of ["/", "/contact", "/services/enterprise-integration", "/services/data-and-ai"]) {
    await page.goto(`${BASE}${url}`, { waitUntil: "load", timeout: 20000 });
    await new Promise((r) => setTimeout(r, 3000));
    await assert(`${url} — header transparent at top`, async () => {
      const bg = await page.$eval("header", (el) =>
        getComputedStyle(el).backgroundColor,
      );
      const ok = bg === "rgba(0, 0, 0, 0)" || bg === "transparent";
      if (!ok) throw new Error(`bg: "${bg}"`);
    });
  }

  // ─── Dark Mode Screenshots ────────────────────────────────────
  console.log("\n  [Dark Mode Screenshots]\n");

  await page.emulateMediaFeatures([
    { name: "prefers-color-scheme", value: "dark" },
  ]);

  for (const { url, name } of [
    { url: "/", name: "homepage" },
    { url: "/services", name: "services" },
    { url: "/services/enterprise-integration", name: "enterprise-integration" },
    { url: "/services/data-and-ai", name: "data-and-ai" },
    { url: "/services/cloud-operations", name: "cloud-operations" },
    { url: "/contact", name: "contact" },
    { url: "/company", name: "company" },
    { url: "/career", name: "career" },
    { url: "/webmethods-replacement", name: "webmethods-replacement" },
    { url: "/sappo-migration", name: "sappo-migration" },
  ]) {
    await goTo(url);
    await screenshot(`${name}-dark`);
  }

  // Reset to light mode
  await page.emulateMediaFeatures([
    { name: "prefers-color-scheme", value: "light" },
  ]);

  // ─── Results ──────────────────────────────────────────────────
  console.log(`\n  Results: ${passed} passed, ${failed} failed\n`);

  await teardown();
  process.exit(failed > 0 ? 1 : 0);
}

run().catch(async (err) => {
  console.error(err);
  await teardown();
  process.exit(1);
});
