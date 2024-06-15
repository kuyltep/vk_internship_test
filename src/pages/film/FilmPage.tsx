import { useParams } from "react-router-dom";
import { data } from "../../moks.js";
import "./FilmPage.scss";
import FilmDescription from "../../components/FilmDescription/FilmDescription.js";
import Header from "../../components/Header/Header.js";
import { postFavouritesFilms } from "../../hooks/usePostFavouritesFilms.js";
import { isFilmInFavourites } from "../../hooks/useIsFilmInFavourites.js";
import { store } from "../../store/store.js";
import { observer } from "mobx-react";
import { useGetFavouritesFilms } from "../../hooks/useGetFavouritesFilms.js";
const FilmPage = observer(() => {
  const filmData = data.docs[0];
  const { filmId } = useParams();
  useGetFavouritesFilms();
  isFilmInFavourites(filmData.id);
  return (
    <>
      <Header />
      <div className="film-page">
        <div className="image-section">
          {filmData.poster?.url ? (
            <img className="film-page__img" src={filmData.poster?.url} alt="" />
          ) : (
            <div className="no-img">No image</div>
          )}
          {store.isFilmInFavourites ? (
            <button
              className={"film-page__button_active"}
              onClick={() => {
                postFavouritesFilms(filmData);
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
        </div>
        <div className="description-section">
          <FilmDescription
            description={filmData.description}
            genres={filmData.genres}
            imdb={filmData.rating.imdb}
            kp={filmData.rating.kp}
            name={filmData.name}
            year={filmData.year}
          />
        </div>
      </div>
    </>
  );
});

export default FilmPage;
