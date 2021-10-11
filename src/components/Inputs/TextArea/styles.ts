import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  textarea {
    width: 100%;
    height: 100px;
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
    font-size: 20px;
    margin-bottom: 5px;
  }
`;
