function Produto({ produto }) {

  return (
   
    <article className="card">

      <div className="card-topo">

        <span className="codigo-produto"> ITEM #{produto.id}</span>
        <span className="disponivel">DISPONÍVEL</span>
      </div>

      <h2>{produto.nome}</h2>
      <p>{produto.descricao || "Produto sem descrição cadastrada." }</p>

      <div className="preco-produto">
        <span>PREÇO</span>

        <strong>
          R$ {Number(produto.preco).toFixed(2).replace(".", ",")}
        </strong>
      </div>
    </article>
  );
}

export default Produto;