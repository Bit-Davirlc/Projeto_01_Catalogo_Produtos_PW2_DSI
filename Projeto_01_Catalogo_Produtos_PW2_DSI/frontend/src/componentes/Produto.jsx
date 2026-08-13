function Produto({ produto }) {
  return (
    <article className="card">
      <h2>{produto.nome}</h2>
      <p>{produto.descricao}</p>
      <strong>R$ {Number(produto.preco).toFixed(2).replace(".", ",")}</strong>
    </article>
  );
}

export default Produto;
