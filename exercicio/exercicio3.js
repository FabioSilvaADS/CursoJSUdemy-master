let varA = 'A';
let varB = 'B';
let varC = 'C';
let varAux;

// Primeira maneira de resolver.
[varA, varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC);

let varA2 = 'A';
let varB2 = 'B';
let varC2 = 'C';
let varAux2;

// Segunda maneira de resolver.
varAux2 = varA2
varA2 = varB2;
varB2 = varC2;
varC2 = varAux2;
console.log(varA2, varB2, varC2);