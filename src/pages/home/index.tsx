import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../_app";
import { Container, CardImage } from "./styles";
import cardsServices from "../../services/cardsServices";

type CardProps = {
  name: string;
  imageUrl: string;
};

type CardsProps = CardProps[];

const Home = (props: any): JSX.Element => {
  const { paddingLeft } = useContext(Context);
  const [favoriteCards, setFavoriteCards] = useState<CardsProps>([]);

  const getFavoriteCards = () => {
    const queryedFavoriteCards: string[] = [];
    props.favoriteCardsFromApi.forEach((card: string) => {
      queryedFavoriteCards.push(card.replace(" ", "_").toLocaleLowerCase());
    });

    queryedFavoriteCards.forEach((card) => {
      cardsServices.getCardsByName(card).then((response: any) => {
        setFavoriteCards((prevState) => [...prevState, response.data.cards[0]]);
      });
    });
  };

  useEffect(() => {
    getFavoriteCards();
    setFavoriteCards([]);
  }, []);

  return (
    <Container style={{ paddingLeft }}>
      {favoriteCards
        ?.sort((a, b) => (a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0))
        .map((card, index) => {
          return (
            <CardImage
              src={card.imageUrl}
              alt=""
              style={{
                zIndex: index,
                marginRight: index * -50,
              }}
            />
          );
        })}
    </Container>
  );
};

Home.getInitialProps = async () => {
  const favoriteCardsFromApi = [
    "Black Lotus",
    "Lightning Bolt",
    "Mox Diamond",
    "Cerulean Drake",
    "Drakuseth, Maw of Flames",
  ];

  return {
    favoriteCardsFromApi,
  };
};

export default Home;
