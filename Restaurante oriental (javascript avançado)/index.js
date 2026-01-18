const contador = document.getElementById("contador");
const texto = document.getElementById("texto-oferta");

const agora = new Date();
const meiaNoite = new Date();
meiaNoite.setHours(24, 0, 0, 0);

function atualizar() {
  const agora = new Date();
  const diferenca = meiaNoite - agora;

  if (diferenca <= 0) {
    contador.innerText = "00:00:00";
    texto.innerText = "As ofertas exclusivas terminaram em!";
    return;
  }

  const horas = String(Math.floor(diferenca / 3600000)).padStart(2, "0");
  const minutos = String(Math.floor((diferenca % 3600000) / 60000)).padStart(2, "0");
  const segundos = String(Math.floor((diferenca % 60000) / 1000)).padStart(2, "0");

  contador.innerText = `${horas}:${minutos}:${segundos}`;
  texto.innerText = `As ofertas exclusivas terminam em: ${horas}:${minutos}:${segundos}`;
}

setInterval(atualizar, 1000);
