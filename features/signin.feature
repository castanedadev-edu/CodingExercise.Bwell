# ./features/signin.feature

Feature: SignIn

    @smoketest @datadriven
    Scenario Outline: As an existing user I should be able to sign in to the site successfully
        Given I navigate to home page
        When I click Sign In button
        And I enter Email "<email>" and Password "<pass>" in the Already Registered section
        And When I click Sign in button in the form
        Then I am taken to My Account page

        Examples:
        | email | pass |
        | rcastaneda162308@bwell.com | Rc@staneda |
        | autogen_rcastaneda_182031@bwell.com | e62XBKNmmWA.@dp |