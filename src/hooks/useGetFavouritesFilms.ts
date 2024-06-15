import { jsonServer } from "../utils/axios/jsonServer";

export const useGetFavouritesFilms = () => {
  const data = jsonServer
    .get("favourites/")
    .then((response) => response.data)
    .catch((error) => console.log(error));
  return data;
};
