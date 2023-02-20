import styled from "styled-components";
import { theme } from "../styles/variables";

export const Content = styled.div`
  display: flex;
  box-sizing: border-box;
  min-height: 400px;
  height: calc(100vh - 240px);
  padding: 0 15vw;
`;

export const Divider = styled.div`
  min-height: 400px;
  flex: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const NoContent = styled.div`
  width: 98vw;
  padding: 10vw;
  box-sizing: border-box;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    width: 160px;
    height: 60px;
    padding: 20px;
    border-radius: 8px;
  }
`;

export const ResetButton = styled.button`
  margin: 40px 0;
  padding: 10px;
  border-radius: 8px;
  font-size: 20px;
  background-color: ${theme.primary};
  color: ${theme.neutralHigh};
  border: none;
`;

export const Case = styled.div`
  width: 400px;
  height: 730px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const CaseThermometer = styled.div`
  width: 500px;
  height: 730px;
  position: absolute;
  bottom: -128px;
  margin-left: 6px;

  clip-path: path(
    "M304.002,304.464V288h-16v25.56l3.992,2.312c27.144,15.728,44.008,44.896,44.008,76.128
				c0,24.144-9.584,46.664-26.984,63.408c-17.392,16.744-40.224,25.552-64.472,24.528c-45.56-1.736-83.48-40.264-84.52-85.864
				c-0.736-32.088,16.12-62.048,43.984-78.192l3.992-2.32V56c0-22.056,17.944-40,40-40c22.056,0,40,17.944,40,40v56h16V56
				c0-30.88-25.12-56-56-56s-56,25.12-56,56v248.456c-30.536,19.552-48.808,53.608-47.968,89.976
				c1.232,53.904,46.048,99.432,99.904,101.496c1.368,0.048,2.736,0.08,4.104,0.08c27.048,0,52.504-10.24,72.072-29.072
				c20.56-19.792,31.888-46.408,31.888-74.936C352.002,356.64,333.722,323.512,304.002,304.464zM224.002,96v228.176c-28.552,10.064-48,37.12-48,67.824c0,39.696,32.304,72,72,72s72-32.304,72-72
				c0-30.704-19.448-57.76-48-67.824V96H224.002z M304.002,392c0,30.88-25.12,56-56,56s-56-25.12-56-56
				c0-25.512,17.272-47.784,42-54.16l6-1.544V112h16v224.296l6,1.544C286.73,344.216,304.002,366.488,304.002,392z"
  );
  background-color: ${theme.neon};
`;
