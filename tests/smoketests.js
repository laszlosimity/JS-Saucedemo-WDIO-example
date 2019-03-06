const expect = require('chai').expect;
const HomePage = require('../pages/homepage');
const homePage = new HomePage();
const InventoryPage = require('../pages/inventorypage');
const invPage = new InventoryPage();

describe('Sauce Swag smoketests ', function() {

    it("loads the homepage", function() {
        homePage.open();
        expect(homePage.title).to.equal('Swag Labs');
    });

    it("logs in", function() {
    	homePage.setUsername("standard_user");
    	homePage.setPassword("secret_sauce");
    	homePage.login();
    	expect(browser.getUrl()).to.equal(invPage.invPageURL);
    });

    it ("logs out", function() {
    	invPage.logout();
    	expect(homePage.getUsername().isExisting()).to.be.true;
    });

});