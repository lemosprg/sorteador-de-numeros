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
    alert(numerosSorteados);
}

function gerandoNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}