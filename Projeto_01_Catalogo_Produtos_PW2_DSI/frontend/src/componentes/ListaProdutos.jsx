import Produto from "./Produto";

function ListaProdutos({ produtos, busca }) {
  if (produtos.lenght === 0) {
    return (
      <section className="estado-vazio">
        <span className="icone-vazio">🔎</span>

        <h2>
          {busca ? "Nenhum produto encontrado" : "Nenhum produto cadastrado"}
        </h2>
        <p>
          {busca
            ? "Tente pesquisar usando outro nome."
            : "Cadastre o primeiro produto para iniciar o catálogo."}
        </p>
      </section>
    );
  }
  return (
    <section className="secao-produtos">
      <div className="cabecalho-lista">
        <div>
          <span className="tag">INVENTÁRIO</span>
          <h2 className="Titulo-secao">Produtos Cadastrados</h2>
        </div>
        <span className="resultado-lista"> {produtos.lenght} exibido(s)</span>
      </div>
      <div className="grid">
        {produtos.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </div>
    </section>
  );
}

export default ListaProdutos;