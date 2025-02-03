let listaDeAmigos = [];

function adicionarAmigo() {
  let campoDeEntrada = document.getElementById("campoAmigos");
  let nomeDoAmigo = campoDeEntrada.value.trim();

  // Verificamos se o nome está vazio
  if (nomeDoAmigo === "") {
    alert("Por favor, digite um nome válido!");
    return;
  }

  listaDeAmigos.push(nomeDoAmigo);

  campoDeEntrada.value = "";

  atualizarListaVisivel();
}

function atualizarListaVisivel() {
  let listaVisivel = document.getElementById("listaAmigos");

  listaVisivel.innerHTML = "";

  for (let i = 0; i < listaDeAmigos.length; i++) {
    let novoItem = document.createElement("li");

    novoItem.textContent = listaDeAmigos[i];

    listaVisivel.appendChild(novoItem);
  }
}

function sortearAmigo() {
  if (listaDeAmigos.length === 0) {
    alert("Adicione alguns amigos antes de sortear!");
    return;
  }

  let numeroSorteado = Math.floor(Math.random() * listaDeAmigos.length);

  let amigoSorteado = listaDeAmigos[numeroSorteado];

  let resultadoLista = document.getElementById("resultado");
  resultadoLista.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;

  resetarLista();
}

function resetarLista() {
  listaDeAmigos = [];

  atualizarListaVisivel();
}
