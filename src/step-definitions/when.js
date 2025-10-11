import { When } from '@cucumber/cucumber';

import { resolveLocator } from '../support/utils/locatorResolver.js';

When(
    /^I login with username "([^"]+)" and password "([^"]+)"$/,
    async (username, password) => {
        // Resolve locators from your map
        const usernameInput = await $(resolveLocator('login.screen.container.textbox.username'));
        const passwordInput = await $(resolveLocator('login.screen.container.textbox.password'));
        const loginButton = await $(resolveLocator('login.screen.container.button.sign_in_button'));

        // Perform actions
        await usernameInput.setValue(username);
        await passwordInput.setValue(password);
        await loginButton.click();
    }
);

When(
    /^I (click|doubleclick) on the (link|button|element) "([^"]+)"$/,
    async (action, _elementType, locatorPath) => {
        const locator = resolveLocator(locatorPath);
        const elem = await $(locator);

        if (action === 'doubleclick') {
            await elem.doubleClick();
        } else {
            await elem.click();
        }
    }
);

When(/^I (add|set) "([^"]+)" to the inputfield "([^"]+)"$/, async (action, value, locatorPath) => {
    const locator = resolveLocator(locatorPath);
    const elem = await $(locator);

    if (action === 'set') {
        await elem.setValue(value); // clears before typing
    } else {
        await elem.addValue(value); // appends to existing value
    }
});

When(/^I clear the inputfield "([^"]+)"$/, async (locatorPath) => {
    const locator = resolveLocator(locatorPath);
    const elem = await $(locator);
    await elem.clearValue();
});

When(/^I wait element "([^"]+)" within "([^"]+)" seconds$/, async (locatorPath, sec) => {
    const milliseconds = parseInt(sec, 10) * 1000;

    await browser.waitUntil(
        async () => {
            const locator = resolveLocator(locatorPath);
            const elem = await $(locator);
            return await elem.isDisplayed();
        },
        {
            timeout: milliseconds,
            timeoutMsg: `Element (${locatorPath}) was not displayed after ${sec} seconds`,
        }
    );
});

// When(
//     /^I drag element "([^"]*)?" to element "([^"]*)?"$/,

// );

// When(
//     /^I set a cookie "([^"]*)?" with the content "([^"]*)?"$/,

// );

// When(
//     /^I delete the cookie "([^"]*)?"$/,

// );

// When(
//     /^I press "([^"]*)?"$/,

// );

// When(/^I (accept|dismiss) the (alertbox|confirmbox|prompt)$/, async (action, type) => {
//     if (action === 'accept') {
//         await browser.acceptAlert();
//     } else {
//         await browser.dismissAlert();
//     }
// });

// When(
//     /^I enter "([^"]*)?" into the prompt$/,

// );

// When(
//     /^I scroll to element "([^"]*)?"$/,

// );

// When(
//     /^I close the last opened (window|tab)$/,

// );

// When(
//     /^I focus the last opened (window|tab)$/,

// );

// When(
//     /^I select the (\d+)(st|nd|rd|th) option for element "([^"]*)?"$/,

// );

// When(
//     /^I select the option with the (name|value|text) "([^"]*)?" for element "([^"]*)?"$/,

// );

// When(
//     /^I move to element "([^"]*)?"(?: with an offset of (\d+),(\d+))*$/,

// );

// When(
//     /^I switch to the iframe "([^"]*)?"$/,

// );
