function checkWin(number, numberSort) {
    console.log(number, numberSort)
    if(number === numberSort) {
        return 'Parabéns você ganhou!'
    }
    return 'Tente Novamente!'
}

function generateSort(number, func){
    const numberAleatory = Math.floor(Math.random() * 5)
    return func(number, numberAleatory)
}

console.log(generateSort(2, checkWin))