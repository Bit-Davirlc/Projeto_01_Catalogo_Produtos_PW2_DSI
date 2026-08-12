const express = require("express");

const produtoRoutes = require("./controllers/produtoRoutes");

const app = express();
const PORTA = 3000;

app.use(express.json());

app.use("/api/produtos", produtoRoutes);

app.listen(PORTA, () => {
  console.log(`Servidor executando em http://localhost:${PORTA}`);
});
