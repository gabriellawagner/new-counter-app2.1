import { html, fixture, expect } from '@open-wc/testing';
import "../new-counter-app2.js";

describe("NewCounterApp2 test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <new-counter-app2
        title="title"
      ></new-counter-app2>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
