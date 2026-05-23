import { chromium, devices } from 'playwright';

const phone = devices['iPhone 14'];
const browser = await chromium.launch();
const ctx = await browser.newContext({ ...phone });
const page = await ctx.newPage();

await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 20000 });
await page.waitForTimeout(3000);

const shots = [
  { label: 'Hero — Classic', file: 'sec-hero.png' },
  { label: 'Bestsellers', file: 'sec-bestsellers.png' },
  { label: 'How it works', file: 'sec-howto.png' },
  { label: 'All offers', file: 'sec-alloffers.png' },
  { label: 'Why TravelCorner', file: 'sec-why.png' },
  { label: 'Testimonials', file: 'sec-testimonials.png' },
  { label: 'Instagram', file: 'sec-instagram.png' },
  { label: 'Newsletter', file: 'sec-newsletter.png' },
  { label: 'Footer', file: 'sec-footer.png' },
];

for (const s of shots) {
  const el = page.locator(`[data-screen-label="${s.label}"]`).first();
  const n = await el.count();
  if (!n) { console.log(`MISSING: ${s.label}`); continue; }
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await el.screenshot({ path: `E:/Work/11. travelcorner/screenshots/${s.file}` });
  console.log(`done: ${s.label}`);
}

await browser.close();
