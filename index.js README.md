[1mdiff --git a/README.md b/README.md[m
[1mindex 9fb3050..8b7edca 100644[m
[1m--- a/README.md[m
[1m+++ b/README.md[m
[36m@@ -41,10 +41,15 @@[m [mO projeto evolui de forma incremental por meio de Sprints, simulando o desenvolv[m
 [m
 ### 🚧 Sprint 3 — Validações e Novas Operações[m
 [m
[31m-- Validação de valores não numéricos em depósitos, saques e transferências[m
[32m+[m[32m- Validação de valores não numéricos em depósitos, saques, transferências e Pix[m
 - Bloqueio de valores iguais ou menores que zero[m
 - Proteção do saldo contra valores `NaN`[m
 - Prevenção do registro de operações inválidas no histórico[m
[32m+[m[32m- Verificação da conta de destino antes da validação de saldo[m
[32m+[m[32m- Envio de Pix entre contas[m
[32m+[m[32m- Registro do Pix no histórico da conta de origem[m
[32m+[m[32m- Registro do Pix recebido no histórico da conta de destino[m
[32m+[m[32m- Integração do Pix ao menu interativo[m
 [m
 ---[m
 [m
[36m@@ -91,8 +96,8 @@[m [mFinControl/[m
 [m
 ### Responsabilidade dos principais arquivos[m
 [m
[31m-- `index.js`: controla o fluxo do programa e os menus.[m
[31m-- `data.js`: armazena e localiza as contas.[m
[32m+[m[32m- `index.js`: controla o fluxo do programa, o login e os menus interativos.[m
[32m+[m[32m- `data.js`: armazena, cria e localiza as contas.[m
 - `account.js`: contém as operações bancárias e suas validações.[m
 - `interface.js`: exibe as informações da conta e o histórico de transações.[m
 - `assets.js`: arquivo reservado para futuros recursos auxiliares do sistema.[m
[36m@@ -105,6 +110,8 @@[m [mAs contas e transações são armazenadas apenas na memória durante a execuçã[m
 [m
 Ao encerrar o programa, os dados são apagados. A persistência em arquivo JSON será implementada em uma Sprint futura.[m
 [m
[32m+[m[32mO login utiliza apenas o número da conta. Autenticação por senha será implementada posteriormente.[m
[32m+[m
 ---[m
 [m
 ## 🗺️ Roadmap[m
[36m@@ -129,12 +136,16 @@[m [mAo encerrar o programa, os dados são apagados. A persistência em arquivo JSON[m
 - [x] Bloqueio de valores iguais ou menores que zero[m
 - [x] Proteção do saldo contra valores `NaN`[m
 - [x] Proteção do histórico contra operações inválidas[m
[31m-- [ ] Ajuste da ordem das validações de transferência[m
[31m-- [ ] Pix[m
[32m+[m[32m- [x] Ajuste da ordem das validações de transferência[m
[32m+[m[32m- [x] Implementação do Pix[m
[32m+[m[32m- [x] Integração do Pix ao menu[m
[32m+[m[32m- [x] Registro do Pix nos históricos de origem e destino[m
[32m+[m[32m- [ ] Bloqueio de transferência e Pix para a própria conta[m
 - [ ] Pagamento de contas[m
 - [ ] Extrato bancário[m
 - [ ] Estorno de transações[m
 - [ ] Listagem de contas[m
[32m+[m[32m- [ ] Formatação monetária em reais[m
 - [ ] Outras validações de entrada[m
 [m
 ### 🔮 Sprint 4 — Persistência de Dados[m
[36m@@ -227,10 +238,15 @@[m [mEste projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` p[m
 [m
 ### 🚧 Sprint 3 — Validation and New Banking Operations[m
 [m
[31m-- Validation of non-numeric values in deposits, withdrawals and transfers[m
[32m+[m[32m- Validation of non-numeric values in deposits, withdrawals, transfers and Pix[m
 - Blocking values equal to or less than zero[m
 - Balance protection against `NaN` values[m
 - Prevention of invalid operations being added to the transaction history[m
[32m+[m[32m- Destination account validation before the balance check[m
[32m+[m[32m- Pix transfers between accounts[m
[32m+[m[32m- Pix registration in the sender's transaction history[m
[32m+[m[32m- Pix registration in the recipient's transaction history[m
[32m+[m[32m- Pix integration with the interactive menu[m
 [m
 ---[m
 [m
[36m@@ -277,20 +293,22 @@[m [mFinControl/[m
 [m
 ### Main file responsibilities[m
 [m
[31m-- `index.js`: controls the application flow and menus.[m
[31m-- `data.js`: stores and searches for accounts.[m
[32m+[m[32m- `index.js`: controls the application flow, login and interactive menus.[m
[32m+[m[32m- `data.js`: stores, creates and searches for accounts.[m
 - `account.js`: contains banking operations and their validations.[m
 - `interface.js`: displays account information and transaction history.[m
 - `assets.js`: file reserved for future auxiliary system resources.[m
 [m
 ---[m
 [m
[31m-## ⚠️ Current Limitation[m
[32m+[m[32m## ⚠️ Current Limitations[m
 [m
 Accounts and transactions are currently stored only in memory while the application is running.[m
 [m
 When the application is closed, all data is lost. JSON data persistence will be implemented in a future Sprint.[m
 [m
[32m+[m[32mLogin currently uses only the account number. Password authentication will be implemented later.[m
[32m+[m
 ---[m
 [m
 ## 🗺️ Roadmap[m
[36m@@ -315,12 +333,16 @@[m [mWhen the application is closed, all data is lost. JSON data persistence will be[m
 - [x] Blocking values equal to or less than zero[m
 - [x] Balance protection against `NaN` values[m
 - [x] Transaction history protection against invalid operations[m
[31m-- [ ] Transfer validation order adjustment[m
[31m-- [ ] Pix[m
[32m+[m[32m- [x] Transfer validation order adjustment[m
[32m+[m[32m- [x] Pix implementation[m
[32m+[m[32m- [x] Pix integration with the menu[m
[32m+[m[32m- [x] Pix registration in sender and recipient histories[m
[32m+[m[32m- [ ] Blocking transfers and Pix to the same account[m
 - [ ] Bill payment[m
 - [ ] Bank statement[m
 - [ ] Transaction reversal[m
 - [ ] Account listing[m
[32m+[m[32m- [ ] Brazilian currency formatting[m
 - [ ] Additional input validations[m
 [m
 ### 🔮 Sprint 4 — Data Persistence[m
[1mdiff --git a/account.js b/account.js[m
[1mindex aefb0fd..d69b3fe 100644[m
[1m--- a/account.js[m
[1m+++ b/account.js[m
[36m@@ -38,19 +38,38 @@[m [mfunction transfer(accountNumberOrigin, accountNumberDestination, amount) {[m
     } else if (!Number.isFinite(amount) || amount <= 0) {[m
         console.log("Valor inválido para transferência.");[m
         return;[m
[32m+[m[32m    } else if (destinationAccount === null) {[m
[32m+[m[32m        console.log("Conta de destino não encontrada.");[m
     } else if (amount > sourceAccount.balance) {[m
         console.log("Saldo insuficiente para transferência.");[m
     } else {[m
[31m-        if (destinationAccount === null) {[m
[31m-            console.log("Conta de destino não encontrada.");[m
[31m-        } else {[m
[31m-            sourceAccount.balance -= amount;[m
[31m-            destinationAccount.balance += amount;[m
[31m-            sourceAccount.history.push(`Transferência de R$${amount} para ${destinationAccount.holderName} realizada com sucesso!`);[m
[31m-            destinationAccount.history.push(`Recebimento de R$${amount} de ${sourceAccount.holderName} realizado com sucesso!`);[m
[31m-            console.log(`Transferência de R$${amount} realizada com sucesso!`);[m
[31m-        }[m
[32m+[m[32m        sourceAccount.balance -= amount;[m
[32m+[m[32m        destinationAccount.balance += amount;[m
[32m+[m[32m        sourceAccount.history.push(`Transferência de R$${amount} para ${destinationAccount.holderName} realizada com sucesso!`);[m
[32m+[m[32m        destinationAccount.history.push(`Recebimento de R$${amount} de ${sourceAccount.holderName} realizado com sucesso!`);[m
[32m+[m[32m        console.log(`Transferência de R$${amount} realizada com sucesso!`);[m
     }[m
 }[m
 [m
[31m-export { deposit, withdraw, transfer };[m
\ No newline at end of file[m
[32m+[m[32mfunction pix(accountNumberOrigin, accountNumberDestination, amount) {[m
[32m+[m[32m    let sourceAccount = findAccount(accountNumberOrigin);[m
[32m+[m[32m    let destinationAccount = findAccount(accountNumberDestination);[m
[32m+[m[32m    if (sourceAccount === null) {[m
[32m+[m[32m        console.log("Conta de origem não encontrada.");[m
[32m+[m[32m    } else if (!Number.isFinite(amount) || amount <= 0) {[m
[32m+[m[32m        console.log("Valor inválido para PIX.");[m
[32m+[m[32m        return;[m
[32m+[m[32m    } else if (destinationAccount === null) {[m
[32m+[m[32m        console.log("Conta de destino não encontrada.");[m
[32m+[m[32m    } else if (amount > sourceAccount.balance) {[m
[32m+[m[32m        console.log("Saldo insuficiente para realizar PIX.");[m
[32m+[m[32m    } else {[m
[32m+[m[32m        sourceAccount.balance -= amount;[m
[32m+[m[32m        destinationAccount.balance += amount;[m
[32m+[m[32m        sourceAccount.history.push(`PIX no valor de R$${amount} para ${destinationAccount.holderName} realizado com sucesso!`);[m
[32m+[m[32m        destinationAccount.history.push(`PIX de R$${amount} de ${sourceAccount.holderName} recebido com sucesso!`);[m
[32m+[m[32m        console.log(`PIX no valor de R$${amount} realizado com sucesso!`);[m
[32m+[m[32m    }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mexport { deposit, withdraw, transfer, pix };[m
\ No newline at end of file[m
[1mdiff --git a/index.js b/index.js[m
[1mindex 0f3dcfb..7d48f20 100644[m
[1m--- a/index.js[m
[1m+++ b/index.js[m
[36m@@ -1,5 +1,5 @@[m
 import { createAccount, findAccount } from "./data.js";[m
[31m-import { deposit, withdraw, transfer } from "./account.js";[m
[32m+[m[32mimport { deposit, withdraw, transfer, pix } from "./account.js";[m
 import { showHeader, showAccount, showHistory } from "./interface.js";[m
 [m
 import readline from "node:readline/promises";[m
[36m@@ -56,9 +56,10 @@[m [masync function main() {[m
         1. Depositar[m
         2. Sacar[m
         3. Transferir[m
[31m-        4. Consultar conta[m
[31m-        5. Consultar histórico[m
[31m-        6. Logout[m
[32m+[m[32m        4. PIX[m
[32m+[m[32m        5. Consultar conta[m
[32m+[m[32m        6. Consultar histórico[m
[32m+[m[32m        7. Logout[m
 [m
         Escolha uma opção:[m
 `);[m
[36m@@ -69,10 +70,10 @@[m [masync function main() {[m
 [m
                         deposit(account.accountNumber, amount);[m
                     } else if (accountOption === "2") {[m
[31m-                        let withdrawAmount = await rl.question("Digite o valor do saque: R$")[m
[32m+[m[32m                        let withdrawAmount = await rl.question("Digite o valor do saque: R$");[m
 [m
                         withdrawAmount = parseFloat(withdrawAmount);[m
[31m-                        withdraw(account.accountNumber, withdrawAmount)[m
[32m+[m[32m                        withdraw(account.accountNumber, withdrawAmount);[m
                     } else if (accountOption === "3") {[m
                         let destinationAccount = await rl.question("Digite a conta que receberá o valor:");[m
                         destinationAccount = parseInt(destinationAccount);[m
[36m@@ -82,12 +83,20 @@[m [masync function main() {[m
                         transferAmount = parseFloat(transferAmount);[m
 [m
                         transfer(account.accountNumber, destinationAccount, transferAmount);[m
[31m-[m
                     } else if (accountOption === "4") {[m
[31m-                        showAccount(account);[m
[32m+[m
[32m+[m[32m                        let destinationAccount = await rl.question("Digite a conta que receberá o valor:");[m
[32m+[m[32m                        destinationAccount = parseInt(destinationAccount);[m
[32m+[m
[32m+[m[32m                        let pixAmount = await rl.question("Digite o valor do PIX: R$");[m
[32m+[m
[32m+[m[32m                        pixAmount = parseFloat(pixAmount);[m
[32m+[m[32m                        pix(account.accountNumber, destinationAccount, pixAmount);[m
                     } else if (accountOption === "5") {[m
[31m-                        showHistory(account);[m
[32m+[m[32m                        showAccount(account);[m
                     } else if (accountOption === "6") {[m
[32m+[m[32m                        showHistory(account);[m
[32m+[m[32m                    } else if (accountOption === "7") {[m
 [m
                         console.log("Logout realizado.");[m
                         break;[m
