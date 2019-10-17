const expect = require('chai').expect;

describe('Sauce Swag Performance Tests', function() {

    it("loads the homepage with performance", function() {
        browser.url("https://www.saucedemo.com/");
        expect(browser.getTitle()).to.equal('Swag Labs');
    });

    it("loads the inventory homepage", function() {
        browser.url("https://www.saucedemo.com/inventory.html");
        expect(browser.getTitle()).to.equal('Swag Labs');
    });

});