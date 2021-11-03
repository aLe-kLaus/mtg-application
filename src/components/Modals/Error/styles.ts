import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  display: flex;
  background-color: rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  top: 0;
`;

export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 200px;
  position: relative;
  background-color: #fff;
  border: 2px solid red;
  border-radius: 10px;

  strong {
    font-size: 18px;
  }
`;

export const CloseModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: -10px;
  top: -10px;
  width: 40px;
  height: 30px;
  background-color: #000;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid red;

  svg {
    color: #fff;
  }
`;
