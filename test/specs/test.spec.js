const assert = require('assert');
const Page = require('../../pages/page');
const page = new Page();

describe('Google Home Page', () => {
    let title;
    before(() => {
        assert(1,1);
    });
    after(() => {
        assert(1,1);
    });
    it('should have the right title', () => {
        browser.url('https://www.google.com');
        title = browser.getTitle();
        // browser.debug();
        assert(title,'Google');
        // assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
    });
    it('should have the right title', () => {
        assert(title,'Google');
        const name = page.getName2('Roopa Santosh');
        console.log(name);
    });
});