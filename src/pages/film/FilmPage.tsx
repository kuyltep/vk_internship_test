import { useParams } from "react-router-dom";
import { data } from "../../moks.js";
const FilmPage = () => {
  const filmData = data.docs[0];
  console.log(filmData);
  const { filmId } = useParams();
  return <div>{filmId}</div>;
};

export default FilmPage;
