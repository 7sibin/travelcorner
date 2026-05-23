import { chromium, devices } from 'playwright';

const phone = devices['iPhone 14'];
const browser = await chromium.launch();
const ctx = await browser.newContext({ ...phone });
const page = await ctx.newPage();

await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 20000 });
await page.waitForTimeout(3000);

await page.screenshot({ path: 'E:/Work/11. travelcorner/screenshots/full-mobile.png', fullPage: true });
await browser.close();
console.log('done');
