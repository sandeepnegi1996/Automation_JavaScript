const puppeteer = require("puppeteer");

let scape2 = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("hhttps://github.com/login");

  await page.waitFor(5000);

  const loginId = "9041128179sandy@gmail.com";
  const password = "Sunder!@#L@xmi967";
  //now click on the login

  // await page.click(
  //  "body > div.position-relative.js-header-wrapper > header > div > div.HeaderMenu.HeaderMenu--logged-out.position-fixed.top-0.right-0.bottom-0.height-fit.position-lg-relative.d-lg-flex.flex-justify-between.flex-items-center.flex-auto > div.d-lg-flex.flex-items-center.px-3.px-lg-0.text-center.text-lg-left > a.HeaderMenu-link.no-underline.mr-3"
  // );

  await page.waitFor(5000);
  browser.close();
  return "result";
};
scape2().then(value => {
  console.log(value);
});

scape2().catch(error => {
  console.log(error);
});
