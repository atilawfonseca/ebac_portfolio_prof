import Paragrafo from "../Paragrafo/paragrafo";
import { Titulo } from "../Titulo/styles";
import {Card, LinkBotao} from "./styles"


const Projeto = () => (
  <Card>
    <Titulo>
      Projeto Lista de Tarefa
    </Titulo>
    <Paragrafo tipo="secundario">
      Lista de tarefas feitas com VueJs.
    </Paragrafo>
    <LinkBotao>
      Visualizar
    </LinkBotao>
  </Card>
)

export default Projeto;
