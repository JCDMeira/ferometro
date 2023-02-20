import styled from "styled-components";
import { theme } from "../../styles/variables";

export const Thermometer = styled.div`
  width: 23px;
  height: 365px;
  background: ${theme.neutralHigh};
  border-radius: 10px;
  display: flex;
  align-items: flex-end;

  position: relative;
  z-index: 999;

  @media (max-width: 380px) {
    display: none;
  }
`;

type SliderProps = {
  SliderHeight: number;
};

export const Slider = styled.div<SliderProps>`
  height: ${({ SliderHeight }) =>
    SliderHeight > 15 ? `${SliderHeight}px` : `15px`};
  width: 14px;

  background: linear-gradient(
    90deg,
    rgba(255, 163, 153, 0.8) 1.56%,
    rgba(255, 163, 153, 0.79) 1.57%,
    #ffa399 7.29%,
    #ff8698 39.58%,
    #ff4d97 100%
  );
  border-radius: 10px;
  padding: 0.2rem 0.3rem;
  display: flex;
  flex-direction: row-reverse;
`;

export const Circle = styled.div`
  width: 15px;
  height: 15px;

  background: ${theme.neutralHigh};
  border-radius: 50%;
`;
