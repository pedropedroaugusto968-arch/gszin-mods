// --- GSZIN MODS - XIT DISFARÇADO (ANTI-BAN) ---
const config = {
    key: "trick4",
    chanceCabeca: 70, // 70% dos tiros vão na cabeça, 30% no peito
    fov: 50,          // Mira só puxa se estiver perto do inimigo
    smooth: 4         // Puxada suave para parecer jogador real
};

function aplicarXit() {
    setInterval(() => {
        // Sorteio para decidir onde atirar
        let sorteio = Math.floor(Math.random() * 100);
        let alvo;

        if (sorteio < config.chanceCabeca) {
            alvo = 6; // Vai na cabeça
        } else {
            alvo = 4; // Vai no peito (Para disfarçar)
        }

        console.log("GSZIN: Atirando no Bone " + alvo);
        puxarMira(alvo, config.smooth, config.fov);
    }, 50);
}

// Tela de Login
let senha = prompt("DIGITE A SENHA:");
if (senha === config.key) {
    alert("XIT DISFARÇADO ATIVADO!");
    aplicarXit();
}
