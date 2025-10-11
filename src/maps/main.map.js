export const main = {
    screen: {
        container: {
            homepage: {
                self: '//div[@class="inventory_container"]',
                buttons: {
                    add_item_buttons: {
                        self: '//button[contains(@id, "add-to-cart-sauce-labs-backpack")]',
                    },
                    remove_item_buttons: {
                        self: '//button[contains(@id, "remove-sauce-labs-backpack")]',
                    },
                    cart_icon: {
                        self: '//a[@class="shopping_cart_link"]',
                    },
                },
            },
            cart_page: {
                self: '//div[@class="cart_list"]',
                buttons: {
                    checkout_button: {
                        self: '//button[@id="checkout"]',
                    },
                },
            },
            checkout_page: {
                text: {
                    thank_you_message: {
                        self: '//h2[@class="complete-header"]',
                    },
                },
                buttons: {
                    continue_button: {
                        self: '//input[@id="continue"]',
                    },
                    finish_button: {
                        self: '//button[@id="finish"]',
                    },
                    back_home_button: {
                        self: '//button[@id="back-to-products"]',
                    },
                },
                textbox: {
                    firstname: {
                        self: '//input[@id="first-name"]',
                    },
                    lastname: {
                        self: '//input[@id="last-name"]',
                    },
                    postalcode: {
                        self: '//input[@id="postal-code"]',
                    },
                },
            },
        },
    },
};
