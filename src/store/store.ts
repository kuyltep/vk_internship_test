import { computed, makeAutoObservable } from "mobx";
import { IFilm } from "../types/IFilm";

class Store {
  favourites: IFilm[] = [];
  currentFilmId: number = 0;

  constructor() {
    makeAutoObservable(this);
  }
  get isFilmInFavourites() {
    return computed(() =>
      this.favourites.some((item) => item.id === this.currentFilmId)
    );
  }
  setCurrentFilmId(id: number) {
    this.currentFilmId = id;
  }
  addFavouriteFilm(film: IFilm) {
    this.favourites.push(film);
  }
  setFavouritesFilms(films: { id: string; body: IFilm }[]) {
    this.favourites = [];
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
