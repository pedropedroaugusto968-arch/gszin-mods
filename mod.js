(function() {
    // Criar Botão Flutuante
    var btn = document.createElement('div');
    btn.id = 'gs-float';
    btn.innerHTML = 'GS';
    btn.style = "position:fixed; top:20%; right:0; width:50px; height:50px; background:red; color:white; border-radius:50%; text-align:center; line-height:50px; cursor:pointer; z-index:10000; font-weight:bold; border:2px solid white;";
    document.body.appendChild(btn);

    // Abrir Painel ao clicar
    btn.onclick = function() {
        var menu = prompt("PAINEL GSZIN:\n1 - FULL CABEÇA (6)\n2 - DISFARÇADO (RANDOM)\n3 - DESATIVAR");
        if (menu == "1") {
            alert("SÓ CABEÇA ATIVADO!");
            // Aqui entra a lógica do Bone 6
        } else if (menu == "2") {
            alert("MODO DISFARÇADO ATIVADO!");
            // Aqui entra a lógica de alternar bone
        } else if (menu == "3") {
            alert("MODS DESATIVADOS");
        }
    };
})();
