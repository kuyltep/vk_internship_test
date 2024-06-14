import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import FilmPage from "./pages/film/FilmPage";
import NotFoundPage from "./pages/not-found/NotFoundPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<FilmPage />} path="/film/:filmId" />
        <Route element={<HomePage />} path="/favourites" />
        <Route element={<NotFoundPage />} path="/*" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
