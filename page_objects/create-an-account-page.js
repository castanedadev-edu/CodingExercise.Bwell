const { name, internet , date, datatype } = require("@faker-js/faker");

const uiElements = {
    // Your personal information :: elements
    maleCheckbox: by.id('id_gender1'),
    femaleCheckbox: by.id('id_gender2'),
    firstNameInput: by.id('customer_firstname'),
    lastNameInput: by.id('customer_lastname'),
    emailInput: by.id('input'),
    passwordInput: by.id('passwd'),
    dateOfBirthDaySelect: by.id('days'),
    dateOfBirthMonthSelect: by.id('months'),
    dateOfBirthYearSelect: by.id('years'),
    newsLetterCheckbox: by.id('newsletter'),
    specialOffersCheckbox: by.id('optin'),

    // Your address :: elements
    firstNameInput: by.id('firstname'),
    lastNameInput: by.id('lastname'),
    companyInput: by.id('company'),
    addressInput: by.id('address1'),
    addressLine2Input: by.id('adress2'),
    cityInput: by.id('city'),
    stateSelect: by.id('id_state'),
    postalCodeInput: by.id('postcode'),
    countrySelect: by.id('id_country'),
    additionalInfoTextarea: by.id('other'),
    homePhoneInput: by.id('phone'),
    mobilePhoneInput: by.id('phone_mobile'),
    aliasInput: by.id('alias'),
    registerButton: by.id('submitAccount')
}

async function generatePersonalInfo() {
    const person = {
        name: name.firstName(),
        lastName: name.lastName(),
        password: internet.password(6),
        dateOfBirth: date.past(),
        isNewsLetter: datatype.boolean(),
        isSpecialOffers: datatype.boolean()
    }

    return person
}


module.exports = {
    elements: uiElements,
    fillPersonalInfoSection: async () => {
        until.elementIsVisible(uiElements.firstNameInput)
        const person = await generatePersonalInfo()
        driver.findElement(uiElements.firstNameInput).sendKeys(person.name)
        // driver.findElement(uiElements.femaleCheckbox).click()
    },
    clickRegisterButton: async () => {
        return driver.findElement(uiElements.registerButton).click()
    }
}