import { Link } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  return (
    <header className="header">
      <Link to={"/"} className="header__title">
        Фильмы и сериалы
      </Link>
      <Link to={"/favourites"} className="header__favourites">
        Избранное
      </Link>
    </header>
  );
};
export default Header;
