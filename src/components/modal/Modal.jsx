import React from "react";
import { styled } from "styled-components";

function Modal({ setModalControl }) {
  // 모달창 끄기
  const closeModal = () => {
    setModalControl(false);
  };

  return (
    <Stdiv>
      <h4>
        닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요
      </h4>
      <StBtnGroup>
        <STBtn color="#D63031" onClick={closeModal}>
          닫기
        </STBtn>
        <STBtn color="#55EFC4">확인</STBtn>
      </StBtnGroup>
    </Stdiv>
  );
}

export default Modal;

const Stdiv = styled.div`
  border: none;
  border-radius: 8px;

  position: fixed;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 500px;
  height: 300px;

  text-indent: 7px;

  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 0 9999px;
  z-index: 100;
`;

const StBtnGroup = styled.div`
  position: absolute;
  top: 100%;
  left: 100%;
  transform: translate(-100%, -100%);
  display: flex;
  cursor: pointer;
  gap: 10px;

  padding: 0px 10px 10px 0px;
`;

const STBtn = styled.button`
  width: 120px;
  height: 50px;

  background-color: ${(props) => props.color};
  border-radius: 8px;
  border: none;
  color: white;
`;
