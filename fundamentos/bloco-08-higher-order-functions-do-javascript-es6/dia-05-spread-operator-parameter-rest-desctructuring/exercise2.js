const sum = (...numbers) => {
  return numbers.reduce((acc, number) => acc + number);
};

sum(1, 6, 8, 989, 5);
