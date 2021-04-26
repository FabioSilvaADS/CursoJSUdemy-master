const nome1 = 'Fabio';
const nome2 = "Fabio";
const nome3 = `Fabio`;
let nomeAluno; // Undefined -> não aponta pra lugar nenhum na memória
let sobrenome = null // Nulo -> não aponta pra lugar nenhum na memória

console.log(typeof nome2) // Para saber o tipo da variavel.

const a = [1, 2];
const b = a;

console.log(a, b)
b.push(3) // adiciona o valor na
console.log(a, b)