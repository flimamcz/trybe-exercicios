function verifyIsNumber(value1, value2) {
  if (isNaN(value1) || isNaN(value2) || value1 === 0 || value2 === 0) {
    throw new Error('Erro! Informe dois números válidos!');
  }
}

function sum() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  const resultElement = document.getElementById('result');
  const result = Number(value1) + Number(value2);

  try {
    verifyIsNumber(Number(value1), Number(value2));
    resultElement.innerText = `Resultado: ${result}`;
    document.getElementById('value1').focus();
  } catch (error) {
    resultElement.innerText = error.message;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
};
