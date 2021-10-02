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

export const Header = styled.div`
  width: 85%;
  padding: 10px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  button {
  }
`;

export const AdvancedSearch = styled.div`
  width: 100%;
`;

export const Colors = styled.div`
  display: flex;
`;

export const ResponseCards = styled.div``;

export const Card = styled.div``;
