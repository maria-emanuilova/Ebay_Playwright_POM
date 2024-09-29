import { test, expect } from "@playwright/test";
import HomePage from "../pages/homePage";
import ResultsPage from "../pages/resultsPage";

let homePage: HomePage;
let resultsPage: ResultsPage;

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.ebay.com/");
  homePage = new HomePage(page);
  resultsPage = new ResultsPage(page);
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test("Verify page title", async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(
    /Electronics, Cars, Fashion, Collectibles & More | eBay/
  );
});

test("Verify search funcitonality works", async () => {
  await homePage.enterSearchByCriteria("Lego");
  await homePage.clickSearchBtn();
  await expect(resultsPage.getFirstReasultHeading()).toContainText("LEGO");
});
