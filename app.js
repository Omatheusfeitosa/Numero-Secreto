let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let conteudo = document.querySelector(tag);
    conteudo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female')
}


function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Digite um número de 1 a 100');
}

exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', `Parabéns você descobriu o número secreto`);

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
            exibirTextoNaTela(`p`, mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled')
        } else {
            if(chute > numeroSecreto) {
                exibirTextoNaTela('p', `O número secreto é menor que ${chute}`);
            } else {
                exibirTextoNaTela('p', `O número secreto é maior que ${chute}`)
            }
        }
        tentativas++;
        limparCampo();
    }

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeElementosNaLista == 3) {
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    let campo = document.querySelector('input');
    campo.value = '' 
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
