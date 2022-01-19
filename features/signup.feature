# ./features/signup.feature

Feature: SignUp
    @signup
    @smoketest     
    Scenario: As an existing user I should be able to sign up to the site successfully
        Given I navigate to home page
        When I click Sign In button
        And I enter Email in the create an account section
        And I click Create an Account button
        And I complete required fields in the Personal section
        And I complete required fields in the Address Info section
        And I click Register button
        Then I am taken to My Account page