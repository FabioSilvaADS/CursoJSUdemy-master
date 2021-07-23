let num1 = 0.7;
let num2 = 0.1;

console.log(num1 + num2);
console.log(num1.toString() + num2)
console.log(typeof num1)

// Apresentar o número de forma Binaria.
console.log(num1.toString(2));

// Arredonda o valor com casas decimais pedidas no ().
console.log(num1.toFixed(2));

// Verifica se o número é inteiro, se for retorna True.
console.log(Number.isInteger(num1));

let temp = num1 * 'Ola';
console.log(Number.isNaN(temp));