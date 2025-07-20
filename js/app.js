// Neste projeto eu preciso criar um programa que:
//  - Receba o nome do amigo e o inclua na lista;
//  - Quando o usuario pressionar o botao sortear eu 
// preciso entregar uma selacao de quem tirou quem no jogo do amigo secreto;
//  - No final tenho que dar a opcao de a pessoa poder limpar 
// tudo caso ela queira para iniciar uma nova lista.
// * primeiro problema que vou resolver e que quando colocamos o primeiro nome na lista,
// os seguintes podem ficar vazios, entao temos que mandar um alerta que vao pode ser 
// adicionado nada se o campo estiver vazio.
let amigos = [];


function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo').value;
    let listaAmigos = document.getElementById('lista-amigos');


    if (nomeAmigo == '') {
        alert('Nao pode ser adicionado um valor vazio.')
    } else if (amigos.includes(nomeAmigo)) {
        alert('Este amigo ja esta na lista de amigos.')
    } else if (listaAmigos.textContent == '') {
        listaAmigos.textContent = nomeAmigo;
        amigos.push(nomeAmigo);
    } else {
        listaAmigos.textContent += ', ' + nomeAmigo;
        amigos.push(nomeAmigo);
    }

    
    document.getElementById('nome-amigo').value = '';

    console.log(amigos)

}

function embaralharLista(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

function sortear() {
    let listaAmigosSorteados = embaralharLista(amigos);
    let listaSorteio = document.getElementById('lista-sorteio');

    if (amigos.length == 1) {
        alert('Nao podemos sortear apenas uma pessoa.')
    } else {
            for (let i = 0; i < amigos.length; i++) {

        if (i == amigos.length - 1) {
        listaSorteio.innerHTML += listaAmigosSorteados[i] + ' --> ' + listaAmigosSorteados[0] + '<br>';
        } else {
        listaSorteio.innerHTML += listaAmigosSorteados[i] + ' --> ' + listaAmigosSorteados[i + 1] + '<br>';
        }
    }
    }
}

function reiniciar() {
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';

}