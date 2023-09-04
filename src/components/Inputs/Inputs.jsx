import React, { useState } from "react";
import Input from "./Input";
import { StInputDiv, StBtn } from "./InputCss";

function Inputs() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const saveButton = () => {
    if (!name.length || !price.length) {
      alert("이름과 가격 모두 입력해주세요!!");
      return;
    }
    alert(`name: ${name} , price: ${price}`);

    setName("");
    setPrice(0);
  };
  return (
    <>
      <h1>Input</h1>
      <StInputDiv>
        <Input title1="이름" title2={name} setTitle={setName}></Input>
        <Input title1="가격" title2={price} setTitle={setPrice}></Input>
        <StBtn onClick={saveButton}>저장</StBtn>
      </StInputDiv>
    </>
  );
}

export default Inputs;
