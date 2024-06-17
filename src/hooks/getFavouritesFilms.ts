import { action } from "mobx";
import { store } from "../store/store";
import { jsonServer } from "../utils/axios/jsonServer";

export const getFavouritesFilms = action(() => {
  jsonServer
    .get("favourites/")
    .then((response) => {
      store.setFavouritesFilms(response.data);
    })
    .catch((error) => console.log(error));
});
