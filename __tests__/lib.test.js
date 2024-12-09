const puppeteer = require("puppeteer");
const {
  generateResult,
  validateInput,
  checkAndGenerate,
} = require("../js/lib");

test("testing generate result", () => {
  expect(generateResult("1", "this is the generate result test")).toBe(
    "User ID: 1 created an article titled this is the generate result test"
  );
  expect(generateResult("345", "this is the generated result test")).toBe(
    "User ID: 345 created an article titled this is the generated result test"
  );
});
test("testing validateInput result", () => {
  expect(validateInput(1, true, true)).toBeTruthy();
});

// integration testing
test("testing checkAndGenerate function", () => {
  expect(checkAndGenerate(1, "title1", "This is a test")).toBe(
    "User ID: 1 created an article titled title1"
  );
});

// e2e testing
test("checking e2e for addpost", async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ["--window-size=1080,720"],
    executablePath: "/usr/bin/google-chrome",
  });
  const page = await browser.newPage();
  await page.goto("http://127.0.0.1:5500/");
  await page.click("input#userid");
  await page.type("input#userid", "1");
  await page.click("input#title");
  await page.type("input#title", "Article 1");
  await page.click("textarea#article");
  await page.type("textarea#article", "Article 1 description");
  await page.click("#addNewPostBtn");
  await browser.close();
}, 40000);
