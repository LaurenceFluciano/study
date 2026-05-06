function pegarQuestoes() {
    const response = fetch("mock.json")
    return response.then(data => data.json());
}


function init() {
    const dados = pegarQuestoes();

    dados.then(resultado => {
        localStorage.setItem('questoes', JSON.stringify(resultado.questoes))
    }).finally(() => {
        montarQuestao();
    })

}

let questaoAtual = {}

const estadoUsuario = {
    idQuestaoAtual: 0,
    idSelecionado: null,
    idAnterior: null
}

function montarEnunciado(enunciado) {
    const elemento = document.querySelector('.enunciado__questao');

    document.querySelector('.enunciado_numero').innerText = estadoUsuario.idQuestaoAtual + 1 + ')';

    elemento.innerText = enunciado;

    elemento.classList.add('enunciado__questao');
}

function montarAlternativas(alternativas) {
    const pai = document.querySelector('.alternativas');
    pai.innerHTML = "";

    for (let [indice, alternativa] of alternativas.entries()) {
        const elemento = document.createElement('span');

        elemento.innerText = alternativa;

        elemento.classList.add('alternativas__item');
        elemento.setAttribute('id', indice+1);
        
        elemento.addEventListener('click', selecionarAlternativa);

        pai.appendChild(elemento);
    }
}

function montarQuestao() {
    const questoes = JSON.parse(localStorage.getItem('questoes'));

    if (questoes.length > estadoUsuario.idQuestaoAtual) { 
        questaoAtual = questoes[estadoUsuario.idQuestaoAtual];
        montarEnunciado(questaoAtual.enunciado);
        montarAlternativas(questaoAtual.alternativas);
        return
    } 

    alert("Atividade completa!")
}


function selecionarAlternativa(event) {
    const elementoClicado = event.currentTarget;

    estadoUsuario.idAnterior = estadoUsuario.idSelecionado;
    estadoUsuario.idSelecionado = elementoClicado.getAttribute('id');
    elementoClicado.classList.add('alternativas__item--selecionado');

    if (estadoUsuario.idAnterior != null) {
        document.getElementById(estadoUsuario.idAnterior).classList.remove('alternativas__item--selecionado');
    }

    botaoEnvio()
}

/* BOTOES */

function criarGerenciadorBotao(callback) {
        const botao = document.getElementById("botao")

        const state = {
            currentFunction: null
        }

        const init = () => {
            botao.classList.remove("botao--desativado")
            botao.classList.add("botao--resposta");
            state.currentFunction = responderQuestao
        }


        const  responderQuestao = () => {
            botao.classList.remove("botao--resposta");
            
            if (questaoAtual.resposta == estadoUsuario.idSelecionado)
                alert("Alternativa correta!")
            else 
                alert("Alternativa incorreta")

            botao.innerText = "Próximo";
            state.currentFunction = proximaQuestao
        }

        const proximaQuestao = () => {
            estadoUsuario.idQuestaoAtual += 1;
            callback();
            botao.innerText = "Responder";
            botao.classList.add("botao--desativado")
            state.currentFunction = init
        }

        state.currentFunction = init;

        botao.onclick = () => state.currentFunction();

        return state.currentFunction
}


const botaoEnvio = criarGerenciadorBotao(montarQuestao);

init()