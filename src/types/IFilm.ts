export interface IFilm {
  id: number;
  name: string;
  alternativeName: string;
  enName: null | string;
  type: string;
  typeNumber: number;
  year: number;
  description: null | string;
  shortDescription: null | string;
  status: null | string;
  rating: {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
  };
  votes: {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
  };
  movieLength: number;
  totalSeriesLength: null | number;
  seriesLength: null | number;
  ratingMpaa: null | number;
  ageRating: null | number;
  poster: {
    url: string;
    previewUrl: string;
  };
  genres: {
    name: string;
  }[];
  countries: {
    name: string;
  }[];
  top10: null | boolean;
  top250: null | boolean;
  isSeries: boolean;
  ticketsOnSale: boolean;
}
