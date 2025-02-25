# API Express com Autenticação

Este é um projeto pessoal de uma API desenvolvida com Express.js, que implementa um sistema de autenticação de usuários utilizando Passport.js e Bcrypt.js. A API possui algumas rotas configuradas para testes, que podem ser acessadas por meio de um cliente HTTP como Postman ou Thunder Client.

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Passport.js](http://www.passportjs.org/)
- [Bcrypt.js](https://www.npmjs.com/package/bcrypt)
- [Postman](https://www.postman.com/) ou [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) (para testes das rotas)
- [Docker](https://www.docker.com/)

## Como Rodar o Projeto Localmente

### Ferramentas Necessárias

- [Visual Studio Code](https://code.visualstudio.com/) (ou terminal de sua preferência)
- [Git](https://git-scm.com/)
- Cliente HTTP como [Postman](https://www.postman.com/) ou [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)
- [Docker](https://www.docker.com/)

### Passos para Execução

1. Clone o repositório:
   ```sh
   git clone https://github.com/Pedro-HCXavier/API-express-passport-bcrypt.git
   ```

2. Acesse a pasta do projeto:
   ```sh
   projeto-api
   ```

3. Inicie os Docker Containers:
   ```sh
   docker compose up -d --build
   ```

5. A API estará rodando localmente e poderá ser testada com um cliente HTTP como Postman ou Thunder Client.

## Estrutura do Projeto
```
/projeto-api
│-- /node_modules
│-- /src
│   ├── /db
│   ├── /routes
│   ├── /strategies
│   ├── /utils
│-- server.js
|-- package-lock.json
│-- package.json
│-- .env
```

