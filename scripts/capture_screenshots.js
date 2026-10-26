const puppeteer = require("puppeteer-core");
const path = require("path");

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const BASE_URL = "http://localhost:3000";
const OUTPUT_DIR = path.join(__dirname, "..", "public");

async function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function capture() {
  console.log("Launching Chrome...");
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--window-size=1440,920"],
    defaultViewport: {
      width: 1440,
      height: 900,
      deviceScaleFactor: 2,
    },
  });

  const page = await browser.newPage();

  async function scrollToSection(selector, outputPath, delay = 1400) {
    const success = await page.evaluate((sel) => {
      const el = document.querySelector(sel);
      if (!el) return false;
      const navOffset = 75;
      const top = el.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      return true;
    }, selector);

    if (success) {
      await wait(delay);
      await page.screenshot({ path: outputPath, type: "png" });
      console.log(`Captured ${path.basename(outputPath)} for ${selector}`);
    } else {
      console.warn(`Selector not found: ${selector}`);
    }
  }

  try {
    console.log("Navigating to Homepage...");
    await page.goto(BASE_URL, { waitUntil: "networkidle0", timeout: 30000 });
    await wait(1800);

    // 1. Homepage Hero
    await page.evaluate(() => window.scrollTo(0, 0));
    await wait(1000);
    await page.screenshot({ path: path.join(OUTPUT_DIR, "homepage.png"), type: "png" });
    console.log("Captured homepage.png");

    // 2. Services
    await scrollToSection("#services", path.join(OUTPUT_DIR, "services.png"));

    // 3. Events Section
    await scrollToSection("#events", path.join(OUTPUT_DIR, "events.png"));

    // 4. Achievements Section (NEC IIT Bombay)
    await scrollToSection("#achievements", path.join(OUTPUT_DIR, "achievements.png"));

    // 5. Mentors Section
    await scrollToSection("#mentors", path.join(OUTPUT_DIR, "mentors.png"));

    // 6. Blog Section
    await scrollToSection("#recentprojects", path.join(OUTPUT_DIR, "blog.png"));

    // 7. Goals / Approach
    await scrollToSection("#goals", path.join(OUTPUT_DIR, "goal.png"));

    // 8. Team Page
    console.log("Navigating to /team...");
    await page.goto(`${BASE_URL}/team`, { waitUntil: "networkidle0", timeout: 30000 });
    await wait(1800);
    await page.evaluate(() => window.scrollTo(0, 0));
    await wait(1000);
    await page.screenshot({ path: path.join(OUTPUT_DIR, "team.png"), type: "png" });
    console.log("Captured team.png");

    console.log("All screenshots updated cleanly!");
  } catch (err) {
    console.error("Error capturing screenshots:", err);
  } finally {
    await browser.close();
  }
}

capture();
