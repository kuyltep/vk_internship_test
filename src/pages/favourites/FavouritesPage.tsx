import FilmCard from "../../components/FilmCard/FilmCard";
import FilmsSection from "../../components/FilmsSection/FilmsSection";
import Header from "../../components/Header/Header";
import { useGetFavouritesFilms } from "../../hooks/useGetFavouritesFilms";
import { store } from "../../store/store";
import { observer } from "mobx-react";

const FavouritesPage = observer(() => {
  useGetFavouritesFilms();

  return (
    <>
      <Header />
      <FilmsSection data={store.favourites} />
    </>
  );
});
export default FavouritesPage;
