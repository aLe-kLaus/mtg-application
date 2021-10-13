import React, { useContext, useState } from "react";
import { Button } from "../../components/Button";
import { Radio } from "../../components/Inputs/Radio";
import { Text } from "../../components/Inputs/Text";
import { Context } from "../_app";
import {
  AdvancedSearch,
  Container,
  Header,
  Colors,
  ResponseCards,
  Card,
  SearchBar,
} from "./styles";

const CardSearcher = (): JSX.Element => {
  const { paddingLeft } = useContext(Context);

  return (
    <Container style={{ paddingLeft }}>
      <Header>
        <SearchBar>
          <Text type="text" name="cardSearcher" label="Search For Any Card" />
          <Button label="Search" name="searchCard" />
        </SearchBar>
        <AdvancedSearch>
          <Colors>
            <Radio id="red" name="color" label="Red" />
            <Radio id="blue" name="color" label="Blue" />
            <Radio id="white" name="color" label="White" />
          </Colors>
        </AdvancedSearch>
      </Header>
      <ResponseCards>
        <Card></Card>
      </ResponseCards>
    </Container>
  );
};

export default CardSearcher;
