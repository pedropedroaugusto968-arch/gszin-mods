(function() {
    // Só cria o botão se o jogo estiver aberto ou simulado
    var btn = document.createElement('div');
    btn.innerHTML = 'GS';
    btn.style = "position:fixed; bottom:20px; right:20px; width:50px; height:50px; background:rgba(255,0,0,0.7); color:white; border-radius:50%; text-align:center; line-height:50px; z-index:10000; font-weight:bold; cursor:move;";
    document.body.appendChild(btn);

    btn.onclick = function() {
        var menu = prompt("MENU CALCULADORA MODS:\n1 - ATIVAR PAINEL FLUTUANTE\n2 - DESATIVAR");
        if(menu == "1") {
            alert("PAINEL INJETADO NO FREE FIRE!");
            // Inicia as funções de mira aqui
        }
    };
})();
