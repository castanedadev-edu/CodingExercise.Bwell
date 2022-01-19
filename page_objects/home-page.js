const uiElements = {
    header: by.id('#header'),
    signInButton: by.css('.login')
}

module.exports = {
    elements: uiElements,
    clickSignInButton: async () => {
        until.elementIsVisible(uiElements.signInButton)
        return driver.findElement(uiElements.signInButton).click()
    }

}