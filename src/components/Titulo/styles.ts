import styled from "styled-components";

import {Props} from './titulo';

export const Titulo = styled.h3<Props>`
  color: ${props => props.theme.corPrincipal};
  font-size: ${(props)=> (props.fontSize ? props.fontSize+'px': '14px')};
  font-weitght: bold;
  padding-bottom:16px;
`;
