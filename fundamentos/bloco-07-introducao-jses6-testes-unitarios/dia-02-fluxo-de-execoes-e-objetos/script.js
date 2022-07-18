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
  let sumStudents = 0;

  Object.keys(lessons).forEach((item) => {
    arrayObj.push(lessons[item]);
  });

  for (lesson of arrayObj) {
    sumStudents += lesson.numeroEstudantes;
  }

  return `Total de estudantes: ${sumStudents}`;
}
counterStudents(allLessons);

//Crie uma função que obtenha o valor da chave de acordo com o seu índice no objeto. Por exemplo:

function getValueByNumberObj(obj, number) {
  return Object.values(obj)[2];
}
getValueByNumberObj(lesson1, 0);

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave

function verifyPair(object, key, value) {
  const isKey = Object.entries(object);
  const arrayIs = [];
  for (let item of isKey) {
    if (item.indexOf(key) !== -1) {
      arrayIs.push(item);
    }
  }

  return arrayIs[0][1] === value;
}
verifyPair(lesson1, 'professor', 'Maria Clara')


// BONUS: 🚀 Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

function studentsLessonMath(objAll){
  let arrayObj = [];
  let sumStudentsLessons = 0;
  Object.keys(objAll).forEach((item) => {
    arrayObj.push(objAll[item]);
  });

  for (let lesson of arrayObj) {
    if (lesson.materia === 'Matemática') {
      sumStudentsLessons += lesson.numeroEstudantes
    }
  }

  return sumStudentsLessons
}

studentsLessonMath(allLessons)

//  Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5


function createReport(obj, teacher) {
  let arrayObj = [];
  let reportObj = {
    professor: '',
    aulas: [],
    estudantes: 0
  }

  Object.keys(obj).forEach((item) => {
    arrayObj.push(obj[item]);
  });

  for (let lesson of arrayObj) {
    if (lesson.professor === teacher) {
      reportObj.estudantes += lesson.numeroEstudantes
      reportObj.professor = teacher
      reportObj.aulas.push(lesson.materia)
    }
  }

  console.log(reportObj)

}

createReport(allLessons, 'Maria Clara')