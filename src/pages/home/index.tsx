import React, { useContext, useEffect, useState } from "react";
import { Context } from "../_app";
import { Container, Header } from "./styles";
import cardsServices from "../../services/cardsServices";
import { Title } from "../../components/Title";
import { FaEdit } from "react-icons/fa";

const Home = (): JSX.Element => {
  const { paddingLeft } = useContext(Context);

  return (
    <Container style={{ paddingLeft }}>
      <Header></Header>
    </Container>
  );
};

export default Home;
