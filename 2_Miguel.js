function mostrarcampo(){
    const nome = document.getElementById("nome").value;
    const extra = document.getElementById("extra");
    extra.style.display = nome.trim() !== "" ? "block" : "none";
}