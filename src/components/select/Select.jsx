import React from "react";
import { styled } from "styled-components";

function Select({ handleOptionClick }) {
  return (
    <OptionsList>
      <li onClick={() => handleOptionClick("자바")}>자바</li>
      <li onClick={() => handleOptionClick("리액트")}>리액트</li>
      <li onClick={() => handleOptionClick("리액트 네이티브")}>
        리액트 네이티브
      </li>
      <li onClick={() => handleOptionClick("스프링")}>스프링</li>
    </OptionsList>
  );
}

export default Select;

const OptionsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: white;
  z-index: 2; // Make sure the dropdown is layered on top

  li {
    padding: 10px;
    cursor: pointer;
    &:hover {
      background-color: #efefef;
    }
  }
`;
