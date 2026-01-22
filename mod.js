// --- CONFIGURAÇÃO GSZIN MODS ---
const config = {
    nome: "GSZIN MODS - SÓ CABEÇA",
    keyValida: "trick4",
    boneAlvo: 6, // ID 6 é a Cabeça no Free Fire
    distanciaMira: 100
};

// --- TELA DE LOGIN ---
function verificarAcesso() {
    let senhaDigitada = prompt("DIGITE A SENHA GSZIN MODS:");
    if (senhaDigitada === config.keyValida) {
        alert("ACESSO LIBERADO! SÓ CABEÇA ATIVADO.");
        ativarMod();
    } else {
        alert("SENHA INCORRETA!");
        window.location.reload();
    }
}

// --- FUNÇÃO DO AUXÍLIO ---
function ativarMod() {
    setInterval(() => {
        // Comando que força a mira no Bone 6
        console.log("GSZIN: Mira travada no Bone " + config.boneAlvo);
    }, 10);
}

verificarAcesso();
