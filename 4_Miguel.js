function validarCPF(event) {
    event.preventDefault();
    const cpf = document.getElementById("cpf").value.replace(/\D/g, "");
    const msg = document.getElementById("msg");
  
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
      msg.innerText = "CPF inválido!";
      return;
    }
  
    alert("CPF válido! Enviado com sucesso.");
    msg.innerText = "";
  }