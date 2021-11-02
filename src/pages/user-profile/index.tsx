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
  TradeCards,
  ListCard,
} from "./styles";
import cardService from "../../services/cardService";
import { Title } from "../../components/Title";
import { useRouter } from "next/dist/client/router";
import userServices from "../../services/userServices";

type CardProps = {
  name: string;
  imageUrl: string;
};

type UserProps = {
  age: string;
  cellphone: string;
  city: string;
  email: string;
  estate: string;
  favorite_cards: string;
  id: string;
  interests: string;
  name: string;
};

type CardsProps = CardProps[];

const UserProfile = (): JSX.Element => {
  const { paddingLeft } = useContext(Context);
  const [favoriteCards, setFavoriteCards] = useState<CardsProps>([]);
  const [user, setUser] = useState<UserProps>();
  const router = useRouter();
  const { query } = router;
  const userId = query.user;

  const getUser = async () => {
    try {
      const response = await userServices.getUserById(userId as string);
      setUser(response.data[0]);
    } catch {}
  };

  const getFavoriteCards = async () => {
    const queryedFavoriteCards: string[] = [];
    const response: any = await userServices.getUserById(userId as string);
    setUser(response.data[0]);
    const favorite_cards = response.data[0]?.favorite_cards.split(";");
    favorite_cards?.forEach((card: string) => {
      queryedFavoriteCards.push(card.toLocaleLowerCase());
    });

    queryedFavoriteCards.forEach((card) => {
      cardService.getCardsByName(card).then((response: any) => {
        setFavoriteCards((prevState) => [...prevState, response.data.cards[0]]);
      });
    });
  };

  useEffect(() => {
    getUser();
    setFavoriteCards([]);
    getFavoriteCards();
  }, [query]);

  return (
    <Container style={{ paddingLeft }}>
      <Header>
        <Profile>
          <div>
            <Title title={user?.name as string} color="#FFFFFF" />
            <p>{user?.cellphone}</p>
            <span>{user?.email}</span>
          </div>
          <img src="/magic.jpg" />
        </Profile>
      </Header>
      <UserDescription>
        <FavoriteCards>
          <Title title="Favorite Cards" color="#000000" />
          <div>
            {favoriteCards
              ?.sort((a, b) =>
                a?.name.toLowerCase() !== b?.name.toLowerCase()
                  ? a?.name.toLowerCase() < b?.name.toLowerCase()
                    ? -1
                    : 1
                  : 0
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
          <p>{user?.interests}</p>
        </Interests>
      </UserDescription>
      <TradeCards>
        <Title title="Cards To Trade/Sell" color="#000000" />
        {/* <ListCard>
          {props?.cardsToTrade
            ?.sort((a: string, b: string) =>
              a.toLowerCase() !== b.toLowerCase()
                ? a.toLowerCase() < b.toLowerCase()
                  ? -1
                  : 1
                : 0
            )
            .map((card: string, index: number) => {
              return <li key={index}>{card}</li>;
            })}
        </ListCard> */}
      </TradeCards>
    </Container>
  );
};

export default UserProfile;
