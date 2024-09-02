import EstiloGlobal, { Container } from "./styled";
import Sidebar from "./containers/Sidebar";
import Sobre from "./containers/Sobre";
import Projetos from "./containers/Projetos";

function App() {

  return (

    <div>
      <EstiloGlobal />
      <Container>
        <Sidebar />
          <main>
            <Sobre />
            <Projetos />
          </main>
      </Container>

    </div>
  );
}

export default App;
