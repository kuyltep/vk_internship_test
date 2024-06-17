import { observer } from "mobx-react";
import FilmsSection from "../../components/FilmsSection/FilmsSection";
import Header from "../../components/Header/Header";
import { getFavouritesFilms } from "../../hooks/useGetFavouritesFilms";
import { store } from "../../store/store";
import { useEffect } from "react";

const FavouritesPage = observer(() => {
  useEffect(() => {
    getFavouritesFilms();
  }, []);

  return (
    <>
      <Header />
      <FilmsSection data={store.favourites} />
    </>
  );
});
export default FavouritesPage;
