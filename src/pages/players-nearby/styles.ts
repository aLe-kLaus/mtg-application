import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: 350ms ease-in;

  @media (max-width: 1024px) {
    padding-left: 0px !important;
  }
`;
