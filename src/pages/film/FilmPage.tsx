import { useParams } from "react-router-dom";
import { data } from "../../moks.js";
import "./FilmPage.scss";
import FilmDescription from "../../components/FilmDescription/FilmDescription.js";
import Header from "../../components/Header/Header.js";
import { observer } from "mobx-react";
import { useGetFavouritesFilms } from "../../hooks/useGetFavouritesFilms.js";
import FilmImageSection from "../../components/FilmCard/FilmImageSection/FilmImageSection.js";
import { store } from "../../store/store.js";
const FilmPage = observer(() => {
  const filmData = data.docs[0];
  const { filmId } = useParams();
  useGetFavouritesFilms();
  store.setCurrentFilmId(filmData.id);
  return (
    <>
      <Header />
      <div className="film-page">
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
      </div>
    </>
  );
});

export default FilmPage;
