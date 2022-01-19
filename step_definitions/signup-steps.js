// ./step-definitions/signup-steps.js
const { elements } = require("../page_objects/my-account-page");
const { internet } = require("@faker-js/faker");
const { enterNewEmailAddress, clickCreateAnAccountButton } = require("../page_objects/authentication-page");
const { fillPersonalInfoSection, clickRegisterButton } = require("../page_objects/create-an-account-page");

module.exports = function () {
    this.When(/^I enter Email in the create an account section$/, async function () {
        const generatedEmail = internet.email()
        await enterNewEmailAddress(generatedEmail)
    });

    this.When(/^I click Create an Account button$/, async function () {
        await clickCreateAnAccountButton()
      });

    this.When(/^I complete required fields in the Personal section$/, async function () { 
        const x = await helpers.getAttributeValue('body', 'class')
        trace(x)
        // await fillPersonalInfoSection()
        return true
    });

    this.When(/^I complete required fields in the Address Info section$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    this.When(/^I click Register button$/, async function () {
        await clickRegisterButton()
      });
}