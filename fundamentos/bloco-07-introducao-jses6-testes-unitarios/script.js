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

// const largerPhrase = (phrase) => {
//   const phraseSplit = phrase.split(' ');
//   let largerP = '';

//   for (word of phraseSplit) {
//     word.trim().length > largerP.length ? (largerP = word.trim()) : null;
//   }

//   return largerP;
// };

// console.log(largerPhrase('Filipe Lima Azevedo'));


// questao 3

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

// questao 4