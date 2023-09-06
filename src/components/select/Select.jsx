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
  top: 80%;
  left: 0%;
  right: 75%;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: white;
  list-style: none;

  width: 300px;
  padding: 0px 30px 0px 30px;

  li {
    padding: 10px;

    cursor: pointer;
    &:hover {
      background-color: #efefef;
    }
  }
`;
