import styled from "styled-components";

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
  background-color: #ff4d97;
  color: #fff;
  border: none;
`;
