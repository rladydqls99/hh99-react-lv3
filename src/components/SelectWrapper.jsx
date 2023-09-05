import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import Select from "./select/Select";

function SelectWrapper() {
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
    <>
      <DropdownContainer>
        <SelectedOption onClick={toggleDropdown}>
          {selectedOption}
          <p>👇</p>
        </SelectedOption>
        {isOpen && <Select handleOptionClick={handleOptionClick} />}
      </DropdownContainer>
    </>
  );
}

export default SelectWrapper;

const DropdownContainer = styled.div`
  position: relative;
  width: 300px;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: visible; // Ensure this is set to visible
`;

const SelectedOption = styled.div`
  cursor: pointer;
  border-radius: 8px;

  flex-direction: row;
  display: flex;
  align-items: center;
  padding: 0px 10px 0px 10px;
  justify-content: center;

  p {
    margin-left: auto;
  }
`;
