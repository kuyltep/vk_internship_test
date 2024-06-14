import "./App.css";
import FilmCard from "./components/FilmCard/FilmCard";
import { data } from "./moks.js";
const App = () => {
  return (
    <div className="films-page">
      <ul className="films-list">
        {data.docs.map((item, index) => {
          return (
            <FilmCard
              key={item.id}
              imdb={item.rating.imdb}
              img={item.poster?.url || ""}
              kp={item.rating.kp}
              title={item.name}
              year={item.year}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default App;
