import FilmsSection from "../../components/FilmsSection/FilmsSection.tsx";
import Header from "../../components/Header/Header.tsx";
import PaginationSection from "../../components/PaginationSection/PaginationSection.tsx";
import { data } from "../../moks.js";
import "./HomePage.scss";
const HomePage = () => {
  return (
    <>
      <Header />
      <FilmsSection data={data.docs} />
      <PaginationSection />
    </>
  );
};

export default HomePage;
