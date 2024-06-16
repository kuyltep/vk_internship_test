import { store } from "../store/store";
import { IFilm } from "../types/IFilm";
import { jsonServer } from "../utils/axios/jsonServer";
import { useGetFavouritesFilms } from "./useGetFavouritesFilms";

export const postFavouritesFilms = (film: IFilm) => {
  jsonServer
    .post("/favourites", {
      body: film,
    })
    .then(() => {
      useGetFavouritesFilms();
      store.setCurrentFilmId(film.id);
    });
};
