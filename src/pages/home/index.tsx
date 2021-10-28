import React, { useContext, useEffect, useState } from "react";
import { Context } from "../_app";
import { Container, Header } from "./styles";
import cardsServices from "../../services/cardService";
import { Title } from "../../components/Title";
import { FaEdit } from "react-icons/fa";

const Home = (): JSX.Element => {
  const { paddingLeft, setIsUserLogged, setUserID } = useContext(Context);

  useEffect(() => {
    setIsUserLogged(
      !!window.sessionStorage.getItem("mtg-user-token") as boolean
    );
    setUserID(window.sessionStorage.getItem("mtg-user-token") ?? "");
  }, []);

  return (
    <Container style={{ paddingLeft }}>
      <Header></Header>
    </Container>
  );
};

export default Home;
