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
        elemento.setAttribute('onClick', 'selecionarAlternativa(this)');        

        pai.appendChild(elemento);
    }
}

function montarQuestao() {
    const questoes = JSON.parse(localStorage.getItem('questoes'));

    questaoAtual = questoes[estadoUsuario.idQuestaoAtual];

    montarEnunciado(questaoAtual.enunciado);
    montarAlternativas(questaoAtual.alternativas);
}


function selecionarAlternativa(elemento) {
    estadoUsuario.idAnterior = estadoUsuario.idSelecionado;
    estadoUsuario.idSelecionado = elemento.getAttribute('id');
    elemento.classList.add('alternativas__item--selecionado');

    if (estadoUsuario.idAnterior != null) {
        document.getElementById(estadoUsuario.idAnterior).classList.remove('alternativas__item--selecionado');
    }

    document.querySelector('.botao').classList.remove("botao--desativado");
    document.querySelector('.botao').classList.add("botao--resposta");
    document.querySelector('.botao--resposta').setAttribute('onClick', 'responderQuestao(this)');
}


function responderQuestao(elemento) {
    elemento.classList.remove("botao--resposta");
    elemento.setAttribute('onClick', 'proximaQuestao(this)');

    if (questaoAtual.resposta == estadoUsuario.idSelecionado)
        alert("Alternativa correta!")
    else 
        alert("Alternativa incorreta")

    elemento.innerText = "Próximo";
}

function proximaQuestao() {
    estadoUsuario.idQuestaoAtual += 1;
    montarQuestao();
    elemento.innerText = "Responder";
}



init()