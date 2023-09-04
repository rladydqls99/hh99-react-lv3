import React from "react";
import { StInput } from "./InputCss";

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
