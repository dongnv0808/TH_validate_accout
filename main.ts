import { AccountRegex } from "./RegularExpression";

let accountRegex = new AccountRegex();
let validAccount: string[] = ["123abc_", "_abc123", "______", "123456", "abcdefgh"];
let invalidAccount: string[] = [".@", "12345", "1234_", "abcde"];

for(let account of validAccount){
    let isValiddate: boolean = accountRegex.validate(account);
    console.log(`Account: ${account} | ${isValiddate}`);
}

for(let account of invalidAccount){
    let isValiddate: boolean = accountRegex.validate(account);
    console.log(`Account: ${account} | ${isValiddate}`);
}