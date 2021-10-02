import { cardsAPI } from "./apis";

export default {
  getCardsByName(card: string) {
    const response = cardsAPI.get(`?name=${card}`);
    return response;
  },
};
