const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addTurnNight(obj, key, value) {
  obj.turno = value;
  return obj;
}

addTurnNight(lesson2, 'turno', 'noite');

function listKeysObj(obj) {
  return Object.keys(obj);
}

listKeysObj(lesson2);

function lengthObj(obj) {
  const lengthObject = Object.keys(obj);
  return lengthObject.length;
}

lengthObj(lesson1);

const allLessons = {
  lesson1: Object.assign({}, lesson1),
  lesson2: Object.assign({}, lesson2),
  lesson3: Object.assign({}, lesson3),
};

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

function counterStudents(lessons) {
  let arrayObj = [];
  let sumStudents = 0

  Object.keys(lessons).forEach((item) => {
    arrayObj.push(lessons[item]);
  });

  for (lesson of arrayObj) {
    sumStudents += lesson.numeroEstudantes
  }
  
  return `Total de estudantes: ${sumStudents}`
}
counterStudents(allLessons)

//Crie uma função que obtenha o valor da chave de acordo com o seu índice no objeto. Por exemplo:

function getValueByNumberObj(obj, number){
  return obj[number]
}

getValueByNumberObj(lesson1, 0)

console.log(lesson1[0])