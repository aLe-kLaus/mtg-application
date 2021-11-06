import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Button } from "../../components/Button";
import { Title } from "../../components/Title";
import cardService from "../../services/cardService";
import userServices from "../../services/userServices";
import { Context } from "../_app";
import {
  Container,
  Header,
  UsersContainer,
  SearchBar,
  SearchContainer,
  User,
  ProfilePicture,
  Users,
  Info,
  Favorite,
} from "./styles";

const CardSearcher = (): JSX.Element => {
  const { paddingLeft, isUserLogged, userID } = useContext(Context);
  const [searchingCard, setSearchingCard] = useState("");
  const [searchedCard, setSearchedCard] = useState("");
  const [usersNotFound, setUsersNotFound] = useState(false);
  const [userFavoriteCards, setUserFavoriteCards] = useState<any>([]);
  console.log(
    "🚀 ~ file: index.tsx ~ line 28 ~ userFavoriteCards",
    userFavoriteCards
  );
  const [cardInfo, setCardInfo] = useState<any>({});
  const [cards, setCards] = useState([]);

  const handleSearch = async () => {
    setSearchedCard(searchingCard);
    try {
      const response: any = await userServices.getSeachedCard(
        searchingCard.toLowerCase()
      );
      if (response?.data?.length === 0) {
        setCards([]);
        setUsersNotFound(true);
      } else {
        setCards(response.data);
        setUsersNotFound(false);
        getCardImage(searchingCard.toLowerCase());
      }
    } catch (error) {}
  };

  const getCardImage = async (cardName: string) => {
    try {
      const cardResponse: any = await cardService.getCardsByName(cardName);
      setCardInfo(cardResponse.data.cards[0]);
    } catch (err) {}
  };

  const getUserFavoriteCards = async () => {
    if (userID) {
      try {
        const response = await userServices.getFavoriteCards(userID);
        setUserFavoriteCards(response.data);
      } catch {}
    }
  };

  const addFavoriteCard = async (card_id: string) => {
    try {
      const response = await userServices.createFavoriteCard(userID, card_id);
      console.log(
        "🚀 ~ file: index.tsx ~ line 67 ~ addFavoriteCard ~ response",
        response
      );
      getUserFavoriteCards();
    } catch {}
  };

  const deleteFavoriteCard = async (card_id: string) => {
    try {
      const response = await userServices.deleteFavoriteCard(userID, card_id);
      console.log(
        "🚀 ~ file: index.tsx ~ line 82 ~ deleteFavoriteCard ~ response",
        response
      );
      getUserFavoriteCards();
    } catch {}
  };

  useEffect(() => {
    getUserFavoriteCards();
  }, []);

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
            value={searchingCard}
            onChange={(evt) => setSearchingCard(evt.target.value)}
          />
          <Button label="Search" name="searchCard" onClick={handleSearch} />
        </SearchBar>
      </SearchContainer>
      <UsersContainer>
        {!usersNotFound && cards.length > 0 && (
          <Title
            title={`All of the ${searchedCard} available!`}
            color="#000000"
          />
        )}
        {!usersNotFound ? (
          <Users>
            {cards.map((card: any, index) => {
              return (
                <User key={index}>
                  <Link
                    href={`/user-profile?user=${card.user_cards}`}
                    key={index}
                  >
                    <ProfilePicture>
                      <img
                        src={cardInfo?.imageUrl ?? "/magic-card-back.jpg"}
                        alt=""
                      />
                    </ProfilePicture>
                  </Link>
                  <Info>
                    <Link
                      href={`/user-profile?user=${card.user_cards}`}
                      key={index}
                    >
                      <strong style={{ textTransform: "capitalize" }}>
                        {card.name}
                      </strong>
                    </Link>
                    <span>{card.condition}</span>
                    <p>R$ {card.price}</p>
                    <p>
                      Go to this{" "}
                      <Link
                        href={`/user-profile?user=${card.user_cards}`}
                        key={index}
                      >
                        <b
                          style={{
                            textDecoration: "underline",
                            cursor: "pointer",
                          }}
                        >
                          User
                        </b>
                      </Link>
                    </p>
                  </Info>
                  {isUserLogged && (
                    <Favorite>
                      {userFavoriteCards?.find(
                        (fav: any) => fav.favorite_cards === card.id
                      ) ? (
                        <AiFillHeart
                          onClick={() => deleteFavoriteCard(card.id)}
                        />
                      ) : (
                        <AiOutlineHeart
                          onClick={() => addFavoriteCard(card.id)}
                        />
                      )}
                    </Favorite>
                  )}
                </User>
              );
            })}
          </Users>
        ) : (
          <Title
            title={`We don't found any users that have the card: ${searchedCard}`}
            color="#000"
          ></Title>
        )}
      </UsersContainer>
    </Container>
  );
};

export default CardSearcher;
