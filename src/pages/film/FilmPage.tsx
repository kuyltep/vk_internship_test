import { useParams } from "react-router-dom";
import "./FilmPage.scss";
import FilmDescription from "../../components/FilmDescription/FilmDescription.js";
import Header from "../../components/Header/Header.js";
import { observer } from "mobx-react";
import { getFavouritesFilms } from "../../hooks/getFavouritesFilms.js";
import FilmImageSection from "../../components/FilmCard/FilmImageSection/FilmImageSection.js";
import { store } from "../../store/store.js";
import { useEffect } from "react";
import { getFilmById } from "../../hooks/getFilmById.js";
const FilmPage = observer(() => {
  const { filmId } = useParams();
  store.setCurrentFilmId(filmId || "");
  useEffect(() => {
    getFavouritesFilms();
    getFilmById(filmId);
  });
  const filmData = store.film;
  return (
    <>
      <Header />
      <div className="film-page">
        {filmData.name.length ? (
          <>
            <div className="image-section">
              <FilmImageSection filmData={filmData} />
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
          </>
        ) : (
          <p>Загрузка фильма...</p>
        )}
      </div>
    </>
  );
});

export default FilmPage;
