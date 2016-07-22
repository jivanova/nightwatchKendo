module.exports = {
  'BatchEditing' : function (browser) {
    browser
      .url('http://jivanova.bedford.progress.com/kendo/playground/local/grid.html')
      .waitForElementVisible('a.k-grid-save-changes', 1000);
    browser.useXpath().click("//*[contains(text(), 'Chai')]");
    browser
    .useCss().clearValue('.k-input')
    .useCss().setValue('.k-input', 'Chai1')
    .click("a.k-grid-save-changes")
    .useXpath().assert.elementPresent("//*[contains(text(), 'Chai1')]")
    .end()
  }
};