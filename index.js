import { banco, criarConta } from "./dados.js";
import { depositar, sacar, transferir} from "./conta.js";
import { mostrarHistorico, mostrarCabecalho, mostrarConta } from "./interface.js";

let conta = criarConta("Vanessa");
let conta2 = criarConta("Breno");

depositar(conta, 1000);
transferir(conta, conta2, 100);
depositar(conta, 500);
sacar(conta, 20);

mostrarCabecalho();

mostrarConta(conta);
mostrarHistorico(conta);

mostrarConta(conta2);
mostrarHistorico(conta2);