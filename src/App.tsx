import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import FilmPage from "./pages/film/FilmPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<FilmPage />} path="/film/:filmId" />
        <Route element={<HomePage />} path="/favourites" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
