import { FormProduto } from "./componentes/FormProduto";
import Header from "./componentes/Header";
import Produto from "./componentes/Produto";
import ListaProdutos from "./componentes/ListaProdutos";
import { use, useEffect, useEffectEvent, useState } from "react";

export default function App() {
  const [produtos, setProdutos] = useState([]);
  const [mensagem, setMensagem] = useState("");

  async function cadastrarProduto(produto) {
    setMensagem("");

    try {
      const resposta = await fetch("/api/produtos");
      const dados = await resposta.json();

      setProdutos(dados);
    } catch {
      setMensagem("Não foi possivel carregar os produtos.");
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
          "Content-Type": "aplication/json",
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
    } catch (erro) {
      setMensagem("Não foi possivel cadastrar o produto.", erro);
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
