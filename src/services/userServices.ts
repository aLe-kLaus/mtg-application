import { userAPI } from "./apis";

export default {
  // GET
  async getUsersByCardName(card: string) {
    const response = await userAPI.get(`/cards/users?card_name=${card}`);
    return response;
  },

  async getUsersByCityName(city: string) {
    const response = await userAPI.get(`/users/city?user_city=${city}`);
    return response;
  },

  async getUserById(id: string) {
    const response = await userAPI.get(`/user?user_id=${id}`);
    return response;
  },

  async getUserCards(id: string) {
    const response = await userAPI.get(`/user/cards?user_id=${id}`);
    return response;
  },

  async getCard(id: string) {
    const response = await userAPI.get(`/card?card_id=${id}`);
    return response;
  },

  async getFavoriteCards(userId: string) {
    const response = await userAPI.get(`/user/favoriteCards?user_id=${userId}`);
    return response;
  },

  async getSeachedCard(card_name: string) {
    const response = await userAPI.get(`/allCards?card_name=${card_name}`);
    return response;
  },

  //POST
  async signIn(data: any) {
    const response = await userAPI.post(`/login`, {
      email: data.email,
      password: data.password,
    });

    return response;
  },

  async signUp(data: any) {
    const response = await userAPI.post(`/user`, {
      name: data.name,
      city: data.city,
      estate: data.state,
      age: data.age,
      email: data.email,
      password: data.password,
      cellphone: data.cellphone,
      interests: data.interests,
      favorite_cards: data.favorite_cards,
    });

    return response;
  },

  async createUserCard(data: any) {
    const response = await userAPI.post(`/cards`, {
      user_cards: data.id,
      name: data.name,
      set: data.set,
      condition: data.condition,
      price: data.price,
      complement: data.complement,
    });

    return response;
  },
  async createFavoriteCard(user_id: string, card_id: string) {
    const response = await userAPI.post(`/favoriteCards`, {
      user_favorites: user_id,
      favorite_cards: card_id,
    });

    return response;
  },

  //DELETE
  async deleteFavoriteCard(user_id: string, card_id: string) {
    const response = await userAPI.delete(
      `/favoriteCards?card_id=${card_id}&user_id=${user_id}`
    );
    return response;
  },
};
