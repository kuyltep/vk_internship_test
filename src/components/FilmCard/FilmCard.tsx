import "./FilmCard.scss";
interface IProps {
  title: string;
  year: string;
  img: string;
  kp: number;
  imdb: number;
}
const FilmCard = ({ title, year, img, kp, imdb }: IProps) => {
  return (
    <li className="film-card">
      {img.length ? (
        <img className="film-card__img" src={img} alt="" />
      ) : (
        <div className="no-img">No image</div>
      )}
      <h3 className="film-card__title">{title}</h3>
      <p className="film-card__year">{year}</p>
      <div className="film-card__raiting">
        Кинопоиск:
        <p className="film-card__raiting_score">{kp}</p>
      </div>
      <div className="film-card__raiting">
        IMDB:
        <p className="film-card__raiting_score">{imdb}</p>
      </div>
    </li>
  );
};

export default FilmCard;
