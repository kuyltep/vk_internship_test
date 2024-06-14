import FilmCard from "../../components/FilmCard/FilmCard.tsx";
import { data } from "../../moks.js";
import "./HomePage.scss";
const HomePage = () => {
  return (
    <div className="films-page">
      <ul className="films-list">
        {data.docs.map((item) => {
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
};

export default HomePage;
