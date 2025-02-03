# 🎁 Projeto Amigo Secreto

Bem-vindo ao **Projeto Amigo Secreto**! Este é um projeto simples e divertido para sortear amigos secretos de forma aleatória. Ele foi desenvolvido utilizando HTML, CSS e JavaScript puro, sem a necessidade de frameworks ou bibliotecas externas.

---

## 🚀 Como Funciona

O projeto permite que você adicione nomes de amigos em uma lista e, em seguida, sorteie um amigo secreto aleatoriamente. Após o sorteio, a lista é resetada, permitindo que você realize novos sorteios com novos nomes.

---

## 🛠️ Instalação e Execução

Para rodar o projeto localmente, siga os passos abaixo:

### Pré-requisitos
- Nenhuma dependência é necessária! Basta um navegador moderno.

### Passos para Executar
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/amigo-secreto.git

🎯 Funcionalidades
Adicionar Amigos: Insira os nomes dos participantes na lista.

Sortear Amigo Secreto: Clique no botão "Sortear" para escolher um amigo secreto aleatoriamente.

Resetar Lista: Após o sorteio, a lista é automaticamente resetada, permitindo novos sorteios.

🧩 Desafios Enfrentados
Durante o desenvolvimento deste projeto, alguns desafios foram superados:

Resetar a Lista Após o Sorteio:

Inicialmente, a lista de amigos não era resetada após o sorteio, o que impedia novos sorteios sem recarregar a página. Para resolver isso, foi criada uma função específica (resetarLista) que limpa a lista de amigos e atualiza a interface.

Validação de Entrada:

Era necessário garantir que o campo de entrada não estivesse vazio ao adicionar um novo amigo. Para isso, foi implementada uma validação simples que exibe um alerta caso o campo esteja vazio.

Atualização Dinâmica da Interface:

Manter a lista de amigos visível sempre atualizada exigiu a criação de uma função (atualizarListaVisivel) que renderiza a lista na tela sempre que um novo nome é adicionado ou a lista é resetada.

Sorteio Aleatório:

Implementar a lógica de sorteio aleatório foi um desafio interessante. Utilizei a função Math.random() para gerar um índice aleatório e selecionar o amigo sorteado.

🖥️ Tecnologias Utilizadas
HTML: Estrutura da página.

CSS: Estilização e layout.

JavaScript: Lógica de adicionar amigos, sortear e resetar a lista.
