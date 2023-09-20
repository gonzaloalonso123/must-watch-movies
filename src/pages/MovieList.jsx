import React, { useContext, useEffect } from "react";
import { MovieCard } from "../components/MovieCard";
import { AppContext } from "../context/AppContext";

export const MovieList = () => {
  const { movies, setSelectedMovie } = useContext(AppContext);

  useEffect(() => {
    setSelectedMovie(null);
  }, []);
  
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-28 gap-8 w-4/5">
      {movies.map((movie) => (
        <MovieCard movie={movie} select={() => setSelectedMovie(movie)} />
      ))}
    </div>
  );
};
