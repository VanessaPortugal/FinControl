const banco = {
    nome: "FinControl",
    agenciaPadrao: "0001",
    proximoNumeroDaConta: 1000,
    contas: [],
};

export { banco };

function criarConta(nomeDoTitular) {
    let novaConta = {
        banco: banco.nome,
        agencia: banco.agenciaPadrao,
        nomeDoTitular,
        numeroDaConta: banco.proximoNumeroDaConta,
        saldo: 0,
        historico: [],
    };

    banco.contas.push(novaConta);
    banco.proximoNumeroDaConta++;
    
    return novaConta;
}


export { criarConta };