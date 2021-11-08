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
