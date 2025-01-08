import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11122233309 );
const cliente2 = new Cliente("Alice", 88822233309);
const cc1 = new ContaCorrente(cliente1, 1001);
const cc2 = new ContaCorrente(cliente2, 102);




cc1.depositar(500);
cc2.depositar(500);






console.log(cc1);
console.log(cc2);
console.log('O numero de contas é igual a', ContaCorrente.numeroDeContas)

