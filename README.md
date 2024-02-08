# #6 - React: **<https://ignite-timer-aszurar.netlify.app//>**

<div align="center">
    <img src="https://i.imgur.com/Ft7UF8u.png" width="1000" alt="Banner">
</div>

## Ignite Timer

- O projeto Ignite Timer é um site que simula um timer para a prática de Pomodoro. Nele temos 2 telas:
  - **Tela de Início**, onde é possível registar o novo ciclo, iniciar o timer e encerrar;
  - **Tela de Histórico**, onde é possível ver o histórico de cada ciclo iniciado anteriormente.
- O site foi publicado com CI/CD por meio da plataforma **[Netlify](https://www.netlify.com/)**.
- Acesse e teste o projeto em: **<https://ignite-timer-aszurar.netlify.app//>**

  <div align="center">
    <h3><a href="">Ignite Timer</a></h3>
  </div>

<div align="center">

[![Netlify Status](https://api.netlify.com/api/v1/badges/7d45adec-d8f8-499a-b2da-24950dd971b0/deploy-status)](https://app.netlify.com/sites/dtmoney-aszurar/deploys) [![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/) [![React](https://img.shields.io/badge/-React-%2320232a.svg?style=flat&logo=react&link=https://react.dev)](https://react.dev/) [![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white)](https://reactrouter.com/en/main)  [![Context-API](https://img.shields.io/badge/Context--Api-000000?style=flat&logo=react)](https://react.dev/learn/scaling-up-with-reducer-and-context) [![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=flat&logo=reacthookform&logoColor=white)](https://react-hook-form.com/) [![StyledComponents](https://img.shields.io/badge/styled--components-DB7093.svg?style=flat&logo=styled-components&logoColor=white&link=https://tailwindcss.com/)](https://tailwindcss.com/)  [![Radix UI](https://img.shields.io/badge/radix%20ui-161618.svg?style=flat&logo=radix-ui&logoColor=white)](https://www.radix-ui.com/) [![TypeScript](https://img.shields.io/badge/-TypeScript-%23007ACC?style=?style=flat-square&logo=typescript&logoColor=white&link=https://www.typescriptlang.org/)](https://www.typescriptlang.org/) [![JavaScript](https://img.shields.io/badge/-JavaScript-%23323330.svg?style=flat&logo=javascript&link=https://www.javascript.com/)](https://www.javascript.com/) [![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white&link=https://developer.mozilla.org/pt-BR/docs/Web/HTML)](https://developer.mozilla.org/pt-BR/docs/Web/HTML) [![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&link=https://www.w3schools.com/css/)](https://www.w3schools.com/css/) [![Yarn](https://img.shields.io/badge/-yarn-%232C8EBB?style=flat&logo=yarn&logoColor=white&link=https://yarnpkg.com/)](https://yarnpkg.com/)  [![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=flat&logo=figma&logoColor=white)](https://www.figma.com/)

</div>

<div align="center">
        <h2>
          <a href="#information_source-sobre">Sobre</a>&nbsp;|&nbsp;
          <a href="#interrobang-motivo">Motivo</a>&nbsp;|&nbsp;
          <a href="#art-design">Design</a>&nbsp;|&nbsp;
          <a href="#seedling-requisitos-mínimos">Requisitos</a>&nbsp;|&nbsp;
          <a href="#rocket-tecnologias-utilizadas">Tecnologias</a>&nbsp;|&nbsp;
          <a
          href="#truck-entrega-e-distribuição-continua">CI/CD</a>&nbsp;|&nbsp;
          <a href="#package-como-baixar-e-executar-o-projeto">Baixar e Executar</a>&nbsp;
        </h2>
</div>

---

<div align="center">
    <img src="https://i.imgur.com/f5Grj3B.gif" width="700" alt="Gif mostrando o projeto">
</div>

<div align="center" >

**[Link do vídeo completo sobre o projeto](https://www.youtube.com/watch?v=u1aEHPypsSc)**

</div>

---

## :information_source: Sobre
- O projeto **ignite timer** pode ser um projeto simples, mas que foi abordado conceitos importantes para o desenvolvimento de web apps com **React**, **TypeScript**, **Styled Components** e navegação com React Router DOM.
- A ideia desse projeto é implementar um timer para a prática de Pomodoro, onde é possível registrar um novo ciclo, iniciar o timer e encerrar. Além disso, é possível ver o histórico de cada ciclo iniciado anteriormente.
- Assim abordamos como podemos criar rota e navegação entre páginas no React, como podemos criar um contexto, trabalhar com tempo em minutos e segundos, gerenciar o Estado por meio do useReducer, persistir os dados com localStorage, desenvolver a parte visual com Styled-Components, dentre outros tópicos...
- A acessibilidade foi levada em consideração, com o uso da lib **[axe-core](https://www.npmjs.com/package/@axe-core/react)** para testes e correções de acessibilidade assim como leitor de tela ChromeVox e o uso do **[Radix UI](https://www.radix-ui.com/)** para componentes acessíveis como Modais e Tooltips.

- O projeto Ignite Timer é o 2º projeto realizado em aula do curso Ignite da trilha ReactJS da Rocketseat.
  
- **Tela inicial**

<div align="center" >
      <img src="https://i.imgur.com/4DdDjcz.png" width="1000" alt="Tela Inicial">
</div>

---

## :interrobang: Motivo

- Esse projeto tem o objetivo de praticar o uso do **React com Styled-Components, Navegação com React Router DOM,  TypeScript e localStorage** para a construção de uma aplicação web. 

### Funcionalidades:

  1. Cadastro de cada ciclo do Pomodoro.
  2. Navegação entre telas e aplicação do Layout pelo React Router DOM.
  3. Persistência de dados com **localStorage**.
  4. Exibição do histórico de ciclos.
  5. Implementação da navegabilidade entre páginas com **React Router DOM**.
  6. **Componentes acessíveis** com **Radix UI** como ToolTip e Modal;
  7. **Uso do useReducer** e **Context API** do React para o gerenciamento de estado da aplicação em conjunto com a divisão da lógica de **actions** e **reducers** para o gerenciamento de estado;
  8. Entender e praticar construção de interfaces com **Styled Components** aplicando responsividade e breakpoints;

### O que foi aprendido de novo?

  0. Implementação da Navegação com React Router DOM;
  1. Construção de Layouts com React Router DOM;
  2. Formatação de datas com **Date FNS**;
  3. Implementação de responsividade total com Styled-Components;
  4. Design das telas responsivas
     - Esse design das telas para celular foi feito por mim, tanto seu Figma quanto sua implementação pois o projeto original não tem essa responsividade;
  5. **Contexto de responsividade** para modificações mais profundas no visual responsivo;
  6. **Melhoria de Performance**: Uso do **memo** para memorizar as linhas da tabela e não renderizar novamente a cada remoção de transação;

- **Tela de Histórico**

  <div align="center" >
       <img src="https://i.imgur.com/MQNtsiu.png" width="1000" alt="Tela de Histórico">
  </div>

---

## :art: Design

- No design, eu acrescentei as telas responsivas para celular, uma melhoria que fiz por mim mesmo, não há no projeto original.

<div align="center">
  <h3><a href="https://www.figma.com/file/ZFx7ibCTZ9pgPsrvwryMhW/Ignite-Timer?type=design&node-id=0-1&mode=design&t=lTSkIabOQ7ISiv0R-0">Ignite Timer</a></h3>

  [![Design](https://i.imgur.com/TAfikM6.png)](https://www.figma.com/file/ZFx7ibCTZ9pgPsrvwryMhW/Ignite-Timer?type=design&node-id=0-1&mode=design&t=lTSkIabOQ7ISiv0R-0)
</div>

---

## :seedling: Requisitos Mínimos

  1. NodeJS
  2. ReactJS
  3. Vite
  4. Yarn(ou NPM)
  
- **Responsividade**

<div align="center" >
      <img src="https://i.imgur.com/8OtcKGU.png" alt="Iniciando ciclo" width="1000">
      <img src="https://i.imgur.com/oT7NYqL.png" alt="Ciclo em andamento" width="1000">
</div>

---

## :rocket: Tecnologias Utilizadas

- O projeto foi desenvolvido utilizando as seguintes tecnologias:

  1. **[axe-core/react](https://www.npmjs.com/package/@axe-core/react)**
  2. **[Date FNS](https://date-fns.org/)**
  3. **[JavaScript](https://developer.mozilla.org/pt1.BR/docs/Web/JavaScript)**
  4. **[Netlify](https://www.netlify.com/)**
  5. **[NodeJS](https://nodejs.org/en/)**
  6. **[Phosphor React](https://www.npmjs.com/package/phosphor-react)**
  7. **[Radix UI](https://www.radix-ui.com/)**
  8. **[React](https://pt1.br.react.dev/)**
  9. **[React Router DOM](https://reactrouter.com/en/main)**
  10. **[React Hook Form](https://react-hook-form.com/)**
  11. **[Styled Components](https://styled-components.com/)**
  12. **[TypeScript](https://www.typescriptlang.org/)**
  13. **[Vite](https://vitejs.dev/)**
  14. **[Yarn](https://classic.yarnpkg.com/blog/2017/05/12/introducing-yarn/)**
  15. **[zod](https://zod.dev/)**

- **Responsividade**

<div align="center" >
      <img src="https://i.imgur.com/67kGPsS.png" alt="Tela inicial no modo responsivo" width="280">_<img src="https://i.imgur.com/0A4z9RQ.png" width="280" alt="Tela de Histórico em modo responsivo">
</div>

---

## :truck: Entrega e distribuição continua

**<https://ignite-timer-aszurar.netlify.app//>**

- Para a publicação da aplicação foi por meio da plataforma **[Netlify](https://www.netlify.com/)** onde é possível publicar de forma rápida, fácil e simples projetos React que estão hospedados no GitHub, GitLab, dentre outras plataformas de repositório remoto de graça.
- Com isso, o CI/CD já é aplicado automaticamente por meio dessa plataforma definindo a branch de produção, sempre que houver uma atualização nela, será gerado uma nova versão do projeto e já publicado.
- Além disso, podemos customizar o próprio endereço do site, adicionar ferramentas dentre outras funcionalidades facilmente.

<div align="center">
   <img src="" width="1000" alt="Projeto publicado no Netlify">
</div>

---

## :package: Como baixar e executar o projeto

### Baixar

- Clonar o projeto:

  ```bash
   git clone https://github.com/Aszurar/igniteTimer
  ```

- É necessário ter o Node.js e um gerenciador de pacotes, como o Yarn, instalados em seu sistema. Se você ainda não os tem, siga estas instruções:
  - [Instalação do NodeJS](https://nodejs.org/en/)
  - [Instalação do Yarn](https://classic.yarnpkg.com/blog/2017/05/12/introducing-yarn/)

- Instalação das dependências:
  - Execute o comando abaixo dentro da pasta do projeto

    ```bash
      yarn
    ```

### Execução

- Caso tudo tenha sido instalado com sucesso, basta executar na raiz do projeto:

  ```bash
    yarn dev
  ```

---

<div align="center">

Desenvolvido por :star2: Lucas de Lima Martins de Souza.

</div>
