import { useState } from "react";

function FormProduto({ aoCadastrar }) {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");

  function enviarFormulario(evento) {
    evento.preventDefault();

    if (!nome.trim() || !preco) {
      return;
    }

    aoCadastrar({
      nome: nome.trim(),
      descricao: descricao.trim(),
      preco: Number(preco),
    });
    setNome("");
    setDescricao("");
    setPreco("");
  }

  return (
    <form className="formulario" onSubmit={enviarFormulario}>
      <h2>Novo Produto</h2>
      <label>
        Nome
        <input
          type="text"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          placeholder="Ex.: Teclado"
        />
      </label>
      <label>
        Descrição
        <input
          type="text"
          value={descricao}
          onChange={(evento) => setDescricao(evento.target.value)}
          placeholder="Descrição do Produto"
        />
      </label>
      <label>
        Preço
        <input
          type="number"
          min="0"
          step="0.01"
          onChange={(evento) => setPreco(evento.target.value)}
          placeholder="0,00"
        />
      </label>
      <button type="submit">Cadastrar Produto</button>
    </form>
  );
}

export default FormProduto;