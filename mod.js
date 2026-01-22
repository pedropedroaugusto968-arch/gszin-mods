(function() {
    // Criar o Botão Flutuante Discreto
    var btn = document.createElement('div');
    btn.innerHTML = 'GS';
    btn.style = "position:fixed; top:40%; right:0; width:40px; height:40px; background:rgba(0,0,0,0.5); color:white; border-radius:50% 0 0 50%; text-align:center; line-height:40px; z-index:10000; font-weight:bold; cursor:pointer;";
    document.body.appendChild(btn);

    // Menu do Painel
    btn.onclick = function() {
        var op = prompt("CALCULADORA MODS:\n1 - INJETAR DISFARÇADO\n2 - INJETAR FULL HS\n3 - LIMPAR");
        if(op == "1") {
            alert("SISTEMA DISFARÇADO ATIVO!");
        } else if(op == "2") {
            alert("FULL HS ATIVO!");
        }
    };
})();
