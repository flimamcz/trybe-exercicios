const { getAnswers, correctAnswers } = require('./exercicio-03');

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


describe('Verifica o funcionamento correto da função getAnswers', () => {
    it('Verifica se getAnswers é uma função', () => {
        expect(typeof getAnswers).toEqual('function')
    });

    it('Verifica se retornar 5 pontos ao passar os arrays definidos', () => {
        expect(getAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, correctAnswers)).toEqual(5)
    })

    it('Verifica se retornar erro ao passar arrays vazios', () => {
        expect(getAnswers([], [], correctAnswers)).toBeUndefined()
    })
})