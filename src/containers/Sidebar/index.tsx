import Avatar from "../../components/Avatar";
import Paragrafo from "../../components/Paragrafo/paragrafo";
import Titulo from "../../components/Titulo/titulo";
import { Descricao, BotaoTema, SideBarContainer } from "./styles";

type Props = {
  trocarThema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
      <SideBarContainer>
          <Avatar />
          <Titulo fontSize={20}>Atila Fonseca</Titulo>
          <Paragrafo tipo="secundario" fontSize={16}>atilawfonseca</Paragrafo>
          <Descricao fontSize={12} tipo="principal">Desenvolvedor Front-end</Descricao>
          <BotaoTema onClick={props.trocarThema}>Trocar Tema</BotaoTema>
      </SideBarContainer>
    </aside>
)

export default Sidebar;
