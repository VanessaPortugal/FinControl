const bank = {
    name: "FinControl",
    defaultBranch: "0001",
    nextAccountNumber: 1000,
    accounts: [],
};

function createAccount(holderName) {
    let newAccount = {
        bank: bank.name,
        branch: bank.defaultBranch,
        holderName: holderName,
        accountNumber: bank.nextAccountNumber,
        balance: 0,
        history: [],
    };

    bank.accounts.push(newAccount);
    bank.nextAccountNumber++;

    return newAccount;
}

function findAccount(accountNumber) {
    for (let i = 0; i < bank.accounts.length; i++) {
        if (bank.accounts[i].accountNumber === accountNumber) {
            return bank.accounts[i];
        }
    }
    return null;
}


export { bank, createAccount, findAccount };