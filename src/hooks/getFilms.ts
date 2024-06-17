import { store } from "../store/store";
import { instance } from "../utils/axios/intstance";

export const getFilms = () => {
  instance
    .get(
      `v1.4/movie?page=${store.paginationPage}&limit=50${
        store.years.length ? `&year=${store.years}` : ""
      }${store.rating.length ? `&rating.kp=${store.rating}` : ""}`
    )
    .then((response) => response.data)
    .then((data) => store.setFilms(data))
    .catch((error) => console.log(error));
};
