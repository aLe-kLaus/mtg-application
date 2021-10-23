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

  async signIn(data: any) {
    const response = await userAPI.post(`/login`, {
      email: data.email,
      password: data.password,
    });

    return response;
  },
};
