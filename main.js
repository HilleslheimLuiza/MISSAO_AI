const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector("texto-resultado");

const perguntas = [
    {
        enunciado: "pergunta 1",
        alternativas:["alternativa 1", "alternativa 2"]
    },
    {
        enunciado: "pergunta 2",
        alternativas:["alternativa 1", "alternativa 2"]
    },
    {
        enunciado: "pergunta 3",
        alternativas:["alternativa 1", "alternativa 2"]
    },
]
let atual = 0;
let perguntaAtual;

function mostraPerguntas(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent="";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativa){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
mostraPerguntas();