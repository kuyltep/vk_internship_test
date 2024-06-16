import { observer } from "mobx-react";
import { deleteFavouritesFilms } from "../../../hooks/deleteFavouritesFilms";
import { postFavouritesFilms } from "../../../hooks/usePostFavouritesFilms";
import { store } from "../../../store/store";
import { IFilm } from "../../../types/IFilm";

const FilmImageSection = observer(({ filmData }: { filmData: IFilm }) => {
  return (
    <>
      {filmData.poster?.url ? (
        <img className="film-page__img" src={filmData.poster?.url} alt="" />
      ) : (
        <div className="no-img">No image</div>
      )}
      {store.isFilmInFavourites.get() ? (
        <button
          className={"film-page__button_active"}
          onClick={() => {
            deleteFavouritesFilms(filmData.id);
          }}
        >
          Удалить из избранного
        </button>
      ) : (
        <button
          className={"film-page__button"}
          onClick={() => {
            postFavouritesFilms(filmData);
          }}
        >
          Добавить в избранное
        </button>
      )}
    </>
  );
});
export default FilmImageSection;
