// Vamos criar uma lista vazia para guardar os nomes dos amigos
let listaDeAmigos = [];

// Função para adicionar um amigo na lista
function adicionarAmigo() {
  // Primeiro, pegamos o texto que foi digitado no campo de entrada
  let campoDeEntrada = document.getElementById("campoAmigos");
  let nomeDoAmigo = campoDeEntrada.value.trim(); // trim() remove espaços em branco extras

  // Verificamos se o nome está vazio
  if (nomeDoAmigo === "") {
    alert("Por favor, digite um nome válido!");
    return; // Para a função aqui se o nome estiver vazio
  }

  // Adicionamos o nome na nossa lista
  listaDeAmigos.push(nomeDoAmigo);

  // Limpamos o campo de entrada para o próximo nome
  campoDeEntrada.value = "";

  // Agora vamos mostrar o nome na lista visível
  atualizarListaVisivel();
}

// Função para mostrar todos os nomes na lista
function atualizarListaVisivel() {
  // Pegamos a lista onde vamos mostrar os nomes
  let listaVisivel = document.getElementById("listaAmigos");

  // Limpamos a lista atual para não duplicar nomes
  listaVisivel.innerHTML = "";

  // Para cada amigo na nossa lista...
  for (let i = 0; i < listaDeAmigos.length; i++) {
    // Criamos um novo item de lista
    let novoItem = document.createElement("li");
    // Colocamos o nome do amigo dentro do item
    novoItem.textContent = listaDeAmigos[i];
    // Adicionamos o item na lista visível
    listaVisivel.appendChild(novoItem);
  }
}

// Função para sortear um amigo aleatório
function sortearAmigo() {
  // Verificamos se tem alguém na lista
  if (listaDeAmigos.length === 0) {
    alert("Adicione alguns amigos antes de sortear!");
    return;
  }

  // Escolhemos um número aleatório entre 0 e o tamanho da lista
  let numeroSorteado = Math.floor(Math.random() * listaDeAmigos.length);

  // Pegamos o nome do amigo sorteado
  let amigoSorteado = listaDeAmigos[numeroSorteado];

  // Mostramos o resultado
  let resultadoLista = document.getElementById("resultado");
  resultadoLista.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}
