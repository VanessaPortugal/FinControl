import { findAccount } from "./data.js";

function deposit(accountNumber, amount) {
    let account = findAccount(accountNumber);

    if (account === null) {
        console.log("Conta não encontrada.");
    } else if (!Number.isFinite(amount) || amount <= 0) {

        console.log("Valor inválido para depósito.");
        return;
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
    } else if (!Number.isFinite(amount) || amount <= 0) {
        console.log("Valor inválido para saque.");
        return;
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
    } else if (!Number.isFinite(amount) || amount <= 0) {
        console.log("Valor inválido para transferência.");
        return;
    } else if (destinationAccount === null) {
        console.log("Conta de destino não encontrada.");
    } else if (amount > sourceAccount.balance) {
        console.log("Saldo insuficiente para transferência.");
    } else {
        sourceAccount.balance -= amount;
        destinationAccount.balance += amount;
        sourceAccount.history.push(`Transferência de R$${amount} para ${destinationAccount.holderName} realizada com sucesso!`);
        destinationAccount.history.push(`Recebimento de R$${amount} de ${sourceAccount.holderName} realizado com sucesso!`);
        console.log(`Transferência de R$${amount} realizada com sucesso!`);
    }
}

function pix(accountNumberOrigin, accountNumberDestination, amount) {
    let sourceAccount = findAccount(accountNumberOrigin);
    let destinationAccount = findAccount(accountNumberDestination);
    if (sourceAccount === null) {
        console.log("Conta de origem não encontrada.");
    } else if (!Number.isFinite(amount) || amount <= 0) {
        console.log("Valor inválido para PIX.");
        return;
    } else if (destinationAccount === null) {
        console.log("Conta de destino não encontrada.");
    } else if (amount > sourceAccount.balance) {
        console.log("Saldo insuficiente para realizar PIX.");
    } else {
        sourceAccount.balance -= amount;
        destinationAccount.balance += amount;
        sourceAccount.history.push(`PIX no valor de R$${amount} para ${destinationAccount.holderName} realizado com sucesso!`);
        destinationAccount.history.push(`PIX de R$${amount} de ${sourceAccount.holderName} recebido com sucesso!`);
        console.log(`PIX no valor de R$${amount} realizado com sucesso!`);
    }
}

export { deposit, withdraw, transfer, pix };