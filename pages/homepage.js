
const Page = require('./page');

class HomePage extends Page {

    get username() { return $("#user-name"); };
    get password() { return $('#password'); };
    get login_button() { return $('.btn_action'); };

    get errorText() {
        return $('h3');
    };

    open() {
       browser.url("http://www.saucedemo.com/");
    };

    getUsername() {
        return this.username;
    }

    setUsername(theusername) {
        this.username.setValue(theusername);
    };

    setPassword(thepassword) {
        this.password.setValue(thepassword);
    };

    login() {
        this.login_button.click();
        
    };

    getErrorText() {
        return this.errorText.getText();
    };

};

module.exports = HomePage;