// --- GSZIN MODS - MENU FLUTUANTE ---
(function() {
    // Criar o Botão Flutuante
    const btn = document.createElement('div');
    btn.innerHTML = 'GS';
    btn.style.position = 'fixed';
    btn.style.bottom = '50%';
    btn.style.right = '0px';
    btn.style.width = '50px';
    btn.style.height = '50px';
    btn.style.backgroundColor = 'red';
    btn.style.color = 'white';
    btn.style.borderRadius = '25px';
    btn.style.textAlign = 'center';
    btn.style.lineHeight = '50px';
    btn.style.zIndex = '9999';
    btn.style.fontWeight = 'bold';
    btn.style.boxShadow = '0 0 10px black';
    document.body.appendChild(btn);

    // Função ao clicar no botão
    btn.onclick = function() {
        const opcap = prompt("PAINEL GSZIN MODS:\n1 - FULL CABEÇA (BONE 6)\n2 - DISFARÇADO (70% HS)\n3 - DESATIVAR TUDO");
        
        if (opcap === "1") {
            alert("MODO FULL CABEÇA ATIVADO!");
            localStorage.setItem('gs_bone', '6');
            localStorage.setItem('gs_smooth', '0');
        } else if (opcap === "2") {
            alert("MODO DISFARÇADO ATIVADO!");
            localStorage.setItem('gs_bone', 'random');
            localStorage.setItem('gs_smooth', '5');
        } else if (opcap === "3") {
            alert("XIT DESATIVADO");
            localStorage.removeItem('gs_bone');
        }
    };
})();
