const Page = require('./page');

class CartPage extends Page {

    get cartHeader() {
        return $('.subheader');
    }
    
    get checkOutContinueButton() {
        return $('.btn_action');
    }

    get checkOutContinueButtonPage2() {
        return $('.btn_primary');
    }

    get firstNameText() {
        return $('#first-name');
    }

    get lastNameText() {
        return $('#last-name');
    }

    get zipCodeText() {
        return $('#postal-code');
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