const buttonSubmit = document.getElementById("button-submit");

buttonSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  const checkedOne = document.getElementById("concordo1").checked;
  const inputNome = document.getElementById("nome").value;
  const inputEmail = document.getElementById("email").value;
  const inputTextArea = document.getElementById("resposta").value;
  const isCheckNome = inputNome.length;
  const isCheckEmail = inputEmail.length;
  const isCheckResposta = inputTextArea.length;

  if (checkedOne) {
    if (
      isCheckNome < 10 ||
      isCheckNome > 50 ||
      isCheckEmail < 10 ||
      isCheckEmail > 50 ||
      isCheckResposta <= 0 ||
      isCheckResposta > 500
    ) {
      alert("Dados Inválidos");
    } else {
      alert(
        "Dados enviado com sucesso! Obrigado por participar do concurso TrybeTrip"
      );
    }
  } else {
    alert("Por favor, autorize o uso da sua imagem.");
  }
});
