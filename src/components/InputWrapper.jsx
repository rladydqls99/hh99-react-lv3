import React, { useState } from "react";
import Input from "./input/Input";
import { styled } from "styled-components";

function InputWrapper() {
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

export default InputWrapper;

// styled-components ------------------------------------------------------

// input창과 저장버튼을 감싸는 Div CSS
const StInputDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  gap: 20px;
`;

// button CSS
const StBtn = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  height: 40px;
  width: 100px;

  background-color: #55efc4;
`;
