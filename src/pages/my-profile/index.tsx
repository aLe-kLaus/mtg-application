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
  EditIcon,
  Info,
} from "./styles";
import cardService from "../../services/cardService";
import { Title } from "../../components/Title";
import { FaEdit } from "react-icons/fa";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
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

const MyProfile = (): JSX.Element => {
  const { paddingLeft, userID, isUserLogged } = useContext(Context);
  const [favoriteCards, setFavoriteCards] = useState<CardsProps>([]);
  const [user, setUser] = useState<UserProps>();
  const router = useRouter();
  const [tradeCards, setTradeCards] = useState([]);

  const getUser = async () => {
    try {
      const response = await userServices.getUserById(userID);
      setUser(response.data[0]);
    } catch (err) {}
  };

  const getFavoriteCards = async () => {
    const queryedFavoriteCards: string[] = [];
    const response: any = await userServices.getUserById(userID);
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

  const getTradeCards = async () => {
    try {
      const response = await userServices.getUserCards(userID as string);
      setTradeCards(response.data);
    } catch (err) {}
  };

  useEffect(() => {
    getUser();
    setFavoriteCards([]);
    getFavoriteCards();
    getTradeCards();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (!isUserLogged) {
        router.push("/sign-in");
      }
    }, 200);
  }, []);

  return (
    <Container style={{ paddingLeft }}>
      <Header>
        <Profile>
          <Info>
            <Title title={user?.name as string} color="#FFFFFF" />
            <p>{user?.cellphone}</p>
            <span>{user?.email}</span>
          </Info>
          <img src="/magic.jpg" />
        </Profile>
        <Link href="/add-new-card">
          <EditIcon>
            <FaEdit />
          </EditIcon>
        </Link>
      </Header>
      <UserDescription>
        <FavoriteCards>
          <Title title="My Favorite Cards" color="#000000" />
          <div>
            {favoriteCards?.map((card, index) => {
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
        <ListCard>
          {tradeCards?.map((card: any, index: number) => {
            return (
              <li key={index}>
                {card.name}
                <Link href={`user-card?id=${card.id}`}>
                  <b>...more</b>
                </Link>
              </li>
            );
          })}
        </ListCard>
      </TradeCards>
    </Container>
  );
};

export default MyProfile;
