import { useEffect } from "react";
import FilmsSection from "../../components/FilmsSection/FilmsSection.tsx";
import FilterSection from "../../components/FilterSection/FilterSection.tsx";
import Header from "../../components/Header/Header.tsx";
import PaginationSection from "../../components/PaginationSection/PaginationSection.tsx";
import "./HomePage.scss";
import { getFilms } from "../../hooks/getFilms.ts";
import { store } from "../../store/store.ts";
import { observer } from "mobx-react";
import { getGenres } from "../../hooks/getGenres.ts";
const HomePage = observer(() => {
  useEffect(() => {
    getFilms();
    getGenres();
  }, []);
  return (
    <>
      <Header />
      {store.films.length ? (
        <>
          <FilterSection />
          <FilmsSection data={store.films} />
          <PaginationSection />
        </>
      ) : (
        <p>Загрука фильмов...</p>
      )}
    </>
  );
});

export default HomePage;
