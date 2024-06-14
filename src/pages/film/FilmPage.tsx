import { useParams } from "react-router-dom";

const FilmPage = () => {
  const { filmId } = useParams();
  return <div>{filmId}</div>;
};

export default FilmPage;
