let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27, 90];

// 1 Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
// for(let count = 0; count < numbers.length; count++){
//     console.log(numbers[count])
// }

// 2 Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// let total = Number();
// for(let count = 0; count < numbers.length; count++){
//     total += numbers[count]
// }
// console.log(total)

// 3 Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// let count = Number()
// let total = Number();
// for (let index = 0; index < numbers.length; index++){
//     total += numbers[index]
//     count++
// }
// const media = total / count

// console.log(media)

// 4 Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// let count = Number()
// let total = Number();
// for (let index = 0; index < numbers.length; index++){
//     total += numbers[index]
//     count++
// }
// const media = total / count
// if(media > 20){
//     console.log('Média maior que 20')
// } else {
//     console.log('valor menor ou igual a 20')
// }


// 5 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;

// let maior = Number();
// for (let index = 0; index < numbers.length; index++) {
//     for(let count = 0; count < numbers.length; count++){
//         if(numbers[count] > maior){
//             maior = numbers[count]
//         }
//     }
// }

// 6 Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// let totalOdd = 0
// for(let index = 0; index < numbers.length; index++){
//     if(numbers[index] % 2 === 0){
//         totalOdd++
//     }
// }


// 7 Utilizando for, descubra qual o menor valor contido no array e imprima-o;

// let menor = 100

// for(let index = 0; index < numbers.length; index++){
//     for (let count = 0; count < numbers.length; count++){
//         if(numbers[count] < menor){
//             menor = numbers[count]
//         }
//     }
// }
// console.log(menor)

//Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let array = []
for(let count = 1; count < 26; count++){
    array.push(count)
}

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
for(let index = 0; index < array.length; index++){
    console.log(array[index] / 2)
}