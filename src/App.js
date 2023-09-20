import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { MovieList } from "./pages/MovieList";
import { Header } from "./components/Header";
import { useEffect, useState } from "react";
import { Movie } from "./pages/Movie";
import { EditMovie } from "./pages/EditMovie";
import movieList from "./assets/content/movies.json";
import SavedImage from "./assets/images/saved.png";

function App() {
  const [addMovie, setAddMovie] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(-1);
  const [savedMovie, setSavedMovie] = useState(false);
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
    setSelectedMovie(-1);
    setAddMovie(false);
    setSavedMovie(true);
    setTimeout(() => {
      setSavedMovie(false);
    }, 2000);
  };

  return (
    <div className="w-screen">
      <Header setAddMovie={setAddMovie} addMovie={addMovie} />
      <div className="flex min-h-screen w-full bg-gray-900 justify-center ">
        {addMovie ? (
          <EditMovie saveMovie={saveMovie} />
        ) : selectedMovie != -1 ? (
          <Movie movie={selectedMovie} />
        ) : (
          <MovieList movies={movies} />
        )}
        {savedMovie && (
          <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-gray-800 rounded-lg p-4 text-white flex gap-4 items-center">
              <img src={SavedImage} className="w-16 h-16" />
              <p className="text-2xl">Movie saved!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
