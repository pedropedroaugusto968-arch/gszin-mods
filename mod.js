function iniciarPainel() {
    // Verifica se o painel já existe para não duplicar
    if (document.getElementById('gs-float')) return;

    var btn = document.createElement('div');
    btn.id = 'gs-float';
    btn.innerHTML = 'GS';
    btn.style = "position:fixed; top:45%; right:0; width:45px; height:45px; background:red; color:white; border-radius:50%; text-align:center; line-height:45px; z-index:10000; font-weight:bold; border:2px solid white; cursor:pointer;";
    document.body.appendChild(btn);

    alert("PAINEL GS INJETADO COM SUCESSO!");

    btn.onclick = function() {
        var menu = prompt("MENU GSZIN:\n1 - FULL HS\n2 - DISFARÇADO\n3 - SAIR");
        if(menu == "1") alert("MODO FULL HS ATIVO!");
        if(menu == "2") alert("MODO DISFARÇADO ATIVO!");
    };
}
