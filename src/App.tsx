import {ThemeProvider} from 'styled-components'

import EstiloGlobal, { Container } from "./styled";
import Sidebar from "./containers/Sidebar";
import Sobre from "./containers/Sobre";
import Projetos from "./containers/Projetos";

import temaDark from './themes/dark';
import { useState } from 'react';
import temaLight from './themes/light';

function App() {

  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false);

  function TrocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark);
  }

  return (

    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocarThema={TrocaTema} />
          <main>
            <Sobre />
            <Projetos />
          </main>
      </Container>

    </ThemeProvider>
  );
}

export default App;
