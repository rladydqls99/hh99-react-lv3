import { styled } from "styled-components";

export const StBtnDiv = styled.div`
  display: flex;
  margin-bottom: 10px;
  gap: 10px;
`;

export const StBtn = styled.button`
  border: 3px solid ${(props) => props.btncolor};
  border-radius: 8px;
  background-color: white;

  cursor: pointer;

  height: 50px;
  width: 200px;
  font-weight: 600;

  &:active {
    box-shadow: 1px 1px 20px #ddd;
    filter: brightness(0.9);
  }
`;

export const StBtnSize = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${(props) => props.btncolor};
  height: ${(props) => props.height};
  width: ${(props) => props.width};

  &:active {
    box-shadow: 1px 1px 20px #ddd;
    filter: brightness(0.9);
  }
`;
