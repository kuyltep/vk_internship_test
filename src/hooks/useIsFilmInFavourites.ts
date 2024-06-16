import { action, computed } from "mobx";
import { store } from "../store/store";
import { IFilm } from "../types/IFilm";
interface IItem {
  id: string;
  body: IFilm;
}
export const isFilmInFavourites = computed((id: number) => {
  const result = store.favourites.some((item) => item.id === id);
  store.setIsFilmInFavourites(result);
});
