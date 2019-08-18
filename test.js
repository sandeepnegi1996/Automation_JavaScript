const puppeteer = require("puppeteer");

async function getPic() {
  const browser = await puppeteer.launch({ headless: false });
  //headless false we can see what we are doing
  //headless true we cannot see the opening and closing of the browser

  const page = await browser.newPage();
  console.log("opening browser");
  await page.goto("https://google.com");
  console.log("opening google.com");
  await page.screenshot({ path: "google.png" });
  console.log("taking screenshot");

  await browser.close();
}

function main() {
  getPic();
}

main();
