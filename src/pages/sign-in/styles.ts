import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 80px);
  transition: padding-left 350ms ease-in;

  @media (max-width: 1024px) {
    padding-left: 0px !important;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 700px;
  height: 300px;
  padding: 10px;
`;
