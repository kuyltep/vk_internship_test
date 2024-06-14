import { instance } from "../utils/axios/intstance";

export const useGetFilmById = (id: string | undefined) => {
  instance
    .get(`/movie/${id}`)
    .then((response) => response.data)
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};
