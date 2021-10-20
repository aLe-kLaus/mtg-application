import React, { useContext } from "react";
import { Context } from "../_app";
import { Container } from "./styles";

const PlayerNearby = () => {
  const { paddingLeft } = useContext(Context);
  return (
    <Container style={{ paddingLeft }}>
      <p>Test</p>
    </Container>
  );
};

export default PlayerNearby;
