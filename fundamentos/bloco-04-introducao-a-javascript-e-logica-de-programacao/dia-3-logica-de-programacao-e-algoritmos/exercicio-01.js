function returnFactorial(factorial){
    let result = factorial
    for (let count = 1; count < factorial; count += 1){
        result *= count
    }
    return result
}
returnFactorial(4)