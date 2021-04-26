const nome = 'Fabio';
const sobrenome = 'Silva';
const idade = 35;
const peso = 147;
const alturaEmM = 1.86;
let imc = peso / (alturaEmM * alturaEmM);
const anoAtual = 2021;
let anoNascimento = anoAtual - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);