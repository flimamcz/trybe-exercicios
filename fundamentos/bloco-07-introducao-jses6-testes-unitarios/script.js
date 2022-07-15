// questao 1 - Crie uma função que receba um número e retorne seu fatorial.

// const fatorial = (number) => {
//     let fatorial = 1
//     for(let index = 1; index <= number; index += 1){
//         fatorial *= index
//     }
//     return fatorial
// }
// console.log(fatorial(20))

// questao 2 - Crie uma função que receba uma frase e retorne a maior palavra.

// const largerPhrase = (phrase) => {
//   const phraseSplit = phrase.split(' ');
//   let largerP = '';

//   for (word of phraseSplit) {
//     word.trim().length > largerP.length ? (largerP = word.trim()) : null;
//   }

//   return largerP;
// };

// console.log(largerPhrase('Filipe Lima Azevedo'));


// questao 3 -  Crie uma página com um contador de clique

// const counterElement = document.getElementById('counter')
// const increment = document.getElementById('increment')
// const decrement = document.getElementById('decrement')
// let counter = 0
// decrement.disabled = true

// function incrementCounter(event){
//   event.preventDefault()
//   counter +=1
//   counterElement.innerText = counter
//   if(counter > 0){
//     decrement.disabled = false
//   }
// }

// function decrementCounter(event){
//   event.preventDefault()
//   counter -=1
//   counterElement.innerText = counter
//   if(counter <= 0){
//     decrement.disabled = true
//   }
// }

// increment.addEventListener('click', incrementCounter)
// decrement.addEventListener('click', decrementCounter)

// questao 4 - Crie duas funções JavaScript
// Função 1: Escreva uma função que substitua a letra 'x' em uma frase.
// Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.

function insertName(name){
  const phrase = `Tryber ${name} aqui!`
  return phrase
}

function returnString(){
  const skills = ['HTML', 'CSS', 'JS']
  return `${insertName('Filipe')}
  
  Minhas principais habilidades são:
  ${skills[0]}
  ${skills[1]}
  ${skills[2]}
  `
}

console.log(returnString())