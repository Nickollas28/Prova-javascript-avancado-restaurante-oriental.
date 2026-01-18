const form = document.getElementById("formulario");
const emailInput = document.getElementById("email");
const termos = document.getElementById("termos");
const erroTermos = document.getElementById("erro-termos");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let email = emailInput.value;

  if (!email) {
    email = prompt("Digite seu e-mail");

    if (!email) {
      mensagem.innerText = "Erro: e-mail obrigatório.";
      return;
    }
  }

  if (
    email.length < 10 ||
    email.split("@").length !== 2 ||
    !email.split("@")[1].includes(".")
  ) {
    mensagem.innerText = "E-mail inválido.";
    return;
  }

  if (!termos.checked) {
    termos.parentElement.style.backgroundColor = "#ffcccc";
    erroTermos.innerText = "Você precisa aceitar os termos de uso";
    return;
  }

  erroTermos.innerText = "";
  mensagem.innerText = `E-mail "${email}" cadastrado com sucesso!`;
});
