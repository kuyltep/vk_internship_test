import { store } from "../store/store";
import { IFilm } from "../types/IFilm";
import { jsonServer } from "../utils/axios/jsonServer";
import { getFavouritesFilms } from "./useGetFavouritesFilms";

export const postFavouritesFilms = (film: IFilm) => {
  jsonServer
    .post("/favourites", {
      body: film,
    })
    .then(() => {
      getFavouritesFilms();
      store.setCurrentFilmId(film.id);
    });
};
