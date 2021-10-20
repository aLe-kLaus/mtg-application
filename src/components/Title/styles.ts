import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  label {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
    margin: 0 auto;

    @media (max-width: 660px) {
      font-size: 18px;
    }
  }
`;
