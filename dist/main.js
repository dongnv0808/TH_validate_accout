"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RegularExpression_1 = require("./RegularExpression");
let accountRegex = new RegularExpression_1.AccountRegex();
let validAccount = ["123abc_", "_abc123", "______", "123456", "abcdefgh"];
let invalidAccount = [".@", "12345", "1234_", "abcde"];
for (let account of validAccount) {
    let isValiddate = accountRegex.validate(account);
    console.log(`Account: ${account} | ${isValiddate}`);
}
for (let account of invalidAccount) {
    let isValiddate = accountRegex.validate(account);
    console.log(`Account: ${account} | ${isValiddate}`);
}
