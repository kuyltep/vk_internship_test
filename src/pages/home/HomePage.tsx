import FilmsSection from "../../components/FilmsSection/FilmsSection.tsx";
import FilterSection from "../../components/FilterSection/FilterSection.tsx";
import Header from "../../components/Header/Header.tsx";
import PaginationSection from "../../components/PaginationSection/PaginationSection.tsx";
import { data } from "../../moks.js";
import "./HomePage.scss";
const HomePage = () => {
  return (
    <>
      <Header />
      <FilterSection />
      <FilmsSection data={data.docs} />
      <PaginationSection />
    </>
  );
};

export default HomePage;
