import { useParams } from "react-router-dom";
import { data } from "../../moks.js";
import "./FilmPage.scss";
import FilmDescription from "../../components/FilmDescription/FilmDescription.js";
import Header from "../../components/Header/Header.js";
import { postFavouritesFilms } from "../../hooks/usePostFavouritesFilms.js";
import { useFilmInFavourites } from "../../hooks/useIsFilmInFavourites.js";
const FilmPage = () => {
  const filmData = data.docs[0];
  const isFilmInFavourites = useFilmInFavourites(filmData.id);
  console.log(isFilmInFavourites);
  console.log(filmData);
  const { filmId } = useParams();
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
          <button
            className={"film-page__button"}
            onClick={() => {
              postFavouritesFilms(filmData);
            }}
          >
            Добавить в избранное
          </button>
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
};

export default FilmPage;
