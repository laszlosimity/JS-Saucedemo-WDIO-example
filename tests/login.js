const expect = require('chai').expect;
const HomePage = require('../pages/homepage');
const homePage = new HomePage();
const InventoryPage = require('../pages/inventorypage');
const invPage = new InventoryPage();

describe('Sauce Swag login page ', function() {

    it("loads the homepage", function() {
        homePage.annotate(this.test.title);
        homePage.open();
        expect(homePage.title).to.equal('Swag Labs');
    });

    it("does not allow login without a username and password", function() {
        homePage.annotate(this.test.title);
        homePage.login();
        expect(homePage.getErrorText()).to.equal("Epic sadface: Username is required");
    });

    it("does not accept an empty password", function() {
    	homePage.open();
        homePage.annotate(this.test.title);
    	homePage.setUsername("standard_user");
    	homePage.login();
    	expect(homePage.getErrorText()).to.equal("Epic sadface: Password is required");
    });

    it("does not accept an empty username", function() {
        homePage.open();
        homePage.annotate(this.test.title);
        homePage.setPassword("secret_sauce");
        homePage.login();
        expect(homePage.getErrorText()).to.equal("Epic sadface: Username is required");
    });

    it("allows login with credentials", function() {
        homePage.open();
        homePage.annotate(this.test.title);
        homePage.setUsername("standard_user");
        homePage.setPassword("secret_sauce");
        homePage.login();
        expect(browser.getUrl()).to.equal(invPage.invPageURL);
    });

});