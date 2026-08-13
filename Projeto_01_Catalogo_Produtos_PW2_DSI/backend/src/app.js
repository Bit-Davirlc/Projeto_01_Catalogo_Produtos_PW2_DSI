const express = require("express");
const produtoRoutes = require("./routes/produtoRoutes");

const app = express();
const PORTA = 3000;

// Permite ao Express receber JSON enviado pelo front-end.
app.use(express.json());

app.use("/api/produtos", produtoRoutes);

app.listen(PORTA, () => {
  console.log(`Servidor executando em http://localhost:${PORTA}`);
});
