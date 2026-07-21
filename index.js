import { createAccount, findAccount } from "./data.js";
import { deposit, withdraw, transfer} from "./account.js";
import { showHeader, showAccount , showHistory } from "./interface.js";

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
        if (accountOption === "1"){

    console.log("Você escolheu depositar.");

} else if (accountOption === "2") {

    console.log("Você escolheu sacar.");

} else if (accountOption === "3") {

    console.log("Você escolheu transferir.");

} else if (accountOption === "4") {

    console.log("Você escolheu consultar conta.");

} else if (accountOption === "5") {

    console.log("Você escolheu consultar histórico.");

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
}  else if (option === "0") {

        console.log("Encerrando o FinControl...");
        break;

        } else {

        console.log("Opção inválida.");

        }

    }

    rl.close();   // ← aqui
}

main();


/*BLOCO DE TESTES
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
*/