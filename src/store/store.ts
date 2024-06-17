import { computed, makeAutoObservable } from "mobx";
import { IFilm } from "../types/IFilm";
import { IGenre } from "../types/IGenre";

class Store {
  favourites: IFilm[] = [];
  films: IFilm[] = [];
  film: IFilm = {
    id: 0,
    name: "",
    alternativeName: "",
    enName: "",
    type: "",
    typeNumber: 0,
    year: 0,
    description: "",
    shortDescription: "",
    status: "",
    rating: {
      kp: 0,
      imdb: 0,
      filmCritics: 0,
      russianFilmCritics: 0,
      await: 0,
    },
    votes: {
      kp: 0,
      imdb: 0,
      filmCritics: 0,
      russianFilmCritics: 0,
      await: 0,
    },
    movieLength: 0,
    totalSeriesLength: 0,
    seriesLength: 0,
    ratingMpaa: 0,
    ageRating: 0,
    poster: {
      url: "",
      previewUrl: "",
    },
    genres: [
      {
        name: "",
      },
    ],
    countries: [
      {
        name: "",
      },
    ],
    top10: false,
    top250: false,
    isSeries: false,
    ticketsOnSale: false,
  };
  currentFilmId: string = "";
  paginationPage: number = 1;
  genres: string[] = [];
  years: string = "";
  rating: string = "";
  genresOptions: IGenre[] = [];

  constructor() {
    makeAutoObservable(this);
  }
  get isFilmInFavourites() {
    return computed(() =>
      this.favourites.some((item) => item.id === +this.currentFilmId)
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
  setCurrentFilmId(id: string) {
    this.currentFilmId = id;
  }
  addFavouriteFilm(film: IFilm) {
    this.favourites.push(film);
  }
  setGenres(genres: string[]) {
    this.genres = genres;
  }
  setGenresOptions(genres: IGenre[]) {
    this.genresOptions = genres;
  }
  setYear(minYear: number, maxYear: number) {
    if (minYear === maxYear) {
      this.years = `${minYear}`;
    } else {
      this.years = `${minYear}-${maxYear}`;
    }
  }
  setRating(minRating: number, maxRating: number) {
    if (minRating.toFixed(2) === maxRating.toFixed(2)) {
      this.rating = `${minRating}`;
    } else {
      this.rating = `${minRating}-${maxRating}`;
    }
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
