import { chromium, devices } from 'playwright';

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const page = await ctx.newPage();

await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 20000 });
await page.waitForTimeout(2000);

// Screenshot just the SVG map
await page.locator('.world-map-filter').first().scrollIntoViewIfNeeded();
await page.waitForTimeout(600);
await page.locator('.world-map-filter').first().screenshot({ path: 'E:/Work/11. travelcorner/screenshots/map-desktop.png' });

// Click on a destination to see tooltip
await page.locator('.offer-pill').first().click();
await page.waitForTimeout(400);
await page.locator('.world-map-filter').first().screenshot({ path: 'E:/Work/11. travelcorner/screenshots/map-desktop-active.png' });

await browser.close();
console.log('done');
