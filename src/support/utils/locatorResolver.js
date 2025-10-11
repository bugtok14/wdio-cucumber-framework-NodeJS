import { sample } from '../../maps/sample.map.js';
import { login } from '../../maps/login.map.js';
import { main } from '../../maps/main.map.js';

const maps = {
    sample,
    login,
    main,
};

/**
 * Resolve a string path like "sample.screen.container.existing"
 * to its actual locator.
 * @param {string} path The path to the locator.
 * @returns {string} The locator string.
 */
export function resolveLocator(path) {
    const parts = path.split('.');
    let current = maps;

    for (const part of parts) {
        if (current[part]) {
            current = current[part];
        } else {
            throw new Error(`Locator path "${path}" not found`);
        }
    }

    // return .self if defined
    return current.self || current;
}
