const express = require("express");
const {
  listarProdutos,
  cadastrarProduto
} = require("../controllers/produtoController");

const router = express.Router();

router.get("/", listarProdutos);
router.post("/", cadastrarProduto);

module.exports = router;
