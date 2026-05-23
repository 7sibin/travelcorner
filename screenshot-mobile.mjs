import { chromium, devices } from 'playwright';

const phone = devices['iPhone 14'];
const browser = await chromium.launch();
const ctx = await browser.newContext({ ...phone });
const page = await ctx.newPage();

await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 20000 });
await page.waitForTimeout(2000);

// AllOffers map section
await page.locator('[data-screen-label="All offers"]').first().scrollIntoViewIfNeeded();
await page.waitForTimeout(800);
await page.locator('[data-screen-label="All offers"]').first().screenshot({ path: 'E:/Work/11. travelcorner/screenshots/mobile-alloffers.png' });

// Desktop-width screenshot of AllOffers
await browser.close();

const browser2 = await chromium.launch();
const ctx2 = await browser2.newContext({ viewport: { width: 1280, height: 900 } });
const page2 = await ctx2.newPage();
await page2.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 20000 });
await page2.waitForTimeout(2000);
await page2.locator('[data-screen-label="All offers"]').first().scrollIntoViewIfNeeded();
await page2.waitForTimeout(800);
await page2.locator('[data-screen-label="All offers"]').first().screenshot({ path: 'E:/Work/11. travelcorner/screenshots/desktop-alloffers.png' });

await browser2.close();
console.log('done');
