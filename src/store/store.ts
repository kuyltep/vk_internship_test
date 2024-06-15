import { makeAutoObservable } from "mobx";
import { IFilm } from "../types/IFilm";

class Store {
  favourites: IFilm[] = [];
  isFilmInFavourites: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  addFavouriteFilm(film: IFilm) {
    this.favourites.push(film);
  }
  setFavouritesFilms(films: { id: string; body: IFilm }[]) {
    films.forEach((film) => {
      const index = this.favourites.findIndex(
        (item) => film.body.id === item.id
      );
      if (index === -1) {
        this.favourites.push(film.body);
      }
    });
  }
  setIsFilmInFavourites(data: boolean) {
    this.isFilmInFavourites = data;
  }
}

export const store = new Store();
