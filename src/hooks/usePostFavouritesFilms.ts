import { IFilm } from "../types/IFilm";
import { jsonServer } from "../utils/axios/jsonServer";

export const postFavouritesFilms = (film: IFilm) => {
  jsonServer.post("/favourites", {
    body: film,
  });
};
