let numbers = [];

for (let index = 2; index < 50; index += 1) {
  if (index % 2 === 1) {
    numbers.push(index);
  }
}

function returnNumberMax(array) {
  return Math.max(...array);
}

returnNumberMax(numbers);
