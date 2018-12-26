const assert = require('assert');

describe('Google Home Page', () => {
    it('should have the right title', () => {
        browser.url('https://www.google.com');
        const title = browser.getTitle();
        // browser.debug();
        assert(title,'Google');
        // assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
    });
});