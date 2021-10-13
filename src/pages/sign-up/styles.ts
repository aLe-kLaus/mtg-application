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

export const PasswordContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  svg {
    cursor: pointer;
    width: 20px;
    height: 20px;
    margin-left: -30px;
    transition: 100ms ease-in;

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
    height: 50px;
    border: 1px solid ${(props) => props.theme.colors.black};
    outline: 0px;
    font-size: 16px;
    padding: 0 10px;
    border-radius: 4px;

    :focus {
      border: 2px solid ${(props) => props.theme.colors.purple};
    }
  }

  textarea {
    width: 100%;
    max-width: 100%;
    min-width: 200px;
    height: 100px;
    min-height: 200px;
    border: 1px solid ${(props) => props.theme.colors.black};
    outline: 0px;
    font-size: 16px;
    padding: 10px;
    border-radius: 4px;

    :focus {
      border: 2px solid ${(props) => props.theme.colors.purple};
    }
  }

  label {
    font-size: 17px;
    margin-bottom: 5px;
  }
`;
