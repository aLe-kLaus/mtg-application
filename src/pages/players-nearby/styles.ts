import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: 350ms ease-in;
  flex-direction: column;

  @media (max-width: 1024px) {
    padding-left: 0px !important;
  }
`;

export const SeachContainer = styled.div`
  width: 80%;
  display: flex;
  padding: 10px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const MapContainer = styled.div`
  width: 80%;
  display: flex;

  .gm-svpc,
  .gm-style-mtc,
  .gm-style-cc {
    display: none;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const UserToolTip = styled.div`
  width: 50px;
  height: 50px;
  background-color: #000;
`;
