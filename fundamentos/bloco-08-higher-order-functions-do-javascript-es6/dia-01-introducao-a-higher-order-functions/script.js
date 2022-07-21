const newHiring = (string) => {
    return {
        fullName: string,
        email: `${string.replace(' ', '_')}@trybe.com`
    }
}

const newEmployees = (hiring) => {
  const employees = {
    id1: hiring('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: hiring('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: hiring('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

console.log(newEmployees(newHiring))
