import { instance } from "../utils/axios/intstance";

export const useGetFilms = () => {
  instance
    .get("movie?page=1&limit=50")
    .then((response) => response.data)
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};
