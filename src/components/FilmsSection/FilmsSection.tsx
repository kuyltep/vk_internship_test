import FilmCard from "../FilmCard/FilmCard";
import "./FilmsSection.scss";
import { IFilm } from "../../types/IFilm.js";
import { observer } from "mobx-react";
const FilmsSection = observer(({ data }: { data: IFilm[] }) => {
  return (
    <div className="films-page">
      <ul className="films-list">
        {data.map((item) => {
          return (
            <FilmCard
              key={item.id}
              imdb={item.rating.imdb}
              img={item.poster?.url || ""}
              kp={item.rating.kp}
              title={item.name}
              year={item.year}
              id={item.id}
            />
          );
        })}
      </ul>
    </div>
  );
});
export default FilmsSection;
