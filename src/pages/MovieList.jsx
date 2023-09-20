import React, { useEffect, useState } from "react";
import { MovieCard } from "../components/MovieCard";

export const MovieList = ({ movies }) => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-28 gap-8 w-4/5">
      {movies.map((movie) => (
        <MovieCard {...movie} />
      ))}
    </div>
  );
};
