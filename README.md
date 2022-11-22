<div align="center" id="top">
  <img src="https://github.com/PauloHBLima/ng-cash-trybe-back-end-/blob/master/src/assets/logo%20ng%20cash.png" alt="NLW COPA" />
</div>

<h1 align="center"> NG.CASH | Back-end 💻</h1>
<p align="center">
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requisitos">Requisitos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-iniciando">Iniciando</a> &#xa0; | &#xa0;
  <!--<a href="#memo-licença">Licença</a> &#xa0; | &#xa0;-->
  <a href="https://github.com/PauloHBLima" target="_blank">Author</a>
</p>

<br>

## :dart: Sobre ##

Este é um projeto da NG.CASH para Estruturar uma aplicação web fullstack, dockerizada, 
cujo objetivo seja possibilitar que usuários da NG consigam realizar transferências internas entre si.!

## :sparkles: Features ##

:heavy_check_mark: Criação de Usuários\
:heavy_check_mark: Login de Usuários\
:heavy_check_mark: Registros das Transferencias entre contas\
:heavy_check_mark: Autenticação do Usuário logado\
:hammer_and_wrench: Telas para consumir a API ( Tratamento no Front-end )

## :rocket: Tecnologias ##

As seguintes ferramentas foram usadas neste projeto:

- [Servidor: NodeJs](https://nodejs.org/en//)
- [TypeScript](https://www.typescriptlang.org/)

## 📚️ Bibliotecas ##

As seguintes bibliotecas foram usadas neste projeto:

### Desenvolvimento 
```json
""devDependencies": {
    "@mermaid-js/mermaid-cli": "^9.2.2",
    "@types/bcryptjs": "^2.4.2",
    "@types/cors": "^2.8.12",
    "@types/express": "^4.17.14",
    "@types/jsonwebtoken": "^8.5.9",
    "@types/morgan": "^1.9.3",
    "@types/node": "^18.11.9",
    "prisma": "^4.6.1",
    "prisma-erd-generator": "^1.2.4",
    "ts-node": "^10.9.1",
    "tsx": "^3.12.1",
    "typescript": "^4.9.3"
  }
```
### Produção
```json
"dependencies": {
    "@fastify/cors": "^8.2.0",
    "@fastify/jwt": "^6.3.3",
    "@prisma/client": "^4.6.1",
    "@types/bcrypt": "^5.0.0",
    "bcrypt": "^5.1.0",
    "cors": "^2.8.5",
    "decimal.js": "^10.4.2",
    "fastify": "^4.10.0",
    "fastify-jwt": "^4.2.0",
    "morgan": "^1.10.0",
    "nodemon": "^2.0.20",
    "short-unique-id": "^4.4.4",
    "tsc": "^2.0.4",
    "zod": "^3.19.1"
  },
```

## :white_check_mark: Requisitos ##

Antes de começar :checkered_flag:, você precisa ter o [Git](https://git-scm.com) e [Node](https://nodejs.org/en/) instalado.

## :checkered_flag: Iniciando ##

```bash
# Clone este projeto
$ git clone https://github.com/PauloHBLima/ng-cash-trybe-back-end-.git
# Acesse o projeto
$ cd ng-cash-trybe-back-end-
# Instale as dependências
$ npm i
# Instale o Banco de dados
$ [Postgresql](https://www.postgresql.org//)
# Conecte o banco de dados utilizando a variavel de ambiente .env.example como base.
$ DATABASE_URL= passando: (username, password, porta do banco padrão) 
# Execute as migrations
$ npx prisma migrate dev --name init
# Execute o projeto com npm
$ npm run dev
# O Server irá inicializar em http://localhost:3000
```


## :memo: Licença ##

Feito por <a href="https://github.com/PauloHBLima" target="_blank">Paulo H B Lima</a> 🇧🇷
##
<a href="#top">Back to top</a>
