function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    //Teste de funcionalidade com alerta
    //alert('Números selecionados: Quantidade = ' + quantidade + ', De = ' + de + ' e Até = ' + ate + '.');

    //Validador de ordem numérica adicionada
    if (de >= ate) {
        alert('O primeiro número escolhido deve ser menor que o segundo. Por favor, escolha um range de números válidos.');
        return;
    }

    let numerosSorteados = [];
    let numero;
    //Adicionar número sorteado no array e evitar que seja repetido
    while (numerosSorteados.length < quantidade){
        numero = gerandoNumeroAleatorio(de, ate);
        if (!numerosSorteados.includes(numero)) {
            numerosSorteados.push(numero);
        }
    }
    //Deixar a lista de sorteados em ordem crescente de amostragem
    numerosSorteados.sort((a, b) => a-b);
    //Teste de funcionalidade dos numeros sorteados
    //alert(numerosSorteados);

    let resultados = document.getElementById('resultado');
    resultados.innerHTML = `<label class="texto__paragrafo__fim">Números Sorteados: ${numerosSorteados}.</label>`;

    alterarBotoes();
}

function reiniciar(){
    let resultadosReiniar = document.getElementById('resultado');
    resultadosReiniar.innerHTML = `<label class="texto__paragrafo__fim">Preencha os campos acima e clique em "Sortear"</label>`;

    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    
    alterarBotoes();
}

function gerandoNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Função para modificação dos botões de Sorteio e Reinicio de jogo
function alterarBotoes(){
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    let botaoSortear = document.getElementById('btn-sortear');

    if (botaoReiniciar.classList.contains('container__botao-desabilitado')){
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    
        botaoSortear.classList.remove('container__botao');
        botaoSortear.classList.add('container__botao-desabilitado');
    } else{
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
    
        botaoSortear.classList.remove('container__botao-desabilitado');
        botaoSortear.classList.add('container__botao');
    }
}