import axios from "axios";

export const jsonServer = axios.create({
  baseURL: "http://localhost:3200/",
  headers: {
    accept: "application/json",
  },
});
