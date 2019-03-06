const expect = require('chai').expect;
const HomePage = require('../pages/homepage');
const homePage = new HomePage();
const InventoryPage = require('../pages/inventorypage');
const invPage = new InventoryPage();
const CartPage = require('../pages/cartpage');
const cartPage = new CartPage();

describe('Sauce Swag purchase flow ', function() {

    it("loads the homepage", function() {
        homePage.annotate(this.test.title);
        homePage.open();
        expect(homePage.title).to.equal('Swag Labs');
    });

    it("logs in", function() {
        homePage.annotate(this.test.title);
    	homePage.setUsername("standard_user");
    	homePage.setPassword("secret_sauce");
    	homePage.login();
    	expect(browser.getUrl()).to.equal(invPage.invPageURL);
    });

    it("adds an item to the cart", function() {
        homePage.annotate(this.test.title);
        invPage.addToCart();
        expect(invPage.getCartItemsCount()).to.equal('1');
    });

    it ("clicks cart icon", function() {
        homePage.annotate(this.test.title);
        invPage.clickCart();
        expect(cartPage.getHeaderElText().trim()).to.equal('Your Cart');
    });

    it ("enters checkout information", function() {
        homePage.annotate(this.test.title);
        cartPage.clickCheckoutContinue();
        cartPage.setFirstName("Laszlo");
        cartPage.setLastName("Simity");
        cartPage.setZipCode("90210");
        cartPage.clickCheckoutContinue();
        expect(cartPage.getHeaderElText()).to.equal('Checkout: Overview');
    });

    it ("checksout", function() {
        homePage.annotate(this.test.title);
        cartPage.clickCheckoutContinue();
        expect(cartPage.getHeaderElText()).to.equal('Checkout: Complete!');
    });
    
    it ("logs out", function() {                
        homePage.annotate(this.test.title);
    	invPage.logout();
    	expect(homePage.getUsername().isExisting()).to.be.true;
    });

});