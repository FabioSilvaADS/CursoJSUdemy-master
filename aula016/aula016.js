const alunos = ['Fabio', 'Géssica', 'Maria'];
const removido = alunos.pop(); // Mostra o item removido.
alunos[0] = 'Caio'; // Alterando o indice 0
alunos[3] = 'Cassiano'; // Altera  a Array


alunos.push('Lourdes'); // Adicionando mais um indice no final do Array .
alunos.unshift('Katia'); // Adiciona no começo.
alunos.pop(); // Remove o último
alunos.shift(); // Remove o primeiro.

console.log(alunos.slice(0, 2)); // Pega um determinado indice do Array.
console.log(alunos);
console.log(alunos[1]); //Acessando um indice do Array.
console.log(alunos.length); //Sabendo quando indice do Array.
console.log(removido);