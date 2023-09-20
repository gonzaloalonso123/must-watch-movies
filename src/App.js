import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { MovieList } from "./pages/MovieList";
import { Header } from "./components/Header";
import { useContext, useEffect, useState } from "react";
import { Movie } from "./pages/Movie";
import { EditMovie } from "./pages/EditMovie";
import movieList from "./assets/content/movies.json";
import { SavedMovie } from "./components/SavedMovie";
import { AppContext } from "./context/AppContext";

function App() {
  const { savedMoviePopUp, currentTab } = useContext(AppContext);
  return (
    <div className="w-screen">
      <Header />
      <div className="flex min-h-screen w-full bg-gray-900 justify-center ">
        {currentTab === "edit" ? (
          <EditMovie />
        ) : currentTab === "movie" ? (
          <Movie />
        ) : (
          <MovieList />
        )}
        {savedMoviePopUp && <SavedMovie />}
      </div>
    </div>
  );
}

export default App;
