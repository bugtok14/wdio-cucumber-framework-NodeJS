import { Then } from '@cucumber/cucumber';

import { resolveLocator } from '../support/utils/locatorResolver';

Then(/^I expect that element "([^"]+)" is displayed$/, async (locatorPath: string) => {
    const locator = resolveLocator(locatorPath);
    await expect($(locator)).toBeDisplayed();
});

Then(/^I expect that element "([^"]+)" is not displayed$/, async (locatorPath: string) => {
    const locator = resolveLocator(locatorPath);
    await expect($(locator)).not.toBeDisplayed();
});

Then(/^I expect that element "([^"]+)" does exist$/, async (locatorPath: string) => {
    const locator = resolveLocator(locatorPath);
    const elem = await $(locator);
    await expect(elem).toBeExisting();
});

Then(/^I expect that element "([^"]+)" does not exist$/, async (locatorPath: string) => {
    const locator = resolveLocator(locatorPath);
    const elem = await $(locator);
    await expect(elem).not.toBeExisting();
});
