document.getElementById('botaoMenu').addEventListener('click', function() {
    const menu = document.getElementById('menuLateral');
    const conteudo = document.getElementById('conteudoPrincipal');
    
    if (menu.classList.contains('menu-oculto')) {
        menu.classList.remove('menu-oculto');
        document.body.classList.add('menu-aberto');
    } else {
        menu.classList.add('menu-oculto');
        document.body.classList.remove('menu-aberto');
    }
});