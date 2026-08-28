const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

async function iniciarJogo() {
    const palavras = [
        { palavra: "BACKEND", dica: "A lógica que roda nos bastidores do servidor" }, 
        { palavra: "NODEJS", dica: "Ambiente de execução JavaScript" },
        { palavra: "JAVASCRIPT", dica: "Linguagem de programação da WEB" },
        { palavra: "express", dica: "Framework minimalista para criar APIs" }, 
        { palavra: "SERVIDOR", dica: "Computador que fornece serviços para outros computadores"},
        { palavra: "TERMINAL", dica: "Interface de linha de comando" }
     ];

    const indiceAleatorio = Math.floor(Math.random() * palavras.length);
    const palavraSecreta = palavras[indiceAleatorio].palavra;
    const dica = palavras[indiceAleatorio].dica;

    let letrasDescobertas = Array(palavraSecreta.length).fill("_");
    let jogoRodando = true;

    let vidas = 6; 

   

    while(jogoRodando) {
        console.log ("=== Bem-vindo ao jogo da Forca ===");
        console.log(`\nVidas restantes: <3 ${vidas}`);
        console.log(`\nDICA: ${dica}`);

       console.log(`\nPalavra atual: ${letrasDescobertas.join(" ")}`); 

        const chute = (await rl.question("Digite uma letra: ")).toUpperCase();
        let acertou = false;

        for(let i = 0; i < palavraSecreta.length; i++) {
            if(palavraSecreta[i] === chute) {
                letrasDescobertas[i] = chute;
                acertou = true;
            }
        } 
        
        if(!acertou) {
            console.log("[X] Letra incorreta!");
            vidas--;

        }

        if(!letrasDescobertas.includes("_")) {
            console.log(`\n[VITORIA] Parabens! Você descobriu a palavra: ${palavraSecreta}`);
            jogoRodando = false;
        }

        if(vidas === 0) {
            console.log(`\n[FIM DE JOGO] A palavra correta era: ${palavraSecreta}`);
            jogoRodando = false
        }
    }

    rl.close();
}

iniciarJogo(); 