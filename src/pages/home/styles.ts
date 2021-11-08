import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: padding-left 350ms ease-in;

  @media (max-width: 1400px) {
    padding-left: 0px !important;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 40px;

  strong {
    font-size: 38px;
    font-weight: 600;
    font-family: monospace;
  }
  div {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;

    @media (max-width: 470px) {
      flex-direction: column;
    }
    img {
      width: 75px;
      height: 75px;
    }
  }
`;
