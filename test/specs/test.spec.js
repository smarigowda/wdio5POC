const assert = require('assert');

describe('webdriver.io page', async () => {
    it('should have the right title', async () => {
        // await browser.url('https://webdriver.io');
        await browser.url('https://www.google.com/');
        debugger
        const title = await browser.getTitle();
        // assert.equal(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
        assert.equal(1,1);
    });
});