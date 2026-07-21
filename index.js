import { createAccount, findAccount } from "./data.js";
import { deposit, withdraw, transfer } from "./account.js";
import { showHeader, showAccount, showHistory } from "./interface.js";

import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({
    input,
    output
});

async function main() {

    let name = await rl.question(`
    ==========================
         FinControl 
    ========================== 
        Digite seu nome:
        `);

    console.log(`Olá, ${name}!`);

    while (true) {

        let option = await rl.question(`
    ==========================
         FinControl 
    ========================== 
        1. Entrar
        2. Criar conta
        0. Sair
        Escolha uma opção: 
        `);

        if (option === "1") {

            let accountNumber = await rl.question("Digite o número da conta: ");

            accountNumber = parseInt(accountNumber);

            let account = findAccount(accountNumber);
            if (account === null) {
                console.log("Conta não encontrada.");
            } else {

                console.log(`Bem-vindo(a), ${account.holderName}!`);

                while (true) {
                    let accountOption = await rl.question(`
    ==========================
        Bem-vindo(a), ${account.holderName}
        Conta: ${account.accountNumber}
    ==========================

        1. Depositar
        2. Sacar
        3. Transferir
        4. Consultar conta
        5. Consultar histórico
        6. Logout

        Escolha uma opção:
`);
                    if (accountOption === "1") {
                        let amount = await rl.question("Digite o valor do depósito: R$");

                        amount = parseFloat(amount);

                        deposit(account.accountNumber, amount);
                    } else if (accountOption === "2") {
                        let withdrawAmount = await rl.question("Digite o valor do saque: R$")

                        withdrawAmount = parseFloat(withdrawAmount);
                        withdraw(account.accountNumber, withdrawAmount)
                    } else if (accountOption === "3") {
                        let destinationAccount = await rl.question("Digite a conta que receberá o valor:");
                        destinationAccount = parseInt(destinationAccount);

                        let transferAmount = await rl.question("Digite o valor da transferência: R$");

                        transferAmount = parseFloat(transferAmount);

                        transfer(account.accountNumber, destinationAccount, transferAmount);

                    } else if (accountOption === "4") {
                        showAccount(account);
                    } else if (accountOption === "5") {
                        showHistory(account);
                    } else if (accountOption === "6") {

                        console.log("Logout realizado.");
                        break;

                    } else {

                        console.log("Opção inválida.");

                    }
                }

            }
        } else if (option === "2") {

            let holderName = await rl.question("Digite o nome do titular da conta: ");

            let newAccount = createAccount(holderName);

            console.log(`
    ==========================
        Conta criada com sucesso!
    ==========================

        Banco: ${newAccount.bank}
        Agência: ${newAccount.branch}
        Conta: ${newAccount.accountNumber}
        Titular: ${newAccount.holderName}
        Saldo inicial: R$${newAccount.balance}
        `);
        } else if (option === "0") {

            console.log("Encerrando o FinControl...");
            break;

        } else {

            console.log("Opção inválida.");

        }

    }

    rl.close();
}

main();
