// --- CONFIGURAÇÃO GSZIN MODS ---
const SENHA_MESTRA = "trick4"; // Essa é a senha que o cliente deve digitar

// --- TELA DE LOGIN ---
function mostrarLogin() {
    let senhaDigitada = prompt("GSZIN MODS - INSIRA A SENHA:");

    if (senhaDigitada === SENHA_MESTRA) {
        alert("LOGIN REALIZADO! MOD SÓ CABEÇA ATIVADO.");
        ativarAimbot();
    } else {
        alert("SENHA INCORRETA!");
        window.location.reload(); // Recarrega para pedir a senha de novo
    }
}

// --- FUNÇÃO DO XIT ---
function ativarAimbot() {
    console.log("Aimbot Cabeça (Bone 6) Rodando...");
    // Aqui fica a lógica que trava a mira no Bone 6
}

mostrarLogin();
