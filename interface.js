  function mostrarCabecalho() {
    console.log(`
==========================
      FinControl
==========================
`);
}

function mostrarConta(conta) {
    console.log(`
    Titular: ${conta.nomeDoTitular}
    Número da conta: ${conta.numeroDaConta}
    Saldo: R$${conta.saldo}
    `);
 }

function mostrarHistorico(conta) {
    console.log("================= Histórico ================= "); 
    for (let i = 0; i < conta.historico.length; i++) {
        console.log(`${i + 1}. ${conta.historico[i]}
============================================`);
    }
}

export {mostrarHistorico, mostrarCabecalho, mostrarConta };