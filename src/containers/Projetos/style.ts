import styled from "styled-components";

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 36px;
  margin-bottom: 2em;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 16px;

  }
`;
