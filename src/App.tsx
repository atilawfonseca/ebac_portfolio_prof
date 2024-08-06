import EstiloGlobal, { Container } from "./styled";
import Sidebar from "./containers/Sidebar";
import Sobre from "./containers/Sobre";
import Projeto from "./containers/Projeto";

function App() {

  return (

    <div>
      <EstiloGlobal />
      <Container>
        <Sidebar />
          <main>
            <Sobre />
            <Projeto />
          </main>
      </Container>

    </div>
  );
}

export default App;
