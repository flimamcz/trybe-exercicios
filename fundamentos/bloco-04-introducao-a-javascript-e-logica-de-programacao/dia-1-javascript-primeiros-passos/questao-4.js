// Questão 4
//Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const value = 20;

switch (true) {
  case value > 0:
    console.log("Positive");
    break;

  case value < 0:
    console.log("Negative");
    break;

  default:
    console.log("Zero");
}
