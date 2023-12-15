
# Icom-academico-server API

Trata-se de uma API que recebe requisições para CRUD em uma plataforma de jogos.

## Funcionalidades

- Listagem de todos os jogos
- Listagem do jogo pelo ID
- Cadastro de novos jogos
- Alteração de jogos existentes
- Delete de jogos existentes

## Rodando localmente
Instale o NodeJs  
```bash
https://nodejs.org/en/download?utm_source=blog
```

Clone o projeto

```bash
  git clone git@github.com:mateuscamaccho/icom-academico-server.git 
  https://github.com/mateuscamaccho/icom-academico-server.git
```

Entre no diretório do projeto

```bash
  cd icom-academico-server
```

Instale as dependências

```bash
  npm install express 
  npm install nodemon
  npm install cors  
  npm install axios
  npm install -D typescript
  npm install -D @types/express
  npm install -D @types/node,
  npm install -D nodemon,
  npm install -D ts-node,
```

Inicie o servidor

```bash
  npm run dev
```

## Documentação da API

#### Listar todos os jogos

```http
  GET /list/games
```
##### Exemplo requisição:
```http
  https://127.0.0.1:3000/list/games
```

##### Retorno:
```bash
    [
        {
            id: number,
            nome: string,
            descricao: string,
            produtora: string,
            ano: number,
            idadeMinima: number
        }
    ]
```
#### Listar dados de um jogo

```http
  GET /list/:id
```
##### Exemplo requisição:
```http
  https://127.0.0.1:3000/list/1
```

##### Retorno:
```Bash
    {
        id: number,
        nome: string,
        descricao: string,
        produtora: string,
        ano: number,
        idadeMinima: number
    }
```


#### Criação de novos jogos

```http
  POST /create
```

##### Exemplo requisição:
```http
  https://127.0.0.1:3000/create
```
```Bash
Body:
    {
        nome: string,
        descricao: string,
        produtora: string,
        ano: number,
        idadeMinima: number
    }

```

##### Retorno:
```bash
    Será retornado o ID do novo jogo em caso de sucesso na requisição
```

#### Alteração de jogos

```http
  POST /alter/game
```

##### Exemplo requisição:
```http
  https://127.0.0.1:3000/alter/game
```
```Bash
Body:
    {
        id: number,
        nome: string,
        descricao: string,
        produtora: string,
        ano: number,
        idadeMinima: number
    }

```

##### Retorno:
```bash
    Será retornado o valor JSON TRUE caso a edição seja bem sucedida
```

#### Deletar jogo

```http
  POST /delete/:id
```

##### Exemplo requisição:
```http
    https://127.0.0.1:3000/delete/1
```


##### Retorno:
```bash
    Será retornado o valor JSON TRUE caso a edição seja bem sucedida
```
