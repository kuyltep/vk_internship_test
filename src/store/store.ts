import { computed, makeAutoObservable } from "mobx";
import { IFilm } from "../types/IFilm";

class Store {
  favourites: IFilm[] = [];
  films: IFilm[] = [];
  film: IFilm | object = {};
  currentFilmId: number = 0;
  paginationPage: number = 1;

  constructor() {
    makeAutoObservable(this);
  }
  get isFilmInFavourites() {
    return computed(() =>
      this.favourites.some((item) => item.id === this.currentFilmId)
    );
  }
  setPaginationPage(num: number) {
    if (num === -1 && this.paginationPage > 1) {
      this.paginationPage += num;
    }
    if (num === 1) {
      this.paginationPage += num;
    }
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
  setFilms(films: IFilm[]) {
    this.films = films;
  }
  setFilm(film: IFilm) {
    this.film = film;
  }
}

export const store = new Store();
