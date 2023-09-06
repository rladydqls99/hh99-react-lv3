import React, { useState } from "react";
import { styled } from "styled-components";
import Select from "./select/Select";
import Select2 from "./select/Select2";

function SelectWrapper() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const [selectedOption, setSelectedOption] = useState("자바");
  const [selectedOption2, setSelectedOption2] = useState("리액트");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  const handleOptionClick2 = (option) => {
    setSelectedOption2(option);
    setIsOpen2(false);
  };

  return (
    <StSelectDiv>
      <h1>Select</h1>
      <DropdownContainer>
        {/* <SelectedOption onClick={toggleDropdown}>
          {selectedOption}
          <p>👇</p>
          {isOpen && <Select handleOptionClick={handleOptionClick} />}
        </SelectedOption> */}
        <Select />

        <SelectedOption2 onClick={toggleDropdown2}>
          {selectedOption2}
          {isOpen2 && <Select2 handleOptionClick2={handleOptionClick2} />}
          <p>👇</p>
        </SelectedOption2>
      </DropdownContainer>
    </StSelectDiv>
  );
}

export default SelectWrapper;

const StSelectDiv = styled.div`
  border: 3px solid rgb(221, 221, 221);
  height: 200px;
  overflow: hidden;
  margin-top: 50px;
`;

const DropdownContainer = styled.div`
  display: flex;
`;

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
  z-index: 100;
`;

const SelectedOption2 = styled.div`
  cursor: pointer;
  position: relative;
  left: 27%;
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
