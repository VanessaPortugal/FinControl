
 function depositar(conta,valor) {
    if (valor > 0) {
        console.log(`Depósito de R$${valor} realizado com sucesso!`);
         conta.saldo += valor;
         conta.historico.push(`Depósito de R$${valor} realizado com sucesso!`); 
    } else {
            console.log("Valor inválido para depósito.");  
    }
}
function sacar(conta,valor) {
        if (valor > 0 && valor <= conta.saldo) {
        console.log(`Saque de R$${valor} realizado com sucesso!`);
         conta.saldo -= valor;
         conta.historico.push(`Saque de R$${valor} realizado com sucesso!`);
    } else {
        console.log(`Não foi possível realizar o saque.
            Saldo insuficiente no momento`);
    }
}

function transferir(contaOrigem, contaDestino, valor) {
    if (valor > 0 && valor <= contaOrigem.saldo) {
        contaOrigem.saldo -= valor;
        contaDestino.saldo += valor;
        contaOrigem.historico.push(`Transferência de R$${valor} para ${contaDestino.nomeDoTitular} realizada com sucesso!`);
        contaDestino.historico.push(`Recebimento de R$${valor} de ${contaOrigem.nomeDoTitular} realizado com sucesso!`);
        console.log(`Transferência de R$${valor} realizada com sucesso!`);
    } else {
        console.log(`Não foi possível realizar a transferência. 
            Saldo insuficiente ou valor inválido.`);
    }
 }

export { depositar, sacar, transferir };