// --- GSZIN MODS - XIT FULL CABEÇA ---
const xitConfig = {
    checkKey: "trick4",
    aimbot: true,
    boneAlvo: 6,      // TRAVA NA CABEÇA
    suavidade: 0,     // 0 = PUXADA INSTANTÂNEA (MUITO FORTE)
    fov: 360          // PEGA O INIMIGO EM QUALQUER LUGAR DA TELA
};

function iniciarXit() {
    let key = prompt("DIGITE A KEY DO XIT:");
    if (key === xitConfig.checkKey) {
        alert("XIT ATIVADO - SÓ CAPA!");
        executarAimbot();
    } else {
        alert("KEY INVÁLIDA!");
        window.location.reload();
    }
}

function executarAimbot() {
    setInterval(() => {
        // Força a mira a ir para a cabeça (ID 6)
        memory.write("AimbotBone", xitConfig.boneAlvo);
        memory.write("AimSpeed", xitConfig.suavidade);
        console.log("XIT: Mira travada na cabeça");
    }, 1); // Roda 1000 vezes por segundo para não escapar
}

iniciarXit();
