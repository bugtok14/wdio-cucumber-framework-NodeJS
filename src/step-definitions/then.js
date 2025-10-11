import { Then } from '@cucumber/cucumber';

import { resolveLocator } from '../support/utils/locatorResolver.js';

Then(/^I expect that element "([^"]+)" is displayed$/, async (locatorPath) => {
    const locator = resolveLocator(locatorPath);
    await expect($(locator)).toBeDisplayed();
});

Then(/^I expect that element "([^"]+)" is not displayed$/, async (locatorPath) => {
    const locator = resolveLocator(locatorPath);
    await expect($(locator)).not.toBeDisplayed();
});

Then(/^I expect that element "([^"]+)" does exist$/, async (locatorPath) => {
    const locator = resolveLocator(locatorPath);
    const elem = await $(locator);
    await expect(elem).toBeExisting();
});

Then(/^I expect that element "([^"]+)" does not exist$/, async (locatorPath) => {
    const locator = resolveLocator(locatorPath);
    const elem = await $(locator);
    await expect(elem).not.toBeExisting();
});

// Then(
//     /^I expect that element "([^"]*)?" becomes( not)* displayed$/,

// );

// Then(
//     /^I expect that element "([^"]*)?" is( not)* within the viewport$/,

// );

// Then(
//     /^I expect that the title is( not)* "([^"]*)?"$/,

// );

// Then(
//     /^I expect that the title( not)* contains "([^"]*)?"$/,

// );

// Then(
//     /^I expect that element "([^"]*)?" does( not)* appear exactly "([^"]*)?" times$/,

// );

// Then(
//     /^I expect that element "([^"]*)?"( not)* contains the same text as element "([^"]*)?"$/,

// );

// Then(
//     /^I expect that (button|element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/,

// );

// Then(
//     /^I expect that (button|element|container) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,

// );

// Then(
//     /^I expect that (button|element) "([^"]*)?"( not)* contains any text$/,

// );

// Then(
//     /^I expect that (button|element) "([^"]*)?" is( not)* empty$/,

// );

// Then(
//     /^I expect that the url is( not)* "([^"]*)?"$/,

// );

// Then(
//     /^I expect that the path is( not)* "([^"]*)?"$/,

// );

// Then(
//     /^I expect the url to( not)* contain "([^"]*)?"$/,

// );

// Then(
//     /^I expect that the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,

// );

// Then(
//     /^I expect that the font( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,

// );

// Then(
//     /^I expect that checkbox "([^"]*)?" is( not)* checked$/,

// );

// Then(
//     /^I expect that element "([^"]*)?" is( not)* selected$/,

// );

// Then(
//     /^I expect that element "([^"]*)?" is( not)* enabled$/,

// );

// Then(
//     /^I expect that cookie "([^"]*)?"( not)* contains "([^"]*)?"$/,

// );

// Then(
//     /^I expect that cookie "([^"]*)?"( not)* exists$/,

// );

// Then(
//     /^I expect that element "([^"]*)?" is( not)* ([\d]+)px (broad|tall)$/,

// );

// Then(
//     /^I expect that element "([^"]*)?" is( not)* positioned at ([\d+.?\d*]+)px on the (x|y) axis$/,

// );

// Then(
//     /^I expect that element "([^"]*)?" (has|does not have) the class "([^"]*)?"$/,

// );

// Then(
//     /^I expect a new (window|tab) has( not)* been opened$/,

// );

// Then(
//     /^I expect the url "([^"]*)?" is opened in a new (tab|window)$/,

// );

// Then(
//     /^I expect that element "([^"]*)?" is( not)* focused$/,

// );

// Then(
//     /^I wait on element "([^"]*)?"(?: for (\d+)ms)*(?: to( not)* (be checked|be enabled|be selected|be displayed|contain a text|contain a value|exist))*$/,

// );

// Then(
//     /^I expect that a (alertbox|confirmbox|prompt) is( not)* opened$/,

// );

// Then(
//     /^I expect that a (alertbox|confirmbox|prompt)( not)* contains the text "([^"]*)?"$/,

// );
