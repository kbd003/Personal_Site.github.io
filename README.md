# 🚀 Kevin Bulgarelli — Personal Portfolio

> Site pessoal / portfólio profissional hospedado no GitHub Pages.
> Personal website / professional portfolio hosted on GitHub Pages.

---

## 📋 Sobre o Projeto / About

Um site de portfólio pessoal bilíngue (🇧🇷 Português / 🇺🇸 English) construído com HTML, CSS e JavaScript puro, sem dependências externas.

A bilingual (🇧🇷 Portuguese / 🇺🇸 English) personal portfolio website built with plain HTML, CSS, and JavaScript — no external dependencies.

---

## ✨ Funcionalidades / Features

- 🌐 **Troca de idioma dinâmica** — Alterna entre Português e Inglês com um clique, salvando a preferência no `localStorage`. A linguagem do browser é detectada automaticamente na primeira visita.
- 📄 **Visualizador de Currículo embutido** — Abre o CV em PDF diretamente na página via `<iframe>`, sem sair do site.
- ⬇️ **Download de Currículo por idioma** — O botão de download entrega automaticamente a versão correta do CV:
  - 🇧🇷 Português → `Currículo_portuguesTI.pdf`
  - 🇺🇸 English → `CV_TI_EN.pdf`
- 🎇 **Animação de partículas flutuantes** — Partículas geradas dinamicamente criam um efeito visual de fundo.
- 📱 **Design responsivo** — Layout adaptável para diferentes tamanhos de tela.
- 🎨 **Tema escuro / glassmorphism** — Visual moderno com gradientes e efeitos de vidro.
- 🌀 **Animações de entrada suave** — Elementos aparecem com transição ao entrarem no viewport (IntersectionObserver).

---

## 🗂️ Estrutura do Projeto / Project Structure

```
Personal_Site.github.io/
│
├── index.html                  # Página principal / Main page
├── css/
│   └── style.css               # Estilos globais / Global styles
├── js/
│   └── script.js               # Lógica de idioma, PDF e animações
├── Currículo_portuguesTI.pdf   # CV em Português
├── CV_TI_EN.pdf                # CV in English
└── README.md
```

---

## 🛠️ Tecnologias / Tech Stack

| Tecnologia   | Uso                              |
|--------------|----------------------------------|
| HTML5        | Estrutura semântica da página    |
| CSS3         | Estilos, animações, glassmorphism|
| JavaScript   | Lógica de idioma, PDF, partículas|
| GitHub Pages | Hospedagem estática gratuita     |

---

## 🌐 Como acessar / How to access

O site está publicado via **GitHub Pages**:

```
https://kbd003.github.io/Personal_Site.github.io/
```

---

## 🚀 Como rodar localmente / Running Locally

Não há dependências ou build steps. Basta abrir o `index.html` diretamente no browser:

```bash
# Clone o repositório
git clone https://github.com/kbd003/Personal_Site.github.io.git

# Acesse a pasta
cd Personal_Site.github.io

# Abra no browser (Windows)
start index.html
```

> **Nota:** Para que o `<iframe>` do PDF funcione corretamente, recomenda-se servir o projeto via um servidor HTTP local (ex: extensão **Live Server** no VS Code) em vez de abrir o arquivo diretamente.

---

## 📄 Currículos / Resumes

| Idioma / Language | Arquivo / File              |
|-------------------|-----------------------------|
| 🇧🇷 Português      | `Currículo_portuguesTI.pdf` |
| 🇺🇸 English        | `CV_TI_EN.pdf`              |

O site detecta o idioma ativo e usa o CV correspondente tanto para **visualização** quanto para **download**.

---

## 👤 Autor / Author

**Kevin Bulgarelli dos Santos**
- 📧 kevinbd2003.kb@gmail.com
- 💼 [LinkedIn](https://www.linkedin.com/in/kevin-bulgarelli-dossantos-751b88285/)
- 📱 +55 13 98229-1543

---

## 📜 Licença / License

Este projeto é de uso pessoal. Todos os direitos reservados © 2025 Kevin Bulgarelli.

This project is for personal use. All rights reserved © 2025 Kevin Bulgarelli.
