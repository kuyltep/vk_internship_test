import { observer } from "mobx-react";
import { store } from "../../store/store";
import "./PaginationSection.scss";
import { getFilms } from "../../hooks/useGetFilms";
const PaginationSection = observer(() => {
  return (
    <div className="pagination__section">
      <button
        className="pagination__button"
        onClick={() => store.setPaginationPage(-1)}
      >
        Предыдущая
      </button>
      <p className="pagination__page">{store.paginationPage}</p>
      <button
        className="pagination__button"
        onClick={() => {
          store.setPaginationPage(1);
        }}
      >
        Следующая
      </button>
    </div>
  );
});
export default PaginationSection;
