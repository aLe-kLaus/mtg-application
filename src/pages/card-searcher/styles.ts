import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
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

export const SearchContainer = styled.div`
  margin: 0 auto;
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
  margin: 0 auto;

  input {
    width: 100%;
    height: 40px;
    border: 1px solid ${(props) => props.theme.colors.black};
    outline: 0px;
    font-size: 16px;
    padding: 0 10px;
    border-radius: 10px;

    :focus {
      border: 2px solid ${(props) => props.theme.colors.purple};
    }
  }
`;

export const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  padding: 20px 10px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const User = styled.div`
  display: flex;
`;
