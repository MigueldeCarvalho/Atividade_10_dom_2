function mostrarCampo() {
    const opcao = document.getElementById("opcao").value;
    const campoExtra = document.getElementById("campoExtra");
  
    if (opcao === "email") {
      campoExtra.innerHTML = '<label>Email: <input type="email"></label>';
    } else if (opcao === "telefone") {
      campoExtra.innerHTML = '<label>Telefone: <input type="tel"></label>';
    } else {
      campoExtra.innerHTML = "";
    }
  }
  