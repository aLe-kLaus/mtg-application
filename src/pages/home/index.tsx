import React, { useContext, useEffect, useState } from "react";
import { Context } from "../_app";
import { Container, Header } from "./styles";

const Home = (): JSX.Element => {
  const { paddingLeft, setIsUserLogged, setUserID } = useContext(Context);

  return (
    <Container style={{ paddingLeft }}>
      <Header></Header>
    </Container>
  );
};

export default Home;
