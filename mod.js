(function() {
    // Criar o Painel Principal
    var painel = document.createElement('div');
    painel.id = 'painel-ffh4x';
    painel.style = "position:fixed; top:20%; left:20%; width:350px; height:220px; background:#000; border:2px solid red; border-radius:10px; z-index:10000; display:none; font-family:sans-serif; color:white; overflow:hidden;";
    document.body.appendChild(painel);

    // Cabeçalho do Painel
    painel.innerHTML = `
        <div style="background:red; padding:5px; text-align:center; font-weight:bold; font-size:12px;">PAINEL GSZIN - FF MAX</div>
        <div style="display:flex; height:100%;">
            <div style="width:60px; background:#111; border-right:1px solid #333; display:flex; flex-direction:column; align-items:center; padding-top:10px;">
                <div style="margin-bottom:15px;">🎯</div>
                <div style="margin-bottom:15px;">👁️</div>
                <div style="margin-bottom:15px;">⚙️</div>
            </div>
            <div style="padding:10px; font-size:11px; flex:1;">
                <label><input type="checkbox"> Ativar Aimbot</label><br><br>
                <label><input type="checkbox"> Ignorar deitado</label><br><br>
                <label>Puxada: <select style="background:#222; color:white; border:1px solid red;"><option>Cabeça</option><option>Peito</option></select></label>
            </div>
        </div>
    `;

    // Botão GS Flutuante (Para abrir/fechar o painel)
    var btnGS = document.createElement('div');
    btnGS.innerHTML = 'GS';
    btnGS.style = "position:fixed; top:50%; right:0; width:40px; height:40px; background:red; color:white; border-radius:50%; text-align:center; line-height:40px; z-index:10001; font-weight:bold; cursor:pointer; border:2px solid white;";
    document.body.appendChild(btnGS);

    btnGS.onclick = function() {
        if(painel.style.display === 'none') {
            painel.style.display = 'block';
        } else {
            painel.style.display = 'none';
        }
    };
})();
