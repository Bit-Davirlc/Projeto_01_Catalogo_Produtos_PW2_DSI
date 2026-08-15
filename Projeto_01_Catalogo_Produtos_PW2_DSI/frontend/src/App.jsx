import { useEffect, useState } from "react";
import FormProduto from "./componentes/FormProduto";
import Header from "./componentes/Header";
import ListaProdutos from "./componentes/ListaProdutos";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [mensagem, setMensagem] = useState("");

  async function carregarProdutos() {
    setMensagem("");

    try {
      const resposta = await fetch("/api/produtos");
      const dados = await resposta.json();

      setProdutos(dados);
    } catch {
      setMensagem("Não foi possível carregar os produtos.");
    }
  }

  useEffect(() => {
    carregarProdutos();
  }, []);

  async function cadastrarProduto(produto) {
    setMensagem("");

    try {
      const resposta = await fetch("/api/produtos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(produto),
      });

      if (!resposta.ok) {
        const erro = await resposta.json();
        setMensagem(erro.mensagem);
        return;
      }

      const novoProduto = await resposta.json();

      setProdutos((produtosAtuais) => [...produtosAtuais, novoProduto]);
    } catch {
      setMensagem("Não foi possível cadastrar o produto.");
    }
  }

  return (
    <>
      <Header />

      <main className="container">
        <FormProduto aoCadastrar={cadastrarProduto} />

        {mensagem && <p className="mensagem">{mensagem}</p>}

        <ListaProdutos produtos={produtos} />
      </main>
    </>
  );
}

export default App;
