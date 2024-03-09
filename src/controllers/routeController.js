const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  // Outras funções...

  async calculateRoute(req, res) {
    try {
      // Recuperar todas as coordenadas dos clientes do banco de dados
      const clientes = await prisma.client.findMany();

      // Calcular a distância entre a empresa (0,0) e cada cliente
      const clientesComDistancia = clientes.map((cliente) => {
        const distancia = Math.sqrt(
          Math.pow(cliente.coordenadaX, 2) + Math.pow(cliente.coordenadaY, 2)
        );
        return { ...cliente, distancia };
      });

      // Ordenar os clientes com base na distância em ordem crescente
      clientesComDistancia.sort((a, b) => a.distancia - b.distancia);

      // Criar a rota que passa por todos os clientes e retorna à empresa
      const rota = [];
      let distanciaIda = 0;
      let distanciaVolta = 0;

      // Adicionar a empresa (0,0) como ponto de partida
      rota.push({ nome: "Empresa", coordenadaX: 0, coordenadaY: 0 });

      // Adicionar os clientes à rota na ordem determinada
      for (const cliente of clientesComDistancia) {
        rota.push(cliente);
        distanciaIda += cliente.distancia;
      }

      // Calcular a distância de retorno à empresa
      distanciaVolta =
        clientesComDistancia[clientesComDistancia.length - 1].distancia;

      // Adicionar a empresa (0,0) novamente como ponto de retorno
      rota.push({ nome: "Empresa", coordenadaX: 0, coordenadaY: 0 });

      // Calcular a distância total
      const distanciaTotal = distanciaIda + distanciaVolta;

      res.json({ rota, distanciaIda, distanciaVolta, distanciaTotal });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Erro ao calcular rota" });
    }
  },
};
