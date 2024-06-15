import "./FilmDescription.scss";
interface IProps {
  name: string;
  description: string;
  kp: number;
  imdb: number;
  year: number;
  genres: { name: string }[];
}
const FilmDescription = ({
  name,
  description,
  kp,
  imdb,
  year,
  genres,
}: IProps) => {
  return (
    <>
      <h3 className="film-page__title">О фильме:</h3>
      <p className="film__title">
        <span className="film__helper">Название:</span> {name}
      </p>
      <p className="film__description">
        <span className="film__helper">Описание: </span>
        {description?.length ? description : "У данного фильма нет описания"}
      </p>
      <p className="film__raiting-title">Рейтинг фильма:</p>
      <div className="film__raiting">
        <span className="film__helper">Кинопоиск: </span>
        <span className="film__raiting-score">{kp}</span>
      </div>
      <div className="film__raiting">
        <span className="film__helper">IMDB: </span>
        <span className="film__raiting-score">{imdb}</span>
      </div>
      <div className="film__year">
        <span className="film__helper">Год выпуска: </span>
        {year}
      </div>
      <div className="film__genres">
        <span className="film__helper">Жанры: </span>
        {genres.map((genre: { name: string }) => {
          return (
            <span className="film__genre" key={genre.name}>
              #{genre.name}
            </span>
          );
        })}
      </div>
    </>
  );
};
export default FilmDescription;
