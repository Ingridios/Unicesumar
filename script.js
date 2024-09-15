// Prompt de boas-vindas e solicitação do nome
let nome = prompt("Bem-vindo! Qual é o seu nome?");

// Verificação se o nome foi inserido
if (nome) {
    alert("Olá, " + nome + "! Que bom ter você aqui.");

    // Pergunta se gostou do site
    let gostouDoSite = prompt("Você espera gostar do site? Responda com 'sim' ou 'não'.");

    // Verificação da resposta sobre o site
    if (gostouDoSite.toLowerCase() === "sim") {
        alert("Espero que goste!");
    } else if (gostouDoSite.toLowerCase() === "não") {
        alert("Que pena! Agradecemos o seu feedback.");
    } else {
        alert("Resposta inválida. Por favor, responda apenas com 'sim' ou 'não'.");
    }
}