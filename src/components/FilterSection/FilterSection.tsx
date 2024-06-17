import { ChangeEvent, SetStateAction, useState } from "react";
import "./FilterSection.scss";

const FilterSection = () => {
  const year = new Date().getFullYear();
  const [minYear, setMinYear] = useState(1990);
  const [maxYear, setMaxYear] = useState(year);
  const [minRating, setMinRating] = useState(0);
  const [maxRating, setMaxRating] = useState(10);
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
      <div className="filter_genre"></div>
      <div className="filter__rating">
        Рейтинг фильмов:
        <input
          value={minRating}
          type="number"
          min={0}
          max={10}
          name=""
          id=""
          className="filter__input"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setRatingFunct(+e.target.value, setMinRating);
          }}
        />{" "}
        -
        <input
          type="number"
          value={maxRating}
          min={0}
          max={10}
          name=""
          id=""
          className="filter__input"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setRatingFunct(+e.target.value, setMaxRating);
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
            setYearFunct(+e.target.value, setMinYear);
            console.log(e.target.value);
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
            setYearFunct(+e.target.value, setMaxYear);
          }}
        />
      </div>
      <button
        className="filter__button"
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.preventDefault();
        }}
      >
        Фильтровать
      </button>
    </div>
  );
};

export default FilterSection;
