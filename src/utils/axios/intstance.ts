import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.kinopoisk.dev/v1.4/",
  headers: {
    accept: "application/json",
    "X-API-KEY": "5XQS0ZX-E7QMV4B-QS0F058-76Z91E5",
  },
});
