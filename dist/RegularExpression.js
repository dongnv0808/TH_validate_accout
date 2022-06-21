"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountRegex = void 0;
class AccountRegex {
    constructor() {
        this.ACCOUNT_REGEX = /^[_a-z0-9]{6,}$/;
    }
    validate(regex) {
        return this.ACCOUNT_REGEX.test(regex);
    }
}
exports.AccountRegex = AccountRegex;
