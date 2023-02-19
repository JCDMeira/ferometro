import styled from "styled-components";

export const Footer = styled.footer`
  width: 100vw;
  height: 80px;
  text-align: center;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: #2d333b;

  bottom: 0;
  a {
    color: #ff4d97;
    cursor: pointer;
  }
  a:hover {
    font-size: 1.65rem;
    font-weight: bold;
  }
`;
