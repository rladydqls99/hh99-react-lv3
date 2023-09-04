import React from "react";
import { StBtn, StBtnSize, StBtnDiv } from "./BtnCss";

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
