 import { findAccount } from "./data.js";
 
 function showHeader() {
    console.log(`
==========================
      FinControl
==========================
`);
}

function showAccount(account) {
    console.log(`
    Titular: ${account.holderName}
    Número da conta: ${account.accountNumber}
    Saldo: R$${account.balance}
    `);
 }

function showHistory(account) {
    console.log("================= Histórico ================= "); 
    for (let i = 0; i < account.history.length; i++) {
        console.log(`${i + 1}. ${account.history[i]}
============================================`);
    }
}

function showAccountByNumber(accountNumber) {
    let account = findAccount(accountNumber);
    if (account) {
        showAccount(account);
    } else {
        console.log("Conta não encontrada.");
    }
}

function showHistoryByNumber(accountNumber) {
    let account = findAccount(accountNumber);
    if (account) {
        showHistory(account);
    } else {
        console.log("Conta não encontrada.");
    }
}

export { showHeader, showAccount, showHistory, showAccountByNumber, showHistoryByNumber };