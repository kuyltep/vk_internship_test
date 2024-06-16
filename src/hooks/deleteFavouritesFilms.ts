import { store } from "../store/store";
import { IFilm } from "../types/IFilm";
import { jsonServer } from "../utils/axios/jsonServer";
import { useGetFavouritesFilms } from "./useGetFavouritesFilms";

export const deleteFavouritesFilms = (id: number) => {
  jsonServer
    .get("favourites/")
    .then((response) => {
      const favouriteItem = response.data.find(
        (item: { id: string; body: IFilm }) => item.body.id === id
      );
      return favouriteItem.id;
    })
    .then((favouriteId) => {
      jsonServer.delete(`/favourites/${favouriteId}`).then(() => {
        useGetFavouritesFilms();
        store.setCurrentFilmId(0);
      });
    })
    .catch((error) => console.log(error));
};
