import { action } from "mobx";
import { store } from "../store/store";
import { jsonServer } from "../utils/axios/jsonServer";
import { useEffect } from "react";

export const useGetFavouritesFilms = action(() => {
  useEffect(() => {
    jsonServer
      .get("favourites/")
      .then((response) => {
        store.setFavouritesFilms(response.data);
        console.log(store.favourites);
      })
      .catch((error) => console.log(error));
  }, []);
});
