import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  transition: padding-left 350ms ease-in;

  @media (max-width: 1330px) {
    padding-left: 0px !important;
  }
`;

export const Header = styled.div`
  width: 85%;
  padding: 10px;

  @media (max-width: 1330px) {
    width: 100%;
  }
`;

export const SearchContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  padding: 10px;

  @media (max-width: 1330px) {
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

  button {
    @media (max-width: 555px) {
      width: 100px;
    }
  }
`;

export const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 20px 10px;
  margin: 0 auto;

  @media (max-width: 1330px) {
    width: 100%;
  }
`;

export const Users = styled.div`
  display: grid;
  grid-template-columns: 250px 250px 250px 250px;
  margin: 0 auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin-top: 20px;

  @media (max-width: 1100px) {
    grid-template-columns: 250px 250px 250px;
  }
  @media (max-width: 815px) {
    grid-template-columns: 250px 250px;
  }
  @media (max-width: 555px) {
    grid-template-columns: 250px;
  }
`;

export const User = styled.div`
  display: flex;
  width: 250px;
  height: 350px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const ProfilePicture = styled.div`
  width: 150px;
  height: 200px;
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  cursor: pointer;

  img {
    width: 140px;
    height: 190px;
    cursor: pointer;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;

  strong {
    font-size: 20px;
    text-align: center;
    cursor: pointer;
  }

  p {
    font-size: 18px;
    text-align: center;
  }

  span {
    font-size: 16px;
    text-align: center;
  }
`;

export const Favorite = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  cursor: pointer;
  right: 0;

  svg {
    width: 25px;
    height: 25px;
  }
`;
