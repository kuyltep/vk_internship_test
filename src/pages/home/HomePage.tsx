import FilmsSection from "../../components/FilmsSection/FilmsSection.tsx";
import Header from "../../components/Header/Header.tsx";
import { data } from "../../moks.js";
import { store } from "../../store/store.ts";
import "./HomePage.scss";
const HomePage = () => {
  console.log(store.favourites);
  return (
    <>
      <Header />
      <FilmsSection data={data.docs} />
    </>
  );
};

export default HomePage;
