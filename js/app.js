// Neste projeto eu preciso criar um programa que:
//  - Receba o nome do amigo e o inclua na lista;
//  - Quando o usuario pressionar o botao sortear eu 
// preciso entregar uma selacao de quem tirou quem no jogo do amigo secreto;
//  - No final tenho que dar a opcao de a pessoa poder limpar 
// tudo caso ela queira para iniciar uma nova lista.
let listaAmigos = document.getElementById('lista-amigos');


function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo').value;

    if (listaAmigos.textContent == '') {
        listaAmigos.textContent = nomeAmigo;
    } else {
        listaAmigos.textContent += ', ' + nomeAmigo;
    }

    document.getElementById('nome-amigo').value = '';

    console.log(listaAmigos.textContent.split(', '))
}



function getRandomItemList(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}


function sortear() {
    let nomeSorteado = document.getElementById('lista-sorteio');
    let primeiraListaSorteio = [];
    let segundaListaSorteio = [];
    for (let i = 0; i < listaAmigos; i++) {
        primeiraListaSorteio.push(getRandomItemList(listaAmigos));
        console.log(primeiraListaSorteio)
    }
    console.log(primeiraListaSorteio)
}