
class Page {

    constructor(){ };

    get title() { return browser.getTitle(); };   

    annotate(name) {
    	browser.execute("sauce:context=" + name);
    }

}

module.exports = Page;