# Gerenciador de Clientes e Otimização de Rotas - Backend

Este projeto consiste em um sistema de gerenciamento de clientes e otimização de rotas para uma empresa que realiza limpeza em residências. O backend foi desenvolvido em Node.js utilizando PostgreSQL como banco de dados.

## Funcionalidades

### Parte 1: Gerenciamento de Clientes

- Listagem de clientes cadastrados
- Filtragem de clientes pelo nome
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

## Execução

Para iniciar o servidor, execute o seguinte comando:

npm start

O servidor será iniciado na porta configurada no arquivo `.env`.

## Rotas da API

- `GET /clientes`: Retorna a lista de todos os clientes cadastrados.
- `POST /clientes`: Cadastra um novo cliente.
- `GET /clientes/name`: Retorna os clientes que contém esse nome.
- `GET /rota`: Retorna a rota partindo da empresa até a visita de todos os clientes cadastrados, retornando à empresa no final e o calculo da distância percorrida.



