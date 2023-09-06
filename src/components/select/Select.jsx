import React from "react";
import { styled } from "styled-components";
import { useState } from "react";

function Select() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("자바");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <SelectedOption onClick={toggleDropdown}>
      {selectedOption}
      <p>👇</p>
      {isOpen && (
        <OptionsList>
          <li onClick={() => handleOptionClick("자바")}>자바</li>
          <li onClick={() => handleOptionClick("리액트")}>리액트</li>
          <li onClick={() => handleOptionClick("리액트 네이티브")}>
            리액트 네이티브
          </li>
          <li onClick={() => handleOptionClick("스프링")}>스프링</li>
        </OptionsList>
      )}
    </SelectedOption>
  );
}

export default Select;

const SelectedOption = styled.div`
  cursor: pointer;
  position: absolute;
  flex-direction: row;
  justify-content: center;
  display: flex;
  align-items: center;

  padding: 0px 30px 0px 30px;
  margin-left: 10px;
  justify-content: space-between;

  width: 300px;
  height: 40px;
  border: 2px solid #ddd;
  border-radius: 10px;
`;

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
    padding: 8px;

    cursor: pointer;
    &:hover {
      background-color: #efefef;
    }
  }
`;
