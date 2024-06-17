import { store } from "../store/store";
import { instance } from "../utils/axios/intstance";

export const getFilms = () => {
  instance
    .get(
      `v1.4/movie?page=${store.paginationPage}&limit=50${
        store.years.length ? `&year=${store.years}` : ""
      }${store.rating.length ? `&rating.kp=${store.rating}` : ""}${
        store.genres.length
          ? store.genres.map((genre) => `&genres.name=${genre}`).join("")
          : ""
      }`
    )
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      store.setFilms(data.docs);
      store.setPages(data.pages);
    })
    .catch((error) => console.log(error));
};
