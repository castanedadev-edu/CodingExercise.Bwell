const { clickSignInButton } = require("../page_objects/home-page");
const { verifyPageTitle } = require("../page_objects/my-account-page")

module.exports = function () {
    this.Given(/^I navigate to home page$/, async function () {
        return helpers.loadPage("http://automationpractice.com")
    });

    this.When(/^I click Sign In button$/, async function () {
        return clickSignInButton()
    });

    this.Then(/^I am taken to My Account page$/, async function () {
        return verifyPageTitle(shared.testData.myAccountPageTitle)
    });
}