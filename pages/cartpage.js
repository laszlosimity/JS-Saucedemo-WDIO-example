const Page = require('./page');

class CartPage extends Page {

    get cartHeader() {
        return browser.element('.subheader');
    }
    
    get checkOutContinueButton() {
        return browser.element('.btn_action');
    }

    get checkOutContinueButtonPage2() {
        return browser.element('.btn_primary');
    }

    get firstNameText() {
        return browser.element('#first-name');
    }

    get lastNameText() {
        return browser.element('#last-name');
    }

    get zipCodeText() {
        return browser.element('#postal-code');
    }

    getHeaderElText() {
        return this.cartHeader.getText();
    }

    setFirstName(name) {
        this.firstNameText.setValue(name);
    }

    setLastName(name) {
        this.lastNameText.setValue(name);
    }

    setZipCode(zipcode) {
        this.zipCodeText.setValue(zipcode);
    }

    clickCheckoutContinue() {
        this.checkOutContinueButton.click();
    }
    clickCheckoutContinuePage2() {
        this.checkOutContinueButtonPage2.click();
    }

};

module.exports = CartPage;