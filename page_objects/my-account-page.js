const uiElements = {
    pageTitle: by.css('h1.page-heading')
}

module.exports = {
    elements: uiElements,
    verifyPageTitle: async (expectedTitle) => {
        until.elementIsVisible(uiElements.pageTitle)
        const title = await driver.findElement(uiElements.pageTitle).getAttribute('innerText')
        expect(title).to.equal(expectedTitle)
    }
}