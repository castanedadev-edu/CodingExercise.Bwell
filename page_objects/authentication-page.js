const uiElements = {
    emailAddressInput: by.id('email_create'),
    registeredEmailAddressInput: by.id('email'),
    createAnAccountButton: by.id('SubmitCreate'),
    registeredPasswordInput: by.id('passwd'),
    signInButton: by.id('SubmitLogin'),
    forgotYourPasswordLink: by.xpath("//a[text()='Forgot yor password?'")
}

module.exports = {
    elements: uiElements,
    fillSignInForm: async (user, pass) => {
        until.elementIsVisible(uiElements.registeredEmailAddressInput)
        driver.findElement(uiElements.registeredEmailAddressInput).sendKeys(user)
        return driver.findElement(uiElements.registeredPasswordInput).sendKeys(pass)
    },
    clickSignInButton: async () => {
        return driver.findElement(uiElements.signInButton).click()
    },
    enterNewEmailAddress: async (email) => {
        return driver.findElement(uiElements.emailAddressInput).sendKeys(email)
    },
    clickCreateAnAccountButton: async () => {
        helpers.scrollToElement(uiElements.createAnAccountButton)
        until.elementIsVisible(uiElements.createAnAccountButton)        
        return driver.findElement(uiElements.createAnAccountButton).click()
    }
}