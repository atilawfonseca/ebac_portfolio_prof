import styled from "styled-components";


export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
`;

export const LinkBotao = styled.a`
  background-color: ${(props) => props.theme.corDeFundoBotao};
  padding: 8px;
  color: ${(props) => props.theme.corDeFundo};
  font-size: 14px;
  text-decoration: none;
  display: inline-block;
  margin-top: 1em;
  cursor: grab;
`;
