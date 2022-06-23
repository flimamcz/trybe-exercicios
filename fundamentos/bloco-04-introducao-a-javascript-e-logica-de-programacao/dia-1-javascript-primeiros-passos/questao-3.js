// Questão 3
//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const numberOne = 20;
const numberTwo = 23;
const numberThree = 10;

if (numberOne > numberTwo && numberOne > numberThree) {
  console.log("numberOne é o maior");
} else if (numberTwo > numberOne && numberTwo > numberThree) {
  console.log("numberTwo é o maior");
} else {
  console.log("numberThree é o maior");
}
