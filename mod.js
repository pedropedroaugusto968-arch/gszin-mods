// --- CONFIGURAÇÃO GSZIN MODS ---
const config = {
    nome: "GSZIN MODS - SÓ CABEÇA",
    keyValida: "trick4",
    boneAlvo: 6, // 6 = Cabeça no Free Fire
    distanciaMira: 100 // Raio de alcance do auxílio
};

// --- FUNÇÃO DE LOGIN ---
function verificarAcesso(keyDigitada) {
    if (keyDigitada === config.keyValida) {
        console.log("Acesso Liberado: " + config.nome);
        ativarAimbot();
    } else {
        alert("Key Incorreta ou Expirada!");
    }
}

// --- SCRIPT DE AUXÍLIO DE MIRA (SÓ CABEÇA) ---
function ativarAimbot() {
    // Esse script comanda o motor do jogo para travar no Bone 6
    setInterval(() => {
        let inimigo = obterInimigoMaisProximo();
        if (inimigo) {
            // Trava a mira na cabeça (Bone 6)
            fixarMiraNoBone(inimigo, config.boneAlvo);
        }
    }, 10); // Roda a cada 10ms para não desgrudar da cabeça
}

console.log("Script GSZIN carregado via GitHub com sucesso!");
