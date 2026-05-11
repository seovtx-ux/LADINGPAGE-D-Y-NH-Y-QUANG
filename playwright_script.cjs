const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://ladingpage-five-rose.vercel.app/');
  await page.waitForTimeout(3000);
  const html = await page.evaluate(() => document.getElementById('root').innerHTML);
  fs.writeFileSync('output.txt', html);
  await browser.close();
})();
