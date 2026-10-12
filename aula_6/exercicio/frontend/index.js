const lista = document.getElementById("lista");
const mensagem = document.getElementById("mensagem");

async function carregar() {
  try {
    const resposta = await fetch("listar.php");
    const dados = await resposta.json();

    if (dados.length === 0) {
      mensagem.hidden = false;
      return;
    }

    dados.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item.nome;
      lista.appendChild(li);
    });
  } catch (erro) {
    mensagem.textContent = "Erro ao carregar os dados.";
    mensagem.hidden = false;
  }
}

carregar();