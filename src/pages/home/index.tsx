import React, { useContext, useEffect, useState } from "react";
import { Context } from "../_app";
import {
  Container,
  CardImage,
  FavoriteCards,
  Header,
  Profile,
  UserDescription,
  Interests,
} from "./styles";
import cardsServices from "../../services/cardsServices";
import { Title } from "../../components/Title";

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
      <Header>
        <div id="wrapper" />
        <Profile>
          <div>
            <Title title="Alessom Klaus" color="#FFFFFF" />
            <p>(51) 99999-9999</p>
            <span> test@example.com</span>
          </div>
          <img src="https://i.kym-cdn.com/photos/images/original/001/842/159/61b.jpg" />
        </Profile>
      </Header>
      <UserDescription>
        <FavoriteCards>
          <Title title="My Favorite Cards" color="#000000" />
          <div>
            {favoriteCards
              ?.sort((a, b) =>
                a?.name !== b?.name ? (a?.name < b?.name ? -1 : 1) : 0
              )
              .map((card, index) => {
                return (
                  <CardImage
                    key={index}
                    src={card?.imageUrl ?? "/magic-card-back.jpg"}
                    style={{
                      zIndex: index,
                    }}
                  />
                );
              })}
          </div>
        </FavoriteCards>
        <Interests>
          <Title title="My Interests" color="#000000" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio
            pellentesque diam volutpat commodo sed egestas egestas fringilla
            phasellus. Risus viverra adipiscing at in tellus integer. Adipiscing
            tristique risus nec feugiat in fermentum. Orci dapibus ultrices in
            iaculis nunc sed. Est sit amet facilisis magna. Adipiscing elit ut
            aliquam purus sit amet luctus venenatis lectus. Lorem ipsum dolor
            sit amet consectetur adipiscing. Duis ut diam quam nulla porttitor
            massa id neque aliquam. Aliquam sem et tortor consequat id porta.
            Curabitur vitae nunc sed velit. Placerat vestibulum lectus mauris
            ultrices eros in cursus turpis. Fermentum dui faucibus in ornare
            quam. Parturient montes nascetur ridiculus mus mauris. Mauris nunc
            congue nisi vitae. Est ante in nibh mauris cursus mattis.
          </p>
        </Interests>
      </UserDescription>
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
    "dawdawda",
  ];

  return {
    favoriteCardsFromApi,
  };
};

export default Home;
