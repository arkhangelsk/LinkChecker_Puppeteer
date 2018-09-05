const puppeteer = require('puppeteer');



// (async () => {
//     // Init Pupeteer
//     const browser = await pupeteer.launch({ headless: true});
//     const page = await browser.newPage();

//     // Automation
//   //  logIn(page);
//     analysePage(page);

//     // Close Browser
//     await browser.close();
// })();

(async () => {
    const browser = await puppeteer.launch({
      headless: false
    });
    const page = await browser.newPage();
    await page.goto('https://github.com');
    await page.screenshot({ path: 'screenshots/github.png' });
    let links = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('a')).map((val) => val.href);
    });
    console.log(links);
    await browser.close();
  })();

async function analysePage(){
    let PAGE_URL = 'https://softwaretestingtrends.com/';
    await page.goto(PAGE_URL);
    let links = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('a')).map((val) => val.href);
    });
    console.log(links);
}

