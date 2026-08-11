import { FormProduto } from "./componentes/FormProduto";
import Header from "./componentes/Header";
import Produto from "./componentes/Produto";

export default function App() {
  return (
    <header className="header">
      {/* <article className="card"> */}
        <Header />
        {/* <Produto /> */}
        <FormProduto />
      {/* </article> */}
    </header>
  );
}
