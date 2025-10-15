import { When } from '@cucumber/cucumber';

import { resolveLocator } from '../support/utils/locatorResolver';

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
    async (action: string, _elementType: string, locatorPath: string) => {
        const locator = resolveLocator(locatorPath);
        const elem = await $(locator);

        if (action === 'doubleclick') {
            await elem.doubleClick();
        } else {
            await elem.click();
        }
    }
);

When(/^I (add|set) "([^"]+)" to the inputfield "([^"]+)"$/, async (action: string, value: string, locatorPath: string) => {
    const locator = resolveLocator(locatorPath);
    const elem = await $(locator);

    if (action === 'set') {
        await elem.setValue(value); // clears before typing
    } else {
        await elem.addValue(value); // appends to existing value
    }
});

When(/^I clear the inputfield "([^"]+)"$/, async (locatorPath: string) => {
    const locator = resolveLocator(locatorPath);
    const elem = await $(locator);
    await elem.clearValue();
});

When(/^I wait element "([^"]+)" within "([^"]+)" seconds$/, async (locatorPath: string, sec: string) => {
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
