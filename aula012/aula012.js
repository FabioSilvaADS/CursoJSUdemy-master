let umaString = 'Um "texto"';

console.log(umaString.concat(' em um ', 'lindo dia.'))
console.log(`${umaString} em um lindo dia`)

console.log(umaString.replace(/Um/, 'outra'));

//Verifica quantos caracteres tem
console.log(umaString.length);

console.log(umaString.slice(0, 5));