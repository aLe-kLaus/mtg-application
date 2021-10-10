import styled from "styled-components";

export const Container = styled.div`
  button {
    width: 150px;
    height: 40px;
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
    border-radius: 4px;
    border: 0px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;

    :hover {
      transition: 200ms ease-in;
      background-color: ${(props) => props.theme.colors.purple};
    }
  }
`;
