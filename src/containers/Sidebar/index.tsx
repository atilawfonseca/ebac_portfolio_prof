import Avatar from "../../components/Avatar";
import Paragrafo from "../../components/Paragrafo/paragrafo";
import Titulo from "../../components/Titulo/titulo";
import { Descricao, BotaoTema, SideBarContainer } from "./styles";

const Sidebar = () => (
  <aside>
      <SideBarContainer>
          <Avatar />
          <Titulo fontSize={20}>Atila Fonseca</Titulo>
          <Paragrafo tipo="secundario" fontSize={16}>atilawfonseca</Paragrafo>
          <Descricao fontSize={12} tipo="principal">Desenvolvedor Front-end</Descricao>
          <BotaoTema>Trocar Tema</BotaoTema>
      </SideBarContainer>
    </aside>
)

export default Sidebar;
