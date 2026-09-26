# 🌐 Programação Web — PUCPR

> *"A web é a maior plataforma já criada. Entender como ela funciona, de verdade, é entender como o mundo se conecta."*

Um repositório que documenta toda a minha jornada de aprendizado na disciplina de **Programação Web** da PUCPR, do primeiro `<html>` até a integração completa entre frontend e backend. Cada aula e exercício aqui reflete uma nova camada de conhecimento adquirida ao longo do semestre.

> ⚠️ Este repositório está em constante atualização conforme a disciplina avança!

---

## 🗂️ Sumário

- [🎯 Visão Geral](#-visão-geral)
- [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [📈 Curva de Aprendizado](#-curva-de-aprendizado)
- [📁 Estrutura do Repositório](#-estrutura-do-repositório)
- [🔍 Detalhes por Aula](#-detalhes-por-aula)
- [▶️ Como Executar](#️-como-executar)
- [👥 Autor](#-autor)

---

## 🎯 Visão Geral

Este repositório reúne as anotações das aulas, os exemplos praticados em sala e os exercícios desenvolvidos ao longo da disciplina de Programação Web. Cada pasta de aula contém dois diretórios: `aula/` com os exemplos vistos em sala e `Exercicio/` com os projetos desenvolvidos de forma independente. A organização por aulas torna possível acompanhar a evolução técnica de forma linear, desde o HTML puro até a construção de aplicações com separação de responsabilidades entre frontend e backend.

---

## 🛠️ Tecnologias Utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)
![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

---

## 📈 Curva de Aprendizado

A progressão das aulas segue uma curva bem definida, introduzindo uma nova tecnologia ou conceito a cada etapa:

```
Aula 1 → HTML puro (estrutura, formulários, inputs)
Aula 2 → HTML + CSS (estilização, layouts, tabelas)
Aula 3 → + JavaScript (DOM, eventos, navegação, lógica)
Aula 4 → + JS avançado (arrays, map(), template literals, geração dinâmica)
Aula 5 → + PHP backend (JSON, POST, persistência de dados)
Aula 6 → Full-stack (CRUD completo, registro e leitura de dados)
Revisão → Consolidação dos conceitos
Práticas → Avaliações práticas formais
```

---

## 📁 Estrutura do Repositório

```
Programacao_web_PUC/
├── aula_1/                        # HTML puro — primeiro site
├── aula_2/
│   ├── aula/                      # Exemplos em sala (HTML + CSS)
│   └── Exercicio/
│       ├── pagina_1/              # Página estilizada
│       ├── pagina_2/              # Página de quadrinhos com CSS
│       └── pagina_3/              # Tabela estilizada
├── aula_3/
│   ├── aula/                      # Multi-page com JS
│   └── Exercicio/
│       ├── pagina_inicial/        # Página de navegação
│       ├── calculadora/           # Calculadora com JS
│       └── maior_valor/           # Comparador de números
├── aula_4/
│   ├── aula/                      # JS avançado
│   └── exercicio/
│       ├── pagina_inicial/        # Navegação
│       ├── pagina_cards/          # Cards gerados dinamicamente
│       └── pagina_tabela/         # Tabela dinâmica com JS
├── aula_5/
│   ├── aula/
│   │   ├── frontend/              # HTML + CSS + JS
│   │   └── backend/               # PHP + JSON
│   └── exercicio/
│       ├── frontend/              # Interface do exercício
│       └── backend/               # Servidor PHP do exercício
├── aula_6/
│   ├── aula/
│   │   ├── frontend/              # Interface com formulário de cadastro
│   │   └── backend/               # PHP com CRUD em JSON
│   └── exercicio/
│       ├── frontend/
│       └── backend/
├── Revisao/
│   ├── Aula/                      # Exemplos de revisão
│   └── Exercicio/                 # Exercícios de revisão
└── Praticas/
    ├── Pratica_1/                 # Avaliação prática 1
    └── Pratica_2/                 # Avaliação prática 2
```

---

## 🔍 Detalhes por Aula

### 📄 Aula 1 — HTML Puro
**Conceitos:** Estrutura básica HTML, formulários, inputs, tipos de campo

O primeiro contato com a web. A página criada já carregava a identidade do autor — um formulário completo com campos de texto, e-mail, número, slider, radio buttons, checkboxes e um select com heróis da DC e da Marvel como opções:

```html
<h2>Você gosta mais de qual super heroi?</h2>
<select required>
    <option disabled selected>Selecione uma opção</option>
    <option>Superman</option>
    <option>Batman</option>
    <option>Homem-Aranha</option>
    <option>Capitão-America</option>
</select>
```

---

### 🎨 Aula 2 — HTML + CSS
**Conceitos:** Seletores CSS, estilização, layouts, tabelas, listas

A segunda aula introduziu o CSS, transformando páginas estáticas em interfaces com identidade visual. Os exercícios incluíram uma página de coleção de quadrinhos e uma tabela estilizada — os temas de cultura pop já aparecendo nos projetos.

---

### ⚡ Aula 3 — JavaScript (Introdução)
**Conceitos:** DOM manipulation, `getElementById`, eventos `onclick`, `switch/case`, `window.location.href`, `classList`

A entrada do JavaScript foi um divisor de águas. Os exercícios passaram de páginas estáticas para aplicações interativas com lógica real. A calculadora, por exemplo, usa `switch/case` para selecionar a operação e manipula classes CSS para exibir ou esconder o resultado:

```javascript
botao.onclick = function(){
    const num1 = Number(numero_1.value)
    const num2 = Number(numero_2.value)
    const sinal = document.getElementById("calculadora").elements["sinal"].value

    switch(sinal){
        case "+": resultado.innerHTML = (num1 + num2); break
        case "-": resultado.innerHTML = (num1 - num2); break
        case "*": resultado.innerHTML = (num1 * num2); break
        case "/": resultado.innerHTML = (num1 / num2); break
    }
    caixa_resultado.classList.remove("escondido")
}
```

A navegação entre páginas foi implementada com `window.location.href`, estabelecendo um padrão de multi-page app sem frameworks.

---

### 🧩 Aula 4 — JavaScript Avançado
**Conceitos:** Arrays de objetos, `map()`, `slice()`, template literals, geração dinâmica de HTML

O JavaScript ganhou profundidade com manipulação de arrays e geração dinâmica de conteúdo. O exercício de cards criou uma função `agrupar()` que divide um array em grupos de tamanho fixo, e usou `map()` com template literals para renderizar toda a interface a partir dos dados — incluindo um easter egg: os cards foram populados com capas de HQs da DC Comics:

```javascript
function agrupar(lista, tamanho){
    let grupos = []
    for(let i = 0; i < lista.length; i += tamanho){
        grupos.push(lista.slice(i, i + tamanho))
    }
    return grupos
}

let linhas = grupos.map(grupo => `
    <div class="grande">
        ${grupo.map(n => `
            <div class="card_1">
                <img src="${n.src}">
                <div class="card_2"><h1>${n.nome}</h1></div>
            </div>
        `).join("")}
    </div>
`).join("")

corpo.innerHTML = linhas
```

---

### 🖥️ Aula 5 — PHP Backend (Introdução)
**Conceitos:** Frontend/backend separation, `fetch()` API, JSON, PHP `file_get_contents`, `json_decode/encode`, `file_put_contents`, `sha1()`, CORS headers

A maior virada do semestre: a introdução do backend. O PHP passou a receber dados do JavaScript via `fetch()` com método POST, processar e persistir as informações em um arquivo `dados.json`. Senhas já foram tratadas com hash `sha1()` desde o primeiro exercício de backend:

```php
// Recebe o JSON enviado pelo JavaScript via POST
$jsonInput = file_get_contents('php://input');
$data = json_decode($jsonInput, true);

$username = $data['nome'] ?? 'sem nome';
$password = $data['senha'] ?? 'sem senha';

$arrayData = [
    "timestamp" => date("Y-m-d H:i:s"),
    "username" => $username,
    "password" => sha1($password)   // hash da senha antes de salvar
];

file_put_contents('dados.json', json_encode($arrayData, JSON_PRETTY_PRINT));

echo json_encode(["status" => "success", "message" => "Hello $username"]);
```

---

### 🔄 Aula 6 — Full-Stack (CRUD em JSON)
**Conceitos:** CORS preflight (`OPTIONS`), persistência de lista em JSON, registro acumulativo de dados, separação `get-dados.php` / `cadastro-dados.php`

A aula 6 completou o ciclo full-stack com um sistema de cadastro real. O backend passou a manter uma lista de registros persistida em JSON, com suporte ao método `OPTIONS` para preflight CORS e separação de responsabilidades em dois endpoints:

```php
// Verifica preflight do CORS
if($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Lê a lista atual do "banco de dados"
$dados = file_get_contents("cadastro-dados.json");
$lista = json_decode($dados, true);

// Adiciona o novo registro ao final da lista
$lista[] = [
    "timestamp" => date("Y-m-d H:i:s"),
    "nome" => $nome,
    "idade" => $idade
];

// Persiste a lista atualizada
file_put_contents('cadastro-dados.json', json_encode($lista, JSON_PRETTY_PRINT));
```

---

### 🔁 Revisão — Consolidação dos Conceitos
**Conceitos:** Renderização de tabela a partir de array de objetos, `map()` com template literals

A revisão consolidou os conceitos de JavaScript avançado com um exercício que renderiza uma tabela de pessoas a partir de um array de objetos, usando o padrão `map()` + `innerHTML` que se tornou recorrente durante a disciplina:

```javascript
let resposta = pessoas.map(item => `
    <tr>
        <td>${item.nome}</td>
        <td>${item.idade}</td>
        <td>${item.pais}</td>
        <td>${item.cidade}</td>
    </tr>
`).join("")

tabela.innerHTML = resposta
```

---

### ✅ Práticas — Avaliações Formais
As práticas são avaliações formais da disciplina, com estrutura multi-página e os conceitos acumulados até aquele ponto do semestre. A Prática 1 inclui duas páginas completas (`pagina_1` e `pagina_2`); a Prática 2 está em desenvolvimento.

---

## ▶️ Como Executar

Os projetos das aulas 1 a 4 funcionam diretamente no navegador — basta abrir os arquivos `.html`:

```bash
# Clone o repositório
git clone https://github.com/ViniNovack/Programacao_web_PUC.git

# Abra qualquer arquivo HTML no navegador
# Exemplo: aula_3/Exercicio/calculadora/index.html
```

Para os projetos das **aulas 5 e 6** (que usam PHP), é necessário um servidor local com suporte a PHP:

```bash
# Com PHP instalado, dentro da pasta do exercício:
php -S localhost:8000

# Ou usando XAMPP/WAMP, coloque a pasta no diretório htdocs
```

> ⚠️ Os arquivos `.json` de dados das aulas 5 e 6 funcionam como banco de dados simples e precisam ter permissão de escrita no servidor.

---

## 👥 Autor

<div align="center">

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/ViniNovack">
        <img src="https://github.com/ViniNovack.png" width="100px" style="border-radius: 50%;" alt="ViniNovack"/>
        <br/>
        <sub><b>Vinícius Jimenez Novack</b></sub>
      </a>
      <br/>
      <a href="https://github.com/ViniNovack">
        <img src="https://img.shields.io/badge/ViniNovack-181717?style=flat-square&logo=github&logoColor=white"/>
      </a>
    </td>
  </tr>
</table>

*Feito com 💙 na PUCPR — do primeiro `<h1>` ao primeiro servidor PHP.*

</div>
