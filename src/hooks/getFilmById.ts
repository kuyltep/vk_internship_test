import { store } from "../store/store";
import { instance } from "../utils/axios/intstance";

export const getFilmById = (id: string | undefined) => {
  instance
    .get(`v1.4/movie/${id}`)
    .then((response) => response.data)
    .then((data) => store.setFilm(data))
    .catch((error) => console.log(error));
};
