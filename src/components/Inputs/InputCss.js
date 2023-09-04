import { styled } from "styled-components";

export const StInputDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  gap: 20px;
`;

export const StBtn = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  height: 30px;
  width: 100px;

  background-color: #55efc4;
`;

export const StInput = styled.input`
  height: 40px;
  width: 200px;

  border-radius: 8px;
  border: 1px solid;

  font-size: 15px;
  text-indent: 7px;

  outline-color: #55efc4;
`;
