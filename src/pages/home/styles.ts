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
  justify-content: center;
  align-items: flex-end;
  width: 80%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  margin-top: 20px;
  background-color: ${(props) => props.theme.colors.black};
  border: 2px solid ${(props) => props.theme.colors.white};
  border-radius: 12px;
  position: relative;

  @media (max-width: 1300px) {
    width: 95%;
  }

  @media (max-width: 515px) {
    height: 140px;
  }
`;
