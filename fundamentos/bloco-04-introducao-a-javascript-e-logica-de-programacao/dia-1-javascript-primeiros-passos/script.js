const salario = 5000
let aliquotaINSS= salario * 0.08
let novoSalario = 0

if(salario <= 1556.94) {
    novoSalario = salario - aliquotaINSS.toFixed(2)
} else if (salario >= 1556.95 && salario <= 2594.92){
    aliquotaINSS = salario * 0.09
    novoSalario = salario - aliquotaINSS.toFixed(2)
} else if (salario >= 2594.93 && salario <= 5189.82){
    aliquotaINSS = salario * 0.11
    novoSalario = salario - aliquotaINSS.toFixed(2)
} else {
    novoSalario = salario - 570.88
}

let aliquotaIR = (novoSalario * 0.075) - 142.80

if (novoSalario <= 1903.98){
    console.log('Você está isento do IR')
} else if(novoSalario >= 1903.99 && novoSalario <= 2826.65){
    novoSalario = novoSalario - aliquotaIR.toFixed(2)
} else if (novoSalario >= 2826.66 && novoSalario <= 3751.05){
    aliquotaIR = (novoSalario * 0.15) - 354.80
    novoSalario = novoSalario - aliquotaIR.toFixed(2)
} else if (novoSalario >= 3751.06 && novoSalario <= 4664.68){
    aliquotaIR = (novoSalario * 0.225) - 636.13
    novoSalario = novoSalario - aliquotaIR.toFixed(2)
} else {
    aliquotaIR = (novoSalario * 0.275) - 869.36
    novoSalario = novoSalario - aliquotaIR.toFixed(2)
}

console.log('Salário bruto pós desconto do [IR & INSS]: ', novoSalario)