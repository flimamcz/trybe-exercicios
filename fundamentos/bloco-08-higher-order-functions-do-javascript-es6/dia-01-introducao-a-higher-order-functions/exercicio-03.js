const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const correctAnswers = (arrayAnswers, arrayStudent) => {
    let sumNota = 0

    for (let index = 0; index < arrayStudent.length; index += 1) {
        if(arrayStudent[index] === arrayAnswers[index]) {
            sumNota += 1
        } else if (arrayStudent[index] === 'N.A') {
            sumNota += 0
        } else {
            sumNota -= 0.5
        }
    }
    return sumNota
}

const getAnswers = (arrayAnswers, arrayStudent, comparation) => {
    if(arrayAnswers.length <= 0 && arrayStudent.length <= 0) return undefined
    return comparation(arrayAnswers, arrayStudent)
}

getAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, correctAnswers)

module.exports = {getAnswers, correctAnswers}