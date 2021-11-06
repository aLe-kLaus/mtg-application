import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transition: 350ms ease-in;
  flex-direction: column;
  position: relative;

  @media (max-width: 1024px) {
    padding-left: 0px !important;
  }
`;

export const SeachContainer = styled.div`
  width: 400px;
  display: flex;
  padding: 10px;
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  transition: 350ms ease-in;

  div {
    label {
      font-weight: 700;
    }
  }

  @media (max-width: 1024px) {
    width: 310px;
    margin-left: 0px !important;

    div {
      label {
        font-size: 14px;
      }
    }
  }
`;

export const UserToolTip = styled.div`
  width: 50px;
  height: 50px;
  background-color: #000;
`;
