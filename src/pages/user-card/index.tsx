import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import cardService from "../../services/cardService";
import userServices from "../../services/userServices";
import { CardContainer, CardImage, CardInfo, Container } from "./styles";

const UserCard = () => {
  const [card, setCard] = useState<any>({});
  const [cardInfo, setCardInfo] = useState<any>({});
  const router = useRouter();
  const { query } = router;
  const cardId = query.id;

  const getCard = async () => {
    try {
      const response = await userServices.getCard(cardId as string);
      setCard(response.data[0]);
    } catch (err) {}
  };

  const getCardImage = async () => {
    try {
      const response: any = await userServices.getCard(cardId as string);
      const cardResponse: any = await cardService.getCardsByName(
        response.data[0].name
      );
      setCardInfo(cardResponse.data.cards[0]);
    } catch (err) {}
  };

  useEffect(() => {
    getCard();
    getCardImage();
  }, [query]);
  return (
    <Container>
      <div>
        <CardContainer>
          <CardImage>
            <img src={cardInfo?.imageUrl ?? "/magic-card-back.jpg"} alt="" />
            <span>Illustrative Image</span>
          </CardImage>
          <CardInfo>
            <p>
              {card?.name} - <b>R$ {card?.price}</b>
            </p>
            <p>
              Condition: <b>{card?.condition}</b>
            </p>
            <p>
              Set: <b>{card?.set}</b>
            </p>
            <p>
              Complement: <b>{card?.complement}</b>
            </p>
          </CardInfo>
        </CardContainer>
      </div>
    </Container>
  );
};

export default UserCard;
