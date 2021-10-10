import React, { useContext, useState } from "react";
import { Button } from "../../components/Button";
import { RadioInput } from "../../components/RadioInput";
import { TextInput } from "../../components/TextInput";
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
          <TextInput
            type="text"
            name="cardSearcher"
            label="Search For Any Card"
          />
          <Button label="Search" name="searchCard" />
        </SearchBar>
        <AdvancedSearch>
          <Colors>
            <RadioInput id="red" name="color" label="Red" />
            <RadioInput id="blue" name="color" label="Blue" />
            <RadioInput id="white" name="color" label="White" />
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
