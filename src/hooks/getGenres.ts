import { store } from "../store/store";
import { instance } from "../utils/axios/intstance";

export const getGenres = () => {
  instance
    .get("v1/movie/possible-values-by-field?field=genres.name")
    .then((response) => response.data)
    .then((data) => {
      store.setGenresOptions(data);
    })
    .catch((error) => console.log(error));
};
