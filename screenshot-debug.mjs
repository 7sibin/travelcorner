import { chromium, devices } from 'playwright';

const phone = devices['iPhone 14'];
const browser = await chromium.launch();
const ctx = await browser.newContext({ ...phone });
const page = await ctx.newPage();

// Capture console errors
const errors = [];
page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
page.on('pageerror', err => errors.push(err.message));

await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 20000 });
await page.waitForTimeout(3000);

// Get page height
const height = await page.evaluate(() => document.documentElement.scrollHeight);
console.log('Page scroll height:', height);

// Log errors
if (errors.length) {
  console.log('ERRORS:', errors.join('\n'));
} else {
  console.log('No console errors');
}

// Check if leaflet initialized
const leafletOk = await page.evaluate(() => {
  const el = document.querySelector('.leaflet-container');
  return el ? `found, size: ${el.offsetWidth}x${el.offsetHeight}` : 'NOT FOUND';
});
console.log('Leaflet container:', leafletOk);

// Screenshot each section
const sections = [
  '[data-screen-label="Hero — Classic"]',
  '[data-screen-label="Bestsellers"]',
  '[data-screen-label="How it works"]',
  '[data-screen-label="All offers"]',
  '[data-screen-label="Why TravelCorner"]',
  '[data-screen-label="Testimonials"]',
];
for (const sel of sections) {
  const el = page.locator(sel).first();
  const exists = await el.count();
  if (!exists) { console.log(`MISSING: ${sel}`); continue; }
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  const box = await el.boundingBox();
  console.log(`${sel}: height=${box?.height}`);
}

await browser.close();
