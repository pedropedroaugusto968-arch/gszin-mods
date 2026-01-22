(function() {
    // Criar o Botão Flutuante
    var btn = document.createElement('div');
    btn.innerHTML = 'GS';
    btn.style.position = 'fixed';
    btn.style.top = '20%';
    btn.style.right = '0px';
    btn.style.width = '45px';
    btn.style.height = '45px';
    btn.style.backgroundColor = 'red';
    btn.style.color = 'white';
    btn.style.borderRadius = '50%';
    btn.style.textAlign = 'center';
    btn.style.lineHeight = '45px';
    btn.style.zIndex = '10000';
    btn.style.fontWeight = 'bold';
    btn.style.boxShadow = '0 0 5px #000';
    btn.style.cursor = 'pointer';
    document.body.appendChild(btn);

    // Abrir Painel ao Clicar no Botão
    btn.onclick = function() {
        var menu = prompt("PAINEL GSZIN MODS:\n1 - ATIVAR FULL CABEÇA\n2 - ATIVAR DISFARÇADO (70% HS)\n3 - DESATIVAR");
        
        if (menu == "1") {
            alert("FULL CABEÇA ATIVADO!");
            // Lógica do script aqui
        } else if (menu == "2") {
            alert("MODO DISFARÇADO ATIVADO!");
            // Lógica do script aqui
        } else if (menu == "3") {
            alert("MODS DESATIVADOS!");
        }
    };
})();
