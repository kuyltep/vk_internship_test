import { store } from "../store/store";
import { instance } from "../utils/axios/intstance";

export const useGetFilms = () => {
  instance
    .get(`movie?page=${store.paginationPage}&limit=50`)
    .then((response) => response.data)
    .then((data) => store.setFilms(data))
    .catch((error) => console.log(error));
};
