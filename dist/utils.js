"use strict";
exports.__esModule = true;
exports.hashContentPassword = void 0;
/**
 * The contentPassword is for user content protection. It is made to work
 * offline and therefore is not secured yet. This is not intended for
 * fully secured solution
 */
exports.hashContentPassword = function (password) {
    return crypto.subtle.digest('SHA-256', new TextEncoder().encode(password));
};
