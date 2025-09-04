document.getElementById("meuForm").addEventListener("submit", function(event) {
    event.preventDefault();
    if (document.getElementById("nome").value && document.getElementById("email").value) {
      document.getElementById("msg").innerText = "Formulário enviado com sucesso!";
    } else {
      document.getElementById("msg").innerText = "Preencha todos os campos obrigatórios!";
    }
  });