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

export { showHeader, showAccount, showHistory };