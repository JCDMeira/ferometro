import styled from "styled-components";
import { theme } from "../../styles/variables";

export const NeonText = styled.span`
  font-size: 2rem;
  font-weight: 600;
  margin: 0 15px;

  color: ${theme.neutralHigh};
  text-shadow: 0 0 7px ${theme.neon}, 0 0 10px ${theme.neon},
    0 0 21px ${theme.neon};
`;
