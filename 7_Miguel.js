const caixa1 = document.getElementById("caixa1");
const msg = document.getElementById("msg");

caixa1.addEventListener("focus", () => {
  msg.innerText = "Primeira caixa ativada";
});

caixa1.addEventListener("blur", () => {
  msg.innerText = "Perdeu o foco";
});