import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { Title } from "../../components/Title";
import cardService from "../../services/cardService";
import userServices from "../../services/userServices";
import {
  Favorite,
  Info,
  ProfilePicture,
  User,
  Users,
  UsersContainer,
} from "../card-searcher/styles";
import { Context } from "../_app";
import { Container } from "./styles";

const MyFavCards = () => {
  const [userFavoriteCards, setUserFavoriteCards] = useState<any>([]);
  const { isUserLogged, userID } = useContext(Context);
  const router = useRouter();

  const getUserFavoriteCards = async () => {
    try {
      const response: any = await userServices.getFavoriteCards(userID);
      response.data.forEach(async (fav: any) => {
        const cardResp = await userServices.getCard(fav.favorite_cards);
        const data: any = cardResp.data[0];
        const infoResp: any = await cardService.getCardsByName(data.name);
        const infoData: any = infoResp.data.cards[0];
        const card: any = { card: data, cardInfo: infoData };
        setUserFavoriteCards((prevState: any) => [...prevState, card]);
      });
    } catch {}
  };

  const deleteFavoriteCard = async (card_id: string) => {
    try {
      const response = await userServices.deleteFavoriteCard(userID, card_id);
      setUserFavoriteCards([]);
      getUserFavoriteCards();
    } catch {}
  };

  useEffect(() => {
    getUserFavoriteCards();
    setUserFavoriteCards([]);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (!isUserLogged) {
        router.push("/sign-in");
      }
    }, 200);
  }, []);
  return (
    <Container>
      <UsersContainer>
        {userFavoriteCards.length > 0 && (
          <Title title={`Your Favorite Cards`} color="#000000" />
        )}
        {userFavoriteCards.length > 0 ? (
          <Users>
            {userFavoriteCards.map((card: any, index: any) => {
              return (
                <User key={index}>
                  <Link href={`/user-card?id=${card.card.id}`} key={index}>
                    <ProfilePicture>
                      <img
                        src={card.cardInfo?.imageUrl ?? "/magic-card-back.jpg"}
                        alt=""
                      />
                    </ProfilePicture>
                  </Link>
                  <Info>
                    <Link href={`/user-card?id=${card.card.id}`} key={index}>
                      <strong style={{ textTransform: "capitalize" }}>
                        {card.card.name}
                      </strong>
                    </Link>
                    <span>{card.card.condition}</span>
                    <p>R$ {card.card.price}</p>
                    <p>
                      Go to card{" "}
                      <Link
                        href={`/user-profile?user=${card.card.user_cards}`}
                        key={index}
                      >
                        <b
                          style={{
                            textDecoration: "underline",
                            cursor: "pointer",
                          }}
                        >
                          Owner
                        </b>
                      </Link>
                    </p>
                  </Info>
                  <Favorite>
                    <AiFillHeart
                      onClick={() => deleteFavoriteCard(card.card.id)}
                    />
                  </Favorite>
                </User>
              );
            })}
          </Users>
        ) : (
          <Title
            title={`You don't have any favorites cards yet!`}
            color="#000"
          />
        )}
      </UsersContainer>
    </Container>
  );
};

export default MyFavCards;
