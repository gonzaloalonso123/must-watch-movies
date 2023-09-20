import React, { useEffect, useState } from "react";
import movieList from "../assets/content/movies.json";
import { MovieCard } from "../components/MovieCard";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    setMovies(movieList);
  }, []);
  return (
    <div className="flex h-full w-full bg-gray-900 justify-center ">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-28 gap-8 w-4/5">
        {movies.map((movie) => (
          <MovieCard {...movie} />
        ))}
      </div>
    </div>
  );
};
