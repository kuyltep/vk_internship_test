import { store } from "../store/store";
import { jsonServer } from "../utils/axios/jsonServer";

export const useGetFavouritesFilms = () => {
  jsonServer
    .get("favourites/")
    .then((response) => {
      store.setFavouritesFilms(response.data);
    })
    .catch((error) => console.log(error));
};
