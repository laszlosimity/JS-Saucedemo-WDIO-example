
const Page = require('./page');

class InventoryPage extends Page {

    get productlabel() { 
        return $('.product_label'); 
    };

    get invPageURL() {
        return 'https://www.saucedemo.com/inventory.html';
    };

    get menuButton() {
        return $('.bm-burger-button');
    };

    get logoutLink() {
        return $('#logout_sidebar_link');
    };

    get backpackLink() {
        return $('.btn_primary');
    };

    get cartItemsCount() {
        return $('.fa-layers-counter.shopping_cart_badge');
    };

    get cartLink() {
        return $('#shopping_cart_container > a');
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