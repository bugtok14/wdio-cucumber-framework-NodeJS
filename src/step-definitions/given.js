import { Given } from '@cucumber/cucumber';

Given(/^I open the (url|site) "([^"]*)"$/, async (action, page) => {
    await browser.url(page);
});

// Given(
//     /^the element "([^"]*)?" is( not)* displayed$/,

// );

// Given(
//     /^the element "([^"]*)?" is( not)* enabled$/,

// );

// Given(
//     /^the element "([^"]*)?" is( not)* selected$/,

// );

// Given(
//     /^the checkbox "([^"]*)?" is( not)* checked$/,

// );

// Given(
//     /^there is (an|no) element "([^"]*)?" on the page$/,

// );

// Given(
//     /^the title is( not)* "([^"]*)?"$/,

// );

// Given(
//     /^the element "([^"]*)?" contains( not)* the same text as element "([^"]*)?"$/,

// );

// Given(
//     /^the (button|element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/,

// );

// Given(
//     /^the (button|element|container) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,

// );

// Given(
//     /^the (button|element) "([^"]*)?"( not)* contains any text$/,

// );

// Given(
//     /^the (button|element) "([^"]*)?" is( not)* empty$/,

// );

// Given(
//     /^the page url is( not)* "([^"]*)?"$/,

// );

// Given(
//     /^the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,

// );

// Given(
//     /^the cookie "([^"]*)?" contains( not)* the value "([^"]*)?"$/,

// );

// Given(
//     /^the cookie "([^"]*)?" does( not)* exist$/,

// );

// Given(
//     /^the element "([^"]*)?" is( not)* ([\d]+)px (broad|tall)$/,

// );

// Given(
//     /^the element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x|y) axis$/,

// );

// Given(
//     /^I have a screen that is ([\d]+) by ([\d]+) pixels$/,

// );

// Given(
//     /^I have closed all but the first (window|tab)$/,

// );

// Given(
//     /^a (alertbox|confirmbox|prompt) is( not)* opened$/,

// );
