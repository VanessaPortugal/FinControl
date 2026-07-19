import { findAccount } from "./dados.js";

function deposit(accountNumber, amount) {
    let account = findAccount(accountNumber);

    if (account === null) {
        console.log("Conta não encontrada.");
    } else if (amount <= 0) {
        console.log("Valor inválido para depósito.");
    } else {
        account.balance += amount;
        account.history.push(`Depósito de R$${amount} realizado com sucesso!`);
        console.log(`Depósito de R$${amount} realizado com sucesso!`);
    }
}
function withdraw(accountNumber, amount) {
        let account = findAccount(accountNumber);
        if (account === null) {
            console.log("Conta não encontrada.");
        } else if (amount <= 0) {
            console.log("Valor inválido para saque.");
        } else if (amount > account.balance) {
            console.log("Saldo insuficiente para saque.");
        } else {
            account.balance -= amount;
            account.history.push(`Saque de R$${amount} realizado com sucesso!`);
            console.log(`Saque de R$${amount} realizado com sucesso!`);
        }
    }
function transfer(accountNumberOrigin, accountNumberDestination, amount) {
    let sourceAccount = findAccount(accountNumberOrigin);
    let destinationAccount = findAccount(accountNumberDestination);
    if (sourceAccount === null) {
        console.log("Conta de origem não encontrada.");
    } else if (amount <= 0) {
        console.log("Valor inválido para transferência.");
    } else if (amount > sourceAccount.balance) {
        console.log("Saldo insuficiente para transferência.");
    } else {
        if (destinationAccount === null) {
            console.log("Conta de destino não encontrada.");
        } else {
            sourceAccount.balance -= amount;
            destinationAccount.balance += amount;
            sourceAccount.history.push(`Transferência de R$${amount} para ${destinationAccount.holderName} realizada com sucesso!`);
            destinationAccount.history.push(`Recebimento de R$${amount} de ${sourceAccount.holderName} realizado com sucesso!`);
            console.log(`Transferência de R$${amount} realizada com sucesso!`);
        }
    }
 }

export { deposit, withdraw, transfer };