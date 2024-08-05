import styled from "styled-components";

//aqui tu adiciona a propriedade do botao
type BotaoProps = {
  principal?: boolean;
  fontSize?:string;
}

//utilizando o styled compomenent para definir as cores possíveis do botao.
const Botao = styled.button<BotaoProps>`
background-color: ${props => props.principal ? 'green': 'blue'};
font-size: ${props => props.fontSize || '16px'}
`;

const BotaoPerigo = styled(Botao)`
background-color: red;
color: white;

span {
  text-decoration:line-through;
}
`;

function Teste() {
  return (
    <div>
      <Botao principal >Clique aqui </Botao>
      <Botao fontSize="14px">Enviar </Botao>
      <BotaoPerigo as="a">
        <span>
          Botao perigo
        </span>
      </BotaoPerigo>
    </div>
  )
}

export default Teste;
