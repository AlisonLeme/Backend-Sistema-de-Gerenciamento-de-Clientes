const express = require("express");
const clientController = require("./controllers/clientController");
const routeController = require("./controllers/routeController.js");

const routes = express.Router();

// Listar todos os clientes
routes.get("/clientes", clientController.getClients);

// Filtrar clientes por nome
routes.get("/clientes/:nome", clientController.filterClient);

routes.post("/clientes", clientController.registerClient);
// Cadastrar novo cliente

// Calcular rota
routes.get("/rota", routeController.calculateRoute);

module.exports = routes;
