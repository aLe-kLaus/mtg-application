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

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 80%;
  height: 210px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  margin-top: 20px;
  background-color: ${(props) => props.theme.colors.black};
  border: 2px solid ${(props) => props.theme.colors.white};
  border-radius: 12px;
  position: relative;

  @media (max-width: 1300px) {
    width: 95%;
  }

  @media (max-width: 515px) {
    height: 140px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: -30px;

  div {
    display: flex;
    flex-direction: column;

    p {
      color: ${(props) => props.theme.colors.white};
    }

    span {
      color: ${(props) => props.theme.colors.white};
    }
  }
  @media (max-width: 515px) {
    margin-bottom: -10px;
  }

  img {
    margin-left: 10px;
    width: 175px;
    height: 175px;
    border-radius: 50%;
    border: 2px solid ${(props) => props.theme.colors.white};

    @media (max-width: 515px) {
      width: 120px;
      height: 120px;
    }
  }
`;

export const UserDescription = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  gap: 10px;

  @media (max-width: 1300px) {
    width: 95%;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: initial;
  }
`;

export const Interests = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;

  @media (max-width: 1024px) {
    width: 100%;
  }

  p {
    margin-top: 10px;
    text-align: justify;

    @media (max-width: 515px) {
      font-size: 14px;
    }
  }
`;

export const FavoriteCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;

  @media (max-width: 1024px) {
    width: 100%;
  }

  div {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
  }
`;

export const CardImage = styled.img`
  width: 210px;
  height: 310px;
  transition: 350ms ease-in;
  border-radius: 12px;
  margin-left: -100px;

  :first-child {
    margin-left: 0;
  }

  :hover {
    width: 240px;
    height: 350px;
    z-index: 100 !important;
  }

  @media (max-width: 1440px) {
    width: 170px;
    height: 250px;
    margin-left: -80px;

    :hover {
      width: 200px;
      height: 280px;
      z-index: 100 !important;
    }
  }

  @media (max-width: 660px) {
    width: 130px;
    height: 190px;
    margin-left: -60px;

    :hover {
      width: 140px;
      height: 210px;
      z-index: 100 !important;
    }
  }

  @media (max-width: 515px) {
    width: 90px;
    height: 130px;
    margin-left: -40px;
    border-radius: 4px;

    :hover {
      width: 110px;
      height: 155px;
      z-index: 100 !important;
    }
  }

  @media (max-width: 400px) {
    width: 72px;
    height: 110px;
    margin-left: -30px;
    border-radius: 4px;

    :hover {
      width: 90px;
      height: 135px;
      z-index: 100 !important;
    }
  }
`;

export const TradeCards = styled.div`
  width: 80%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 1300px) {
    width: 85%;
  }
`;

export const ListCard = styled.ul`
  list-style-type: disc;

  li {
    font-size: 18px;
    b {
      cursor: pointer;
    }
  }
`;
