const sum = (...numbers) => {
  return numbers.reduce((acc, number) => acc + number)
}

sum(2, 3, 4)