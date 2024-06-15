import { IFilm } from "../types/IFilm";
import { jsonServer } from "../utils/axios/jsonServer";
interface IItem {
  id: string;
  body: IFilm;
}
export const useFilmInFavourites = async (id: number): Promise<boolean> => {
  const data = jsonServer
    .get("favourites/")
    .then((result) => {
      return result.data.some((item: IItem) => item.body.id === id);
    })
    .then((result) => result);
  return data;
};
