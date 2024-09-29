import { Page, Locator } from "@playwright/test";

export default class ResultsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public getFirstReasultHeading(): Locator {
    const firstResultHeading = this.page.locator(
      "(//span[@role='heading'])[3]"
    );
    return firstResultHeading;
  }
}
