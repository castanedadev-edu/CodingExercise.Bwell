const { fillSignInForm, clickSignInButton } = require("../page_objects/authentication-page");

module.exports = function () {
    this.When(/^I enter Email "([^"]*)" and Password "([^"]*)" in the Already Registered section$/, async function (email, password) {
        return fillSignInForm(email, password)
    });

    this.When(/^When I click Sign in button in the form$/, async function () {
        return clickSignInButton()
    });
}