import { Page, Locator } from "@playwright/test";

export default class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public getSearchField(): Locator {
    const searchField = this.page.locator("id=gh-ac");
    return searchField;
  }

  public getSearchBtn(): Locator {
    const searchBtn = this.page.locator("id=gh-btn");
    return searchBtn;
  }

  async enterSearchByCriteria(searchWord) {
    await this.getSearchField().fill(searchWord);
  }

  async clickSearchBtn() {
    await this.getSearchBtn().click();
  }
}
