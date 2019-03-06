
const Page = require('./page');

class InventoryPage extends Page {

    get productlabel() { 
        return browser.element('.product_label'); 
    };

    get invPageURL() {
        return 'https://www.saucedemo.com/inventory.html';
    };

    get menuButton() {
        return browser.element('.bm-burger-button');
    };

    get logoutLink() {
        return browser.element('#logout_sidebar_link');
    };

    get backpackLink() {
        return browser.element('.add-to-cart-button');
    };

    get cartItemsCount() {
        return browser.element('.fa-layers-counter.shopping_cart_badge');
    };

    get cartLink() {
        return browser.element('#shopping_cart_container > a');
    };

    returnProductLabel() {

        return this.productlabel;
    };

    getCartItemsCount() {
        var count = this.cartItemsCount.getText();
        return count;
    };

    clickCart() {
        this.cartLink.click();
    };

    addToCart() {
        this.backpackLink.click();
    };

    logout() {
        this.menuButton.click();
        this.logoutLink.waitForDisplayed;
        this.logoutLink.click();
    };

};

module.exports = InventoryPage;