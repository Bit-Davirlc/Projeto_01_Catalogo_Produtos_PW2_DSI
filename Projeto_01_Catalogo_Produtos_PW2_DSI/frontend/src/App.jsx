import { useEffect, useState } from "react";
import Header from "./componentes/Header";
import FormProduto from "./componentes/FormProduto";
import ListaProdutos from "./componentes/ListaProdutos";

import Footer from "./componentes/Footer";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [mensagem, setMensagem] = useState("");

  const [busca, setBusca] = useState("");

  async function carregarProdutos() {

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
      setMensagem("Produto cadastrado com sucesso.");
    } catch (erro) {
      setMensagem("Não foi possível cadastrar o produto.");
    }

    const produtosFiltrados = produtos.filter((produto) =>
      produto.nome.ToLowerCase().includes(busca.ToLowerCase()),
    );
  }

  return (
    <>
      <Header />

      <main className="container">
        <section className="painel-resumo">
          <div>
            <span className="tag">PROJETO INTEGRADOR</span>
            <h2>Evolução do Catálogo</h2>

            <p>Front-end em React conectado à API do Projeto</p>
          </div>
          <div className="contador-produtos">
            <span>Total de Produtos</span>
            <strong>{produtos.length}</strong>
          </div>
        </section>

        <FormProduto aoCadastrar={cadastrarProduto} />

        {mensagem && <p className="mensagem">{mensagem}</p>}

        <section className="area-busca">
          <div>
            <span className="tag">BUSCA RÁPIDA</span>
            <h2>Encontre um produto</h2>
          </div>

          <input
            type="text"
            value={busca}
            onChange={(evento) => setBusca(evento.target.value)}
            placaholder="Digite o nome do produto..."
          ></input>
        </section>

        <ListaProdutos produtos={produtosFiltrados} busca={busca} />
      </main>
      <Footer />
    </>
  );
}

export default App;
