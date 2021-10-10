import axios from "axios";
import URLs from "./URLs";

export const cardsAPI = axios.create({
  baseURL: URLs.cardsURL,
});
