const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  // Listar todos os clientes
  async getClients(req, res) {
    try {
      const clientes = await prisma.client.findMany();
      res.json(clientes);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Erro ao buscar clientes" });
    }
  },
  // Filtrar clientes por nome
  async filterClient(req, res) {
    const { data } = req.params;
    try {
      const clientes = await prisma.client.findMany({
        where: {
          OR: [
            {
              nome: {
                contains: data,
                mode: "insensitive", // Ignora a diferença entre maiúsculas e minúsculas
              },
            },
            {
              email: {
                contains: data,
                mode: "insensitive",
              },
            },
            {
              telefone: {
                contains: data,
                mode: "insensitive",
              },
            },
          ],
        },
      });

      if (clientes.length === 0) {
        return res
          .status(404)
          .json({
            error: "Nenhum cliente encontrado com o critério fornecido",
          });
      }

      res.json(clientes);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Erro ao buscar clientes" });
    }
  },

  // Cadastrar novo cliente
  async registerClient(req, res) {
    const { nome, email, telefone, coordenadaX, coordenadaY } = req.body;
    try {
      await prisma.client.create({
        data: {
          nome: nome,
          email: email,
          telefone: telefone,
          coordenadaX: coordenadaX,
          coordenadaY: coordenadaY,
        },
      });
      res.status(201).send("Cliente cadastrado com sucesso");
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Erro ao cadastrar cliente" });
    }
  },
};
