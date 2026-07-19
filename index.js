import { createAccount } from "./data.js";
import { deposit, withdraw, transfer} from "./account.js";
import { showHeader, showAccount , showHistory } from "./interface.js";

let accountVanessa = createAccount("Vanessa");
let accountBreno = createAccount("Breno");

deposit(accountVanessa.accountNumber, 500);

transfer(
    accountVanessa.accountNumber,
    accountBreno.accountNumber,
    200
);

showHeader();

showAccount(accountVanessa);
showHistory(accountVanessa);

showAccount(accountBreno);
showHistory(accountBreno);