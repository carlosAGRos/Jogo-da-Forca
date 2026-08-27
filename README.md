# 🎮 Jogo da Forca

Um jogo da forca clássico desenvolvido em **JavaScript**, rodando diretamente no terminal com Node.js. O jogador precisa adivinhar uma palavra secreta, letra por letra, antes que suas tentativas acabem.

## 📋 Sobre o projeto

Este projeto foi desenvolvido como forma de praticar lógica de programação, manipulação de strings e arrays, além do uso de interfaces de entrada e saída assíncronas no ambiente Node.js (`readline/promises`).

O jogo sorteia aleatoriamente uma palavra de uma lista pré-definida e exibe o progresso do jogador a cada rodada, revelando as letras corretas e descontando vidas a cada erro.

## ⚙️ Funcionalidades

- Sorteio aleatório da palavra secreta a cada partida
- Sistema de vidas (6 tentativas)
- Feedback visual do progresso da palavra (`_ _ _ _`)
- Validação de letras corretas e incorretas
- Mensagens de vitória e derrota ao final do jogo
- Interação via terminal, com entrada assíncrona do usuário

## 🚀 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- Módulo nativo `readline/promises`

## 📦 Como executar o projeto

Pré-requisitos: ter o [Node.js](https://nodejs.org/) instalado (versão 18 ou superior recomendada, devido ao uso do `readline/promises`).

```bash
# Clone este repositório
git clone https://github.com/carlosAGRos/Jogo-da-Forca

# Acesse a pasta do projeto
cd jogo-da-forca

# Execute o jogo
node index.js
```



## 🕹️ Como jogar

1. Ao iniciar, o jogo sorteia uma palavra secreta e exibe espaços em branco correspondentes ao número de letras.
2. Digite uma letra por vez quando solicitado.
3. Se a letra existir na palavra, ela será revelada em sua respectiva posição.
4. Se a letra não existir, uma vida é perdida.
5. O jogo termina quando a palavra é totalmente descoberta (vitória) ou quando as vidas se esgotam (derrota).

## 📁 Estrutura do projeto