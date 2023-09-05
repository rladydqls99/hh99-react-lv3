import React from "react";
import { styled } from "styled-components";

function Input({ title1, title2, setTitle }) {
  const onChange = (event) => {
    let value = event.target.value;
    if (title1 === "이름") {
      setTitle(value);
    }
    if (title1 === "가격") {
      value = +value.replaceAll(",", "");
      const formatValue = value.toLocaleString("ko-KR");

      isNaN(value) ? setTitle(0) : setTitle(formatValue);
    }
  };

  return (
    <div>
      {title1}{" "}
      <StInput value={title2} onChange={onChange} type="text"></StInput>
    </div>
  );
}

export default Input;

// styled-components --------------------------------------------------------

// input 태그 css
const StInput = styled.input`
  height: 40px;
  width: 200px;

  border-radius: 8px;
  border: 1px solid;

  font-size: 15px;
  text-indent: 7px;

  outline-color: #55efc4;
`;
