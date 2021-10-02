import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  height: calc(100vh - 80px);
  transition: padding-left 350ms ease-in;

  @media (max-width: 1024px) {
    padding-left: 0px !important;
  }
`;

export const CardImage = styled.img`
  width: 240px;
  height: 350px;
`;
