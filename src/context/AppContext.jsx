import React, { useEffect, useState } from "react";
import movieList from "../assets/content/movies.json";
export const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState({});
  const [savedMoviePopUp, setSavedMoviePopUp] = useState(false);
  const [currentTab, setCurrentTab] = useState("dashboard");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(movieList);
  }, []);

  const saveMovie = (movie) => {
    const newMovies = [...movies];
    if (newMovies.find((m) => m.id === movie.id)) {
      newMovies[newMovies.findIndex((m) => m.id === movie.id)] = movie;
    } else {
      newMovies.push(movie);
    }
    setMovies(newMovies);
    setSelectedMovie(null);
    setSavedMoviePopUp(true);
    setTimeout(() => {
      setSavedMoviePopUp(false);
      setCurrentTab("dashboard");
    }, 2000);
  };

  return (
    <AppContext.Provider
      value={{
        selectedMovie,
        setSelectedMovie,
        savedMoviePopUp,
        currentTab,
        setCurrentTab,
        movies,
        setMovies,
        saveMovie,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
