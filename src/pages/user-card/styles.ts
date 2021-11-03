import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 350ms ease-in;

  div {
    padding: 10px;
  }

  @media (max-width: 1024px) {
    padding-left: 0px !important;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 10px auto;
  display: flex;
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const CardImage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-bottom: 20px;
    width: 300px;
    height: 390px;

    @media (max-width: 700px) {
      margin-top: 10px;
      width: 250px;
      height: 320px;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column-reverse;
  }
`;

export const CardInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  p {
    font-size: 20px;
    font-weight: 600;

    b {
      color: ${(props) => props.theme.colors.purple};
    }
  }
`;
