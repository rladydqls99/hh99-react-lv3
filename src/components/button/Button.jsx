import React from "react";
import { styled } from "styled-components";

function Button({ title, btncolor }) {
  const onClick = () => {
    title === "Large Primary Button"
      ? alert("버튼을 만들어보세요")
      : prompt("어렵나요?");
  };
  return (
    <>
      <StBtnDiv>
        <StBtn onClick={onClick} btncolor={btncolor}>
          {title === "Large Primary Button" ? title + " >" : title + " 🔔"}
        </StBtn>
        <StBtnSize width="150px" height="40px" btncolor={btncolor}>
          Medium
        </StBtnSize>
        <StBtnSize width="100px" height="30px" btncolor={btncolor}>
          Small
        </StBtnSize>
      </StBtnDiv>
    </>
  );
}

export default Button;

// styled-components ------------------------------------------------------

// button 3개를 감싸는 div
const StBtnDiv = styled.div`
  display: flex;
  margin-bottom: 10px;
  gap: 10px;
`;

// 첫 번째 버튼
const StBtn = styled.button`
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

// 두, 세번째 버튼
const StBtnSize = styled.button`
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
