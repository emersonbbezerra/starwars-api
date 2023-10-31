# StarWars API

Esta é uma API de exemplo desenvolvida em Node.js com o banco de dados MongoDB para gerenciar informações sobre filmes do Star Wars ou de qualquer outro título.

## Pré-requisitos

Certifique-se de ter o Node.js e o MongoDB instalados no seu sistema.

## Configuração

1. Clone o repositório:

```
git clone https://github.com/seu-usuario/starwars-api.git
```

2. Instale as dependências:

```
npm install
```

3. Crie um arquivo `.env` na raiz do projeto com as configurações do seu banco de dados. Exemplo:

```dotenv
DATABASE_URL=sua-url-de-conexão-com-o-MongoDB
```

4. Inicie o servidor:

```
npm start
```

### Uso

GET /: Retorna todos os filmes do Star Wars.

POST /: Cria um novo filme do Star Wars.

PUT /:id: Atualiza um filme existente por ID.

DELETE /:id: Exclui um filme existente por ID.

### Autor: Emerson Bezerra

Licença
Este projeto está licenciado sob a Licença ISC.
