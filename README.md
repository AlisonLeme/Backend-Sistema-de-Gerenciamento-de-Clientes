# Gerenciador de Clientes e Otimização de Rotas - Backend

Este projeto consiste em um sistema de gerenciamento de clientes e otimização de rotas para uma empresa que realiza limpeza em residências. O backend foi desenvolvido em Node.js utilizando PostgreSQL como banco de dados.

## Funcionalidades

### Parte 1: Gerenciamento de Clientes

- Listagem de clientes cadastrados
- Filtragem de clientes com base nas informações cadastradas (nome, email e telefone)
- Cadastro de novos clientes

### Parte 2: Otimização de Rotas

- Cálculo da rota partindo da empresa até a visita de todos os clientes cadastrados, retornando à empresa no final
- Disponibilização de um algoritmo via rota da API para calcular a rota com a menor distância possível

## Tecnologias Utilizadas

- Node.js
- PostgreSQL
- Express.js (para criação da API)
- Prisma (para interação com o banco de dados)

## Configuração do Ambiente

1. Clone o repositório: `git clone https://github.com/AlisonLeme/Backend-Sistema-de-Gerenciamento-de-Clientes.git`
2. Instale as dependências: `npm install`
3. Renomeie o arquivo `.env.example` para `.env` e preencha as variáveis de ambiente necessárias

    - `PORT`: Esta variável define a porta na qual o servidor backend será executado. Por padrão, a porta 3333 será utilizada.

    - `DATABASE_USER`: Esta variável define o nome de usuário do banco de dados PostgreSQL.

    - `DATABASE_PASSWORD`: Esta variável define a senha do banco de dados PostgreSQL.

    - `DATABASE_URI`: Esta variável define o URI de conexão com o banco de dados PostgreSQL, incluindo o host e a porta. Por exemplo: `localhost:5432`.

    - `DATABASE_NAME`: Esta variável define o nome do banco de dados PostgreSQL a ser utilizado.

# Configuração do Banco de Dados PostgreSQL (Opcional)

Este projeto utiliza o PostgreSQL como banco de dados. Você pode optar por configurar e iniciar o banco de dados localmente utilizando Docker, ou instalar e configurar o PostgreSQL manualmente em sua máquina.

## Opção 1: Utilizando Docker Compose

Se você escolher utilizar Docker Compose, siga as instruções abaixo:

### Pré-requisitos

- Docker instalado em seu sistema ([Instruções de instalação do Docker](https://docs.docker.com/get-docker/))
- Docker Compose instalado em seu sistema ([Instruções de instalação do Docker Compose](https://docs.docker.com/compose/install/))

### Configuração

1. Navegue até o diretório do projeto: `cd Backend-Sistema-de-Gerenciamento-de-Clientes`

### Execução do Banco de Dados

Execute o seguinte comando para iniciar o banco de dados PostgreSQL em um contêiner Docker:

```bash
docker-compose up -d
```

O banco de dados PostgreSQL será iniciado em um contêiner chamado database_teste.

## Execução

Para iniciar o servidor, execute o seguinte comando:

```bash
npm start
```

O servidor será iniciado na porta configurada no arquivo `.env`.
O prisma studio será aberto na porta `555` para a visualização do banco de dados PostgreSQL

## Rotas da API

- `GET /clientes`: Retorna a lista de todos os clientes cadastrados.
- `POST /clientes`: Cadastra um novo cliente.
- `GET /clientes/name`: Retorna os clientes que contém esse nome.
- `GET /rota`: Retorna a rota partindo da empresa até a visita de todos os clientes cadastrados, retornando à empresa no final e o calculo da distância percorrida.



