import Produto from "./Produto";

export default function ListaProdutos({ produtos }) {
  if (produtos.lenght === 0) {
    return <p>Nenhum produto cadastrado.</p>;
  }
  return (
    <section>
      <h2 className="Titulo-secao">Produtos Cadastrados</h2>
      <div className="grid">
        {produtos.map((produto) => (
          <Produto Key={produto.id} produto={produto}/>
        ))}
      </div>
    </section>
  );
}
