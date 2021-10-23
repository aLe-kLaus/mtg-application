import axios from "axios";
import URLs from "./URLs";

export const cardsAPI = axios.create({
  baseURL: URLs.cardsURL,
});

export const locationAPI = axios.create({
  baseURL: URLs.locationURL,
});

export const userAPI = axios.create({
  baseURL: URLs.userURL,
});
