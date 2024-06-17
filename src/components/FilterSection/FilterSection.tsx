import { ChangeEvent, useState } from "react";
import "./FilterSection.scss";
import { genres } from "../../genres.js";
import { store } from "../../store/store.js";

const FilterSection = () => {
  const year = new Date().getFullYear();
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [minYear, setMinYear] = useState<number>(1990);
  const [maxYear, setMaxYear] = useState<number>(year);
  const [minRating, setMinRating] = useState<number>(0);
  const [maxRating, setMaxRating] = useState<number>(10);
  const setYearFunct = (
    yearParam: number,
    setYear: React.Dispatch<React.SetStateAction<number>>
  ) => {
    if (yearParam >= 1990 && yearParam <= year) {
      setYear(yearParam);
    }
  };
  const setRatingFunct = (
    ratingParam: number,
    setRating: React.Dispatch<React.SetStateAction<number>>
  ) => {
    if (ratingParam >= 0 && ratingParam <= 10) {
      setRating(ratingParam);
    }
  };
  return (
    <div className="filter__section">
      <div className="filter__genre">
        <p className="genre__text">Выбор жанров:</p>
        <select
          name=""
          id=""
          className="genre__select"
          multiple
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            const selectedOptions = e.target.selectedOptions;
            const values = Array.from(selectedOptions).map(
              (option) => option.value
            );
            setSelectedGenres(values);
          }}
        >
          {genres.map((genre) => {
            return (
              <option key={genre.name} value={genre.name}>
                {genre.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="filter__rating">
        Рейтинг фильмов:
        <input
          value={minRating}
          type="number"
          step={0.1}
          min={0}
          max={10}
          name=""
          id=""
          className="filter__input"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (+e.target.value <= maxRating) {
              setRatingFunct(+e.target.value, setMinRating);
            }
          }}
        />{" "}
        -
        <input
          type="number"
          value={maxRating}
          min={0}
          step={0.1}
          max={10}
          name=""
          id=""
          className="filter__input"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (+e.target.value >= minRating) {
              setRatingFunct(+e.target.value, setMaxRating);
            }
          }}
        />
      </div>
      <div className="filter__year">
        Год выпуска фильмов:
        <input
          value={minYear}
          type="number"
          min={1990}
          max={year}
          name=""
          id=""
          className="filter__input"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (+e.target.value <= maxYear) {
              setYearFunct(+e.target.value, setMinYear);
            }
          }}
        />
        -
        <input
          value={maxYear}
          type="number"
          min={1990}
          max={year}
          name=""
          id=""
          className="filter__input"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (+e.target.value >= minYear) {
              setYearFunct(+e.target.value, setMaxYear);
            }
          }}
        />
      </div>
      <button
        className="filter__button"
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.preventDefault();
          store.setGenres(selectedGenres);
          store.setRating(minRating, maxRating);
          store.setYear(minYear, maxYear);
        }}
      >
        Фильтровать
      </button>
    </div>
  );
};

export default FilterSection;
