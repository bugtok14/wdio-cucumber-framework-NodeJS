import { Given } from '@cucumber/cucumber';

Given(/^I open the (url|site) "([^"]*)"$/, async (action: string, page: string) => {
    await browser.url(page);
});
