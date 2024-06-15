import { useParams } from "react-router-dom";
import { data } from "../../moks.js";
import "./FilmPage.scss";
const FilmPage = () => {
  const filmData = data.docs[0];
  console.log(filmData);
  const { filmId } = useParams();
  return (
    <div className="film-page">
      <div className="image-section">
        {filmData.poster?.url ? (
          <img className="film-page__img" src={filmData.poster?.url} alt="" />
        ) : (
          <div className="no-img">No image</div>
        )}
        <button className="film-page__button">Добавить в избранное</button>
      </div>
      <div className="description-section">
        <h3 className="film-page__title">О фильме:</h3>
        <p className="film__title">
          <span className="film__helper">Название:</span> {filmData.name}
        </p>
        <p className="film__description">
          <span className="film__helper">Описание: </span>
          {filmData.description?.length
            ? filmData.description
            : "У данного фильма нет описания"}
        </p>
        <p className="film__raiting-title">Рейтинг фильма:</p>
        <div className="film__raiting">
          <span className="film__helper">Кинопоиск: </span>
          <span className="film__raiting-score">{filmData.rating?.kp}</span>
        </div>
        <div className="film__raiting">
          <span className="film__helper">IMDB: </span>
          <span className="film__raiting-score">{filmData.rating?.imdb}</span>
        </div>
        <div className="film__year">
          <span className="film__helper">Год выпуска: </span>
          {filmData.year}
        </div>
        <div className="film__genres">
          <span className="film__helper">Жанры: </span>
          {filmData.genres.map((genre: { name: string }) => {
            return (
              <span className="film__genre" key={genre.name}>
                #{genre.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilmPage;
