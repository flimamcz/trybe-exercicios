const n1 = 9;
const n2 = 5;
const n3 = 7;

const numberEven = n1 || n2 || n3 % 2 === 0;

if (n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 == 0) {
  console.log(true);
} else {
  console.log(false);
};
