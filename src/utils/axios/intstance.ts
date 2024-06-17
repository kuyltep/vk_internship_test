import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.kinopoisk.dev/",
  headers: {
    accept: "application/json",
    "X-API-KEY": "3TEXHJF-A3545ER-KJ5J6MK-MT0H8K8",
  },
});
