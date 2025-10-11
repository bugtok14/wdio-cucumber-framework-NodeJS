Feature: Login successfully
    As a Developer in Test
    I want to login to site
    I want to add item to cart, checkout and complete my purchase
    then i can see the dashboard after clicking back home button

Scenario: I login successfully using valid credentials
    Given I open the url "https://www.saucedemo.com"
    When I login with username "visual_user" and password "secret_sauce"
        # And I accept the alertbox
    Then I expect that element "main.screen.container.homepage" does exist
    When I click on the element "main.screen.container.homepage.buttons.add_item_buttons"
        And I click on the element "main.screen.container.homepage.buttons.cart_icon"
        And I click on the element "main.screen.container.cart_page.buttons.checkout_button"
        And I set "Dave" to the inputfield "main.screen.container.checkout_page.textbox.firstname"
        And I set "Bugtok" to the inputfield "main.screen.container.checkout_page.textbox.lastname"
        And I set "12345" to the inputfield "main.screen.container.checkout_page.textbox.postalcode"
        And I click on the element "main.screen.container.checkout_page.buttons.continue_button"
        And I click on the element "main.screen.container.checkout_page.buttons.finish_button"
    Then I expect that element "main.screen.container.checkout_page.text.thank_you_message" does exist
    When I click on the element "main.screen.container.checkout_page.buttons.back_home_button"
    Then I expect that element "main.screen.container.homepage" does exist