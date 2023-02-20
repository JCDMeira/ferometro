import styled from "styled-components";
import { theme } from "../../styles/variables";

export const Footer = styled.footer`
  width: 100vw;
  height: 80px;
  text-align: center;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: ${theme.neutralLow};

  bottom: 0;
  a {
    color: ${theme.primary};
    cursor: pointer;
  }
  a:hover {
    font-size: 1.65rem;
    font-weight: bold;
  }
`;
