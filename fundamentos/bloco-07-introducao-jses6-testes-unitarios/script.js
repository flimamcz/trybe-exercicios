// questao 1

// const fatorial = (number) => {
//     let fatorial = 1
//     for(let index = 1; index <= number; index += 1){
//         fatorial *= index
//     }
//     return fatorial
// }
// console.log(fatorial(20))

// questao 2

const largerPhrase = (phrase) => {
  const phraseSplit = phrase.split(' ');
  let largerP = '';

  for (word of phraseSplit) {
    word.trim().length > largerP.length ? (largerP = word.trim()) : null;
  }

  return largerP;
};

console.log(largerPhrase('Filipe Lima Azevedo'));