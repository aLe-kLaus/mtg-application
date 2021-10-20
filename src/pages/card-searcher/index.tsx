import React, { useContext, useState } from "react";
import { Button } from "../../components/Button";
import { Title } from "../../components/Title";
import { Context } from "../_app";
import {
  Container,
  Header,
  UsersContainer,
  SearchBar,
  SearchContainer,
} from "./styles";

const CardSearcher = (): JSX.Element => {
  const { paddingLeft } = useContext(Context);
  const [searchingCard, setSearchingCard] = useState("");

  return (
    <Container style={{ paddingLeft }}>
      <Header>
        <Title
          title="Here, you can search for any card, and see if anyone have it in order to sell or trade with you!"
          color="#000000"
        />
      </Header>
      <SearchContainer>
        <SearchBar>
          <input
            type="text"
            name="cardSearcher"
            placeholder="Search For Any Card"
            value={searchingCard}
            onChange={(evt) => setSearchingCard(evt.target.value)}
          />
          <Button label="Search" name="searchCard" />
        </SearchBar>
      </SearchContainer>
      <UsersContainer></UsersContainer>
    </Container>
  );
};

export default CardSearcher;
