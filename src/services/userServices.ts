import { userAPI } from "./apis";

export default {
  async getUsersByCardName(card: string) {
    const response = await userAPI.get(`/users/cards?card_name=${card}`);
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
};
