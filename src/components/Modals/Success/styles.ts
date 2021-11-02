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
  flex-direction: column;
  width: 300px;
  height: 200px;
  position: relative;
  background-color: #fff;
  border: 2px solid green;
  border-radius: 10px;
  gap: 30px;

  span {
    cursor: pointer;
    color: green;
  }

  span:hover {
    text-decoration: underline;
  }

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
  border: 2px solid green;

  svg {
    color: #fff;
  }
`;
