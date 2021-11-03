import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  transition: 350ms ease-in;
  padding: 10px;

  @media (max-width: 1024px) {
    padding-left: 0px !important;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 900px;
  padding: 10px;
  gap: 20px;
  margin-top: 30px;

  a {
    color: ${(props) => props.theme.colors.black};
    transition: 200ms ease-in;

    :hover {
      color: ${(props) => props.theme.colors.purple};
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;

    p {
      font-size: 17px;
      margin-bottom: 5px;
      color: red;

      span {
        margin: 0 5px;
        color: black;
      }
    }
  }

  input {
    width: 100%;
    height: 35px;
    border: 1px solid ${(props) => props.theme.colors.black};
    outline: 0px;
    font-size: 16px;
    padding: 0 10px;
    border-radius: 10px;

    :focus {
      border: 2px solid ${(props) => props.theme.colors.purple};
    }
  }

  label {
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 5px;
  }

  h3 {
    font-size: 12px;
    margin-top: 10px;
  }
`;

export const SideBySide = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 515px) {
    flex-direction: column;
  }
`;
