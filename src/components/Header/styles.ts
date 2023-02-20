import styled from "styled-components";
import { theme } from "../../styles/variables";

export const Header = styled.header`
  width: 100vw;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
  top: 0;

  background-color: ${theme.neutralLow};

  h1 {
    color: ${theme.primary};
    margin: 15px;
  }
  p {
    margin: 0;
  }
`;
