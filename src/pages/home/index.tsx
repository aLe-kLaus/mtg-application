import React, { useContext, useEffect, useState } from "react";
import { Context } from "../_app";
import { Container, Header } from "./styles";

const Home = (): JSX.Element => {
  const { paddingLeft } = useContext(Context);

  return (
    <Container style={{ paddingLeft }}>
      <Header>
        <strong>The Gathering</strong>
        <div>
          <img src="/white_mana.png" alt="" />
          <img src="/blue_mana.png" alt="" />
          <img src="/black_mana.png" alt="" />
          <img src="/red_mana.png" alt="" />
          <img src="/green_mana.png" alt="" />
        </div>
        <strong style={{ fontSize: 18 }}>
          A ReactJS and NodeJS Application made by Alessom Klaus e Ghabriel!
          Bender Mutti
        </strong>
      </Header>
    </Container>
  );
};

export default Home;
