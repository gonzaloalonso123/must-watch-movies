import React, { useContext } from "react";
import Edit from "../assets/images/edit.png";
import { AppContext } from "../context/AppContext";

export const Movie = () => {
  const { selectedMovie, setSelectedMovie, setCurrentTab } =
    useContext(AppContext);
  return (
    <div className="flex py-28 gap-8 w-4/5 text-white">
      <img src={selectedMovie.image} className="w-1/2 max-h-96" />
      <div className="flex flex-col gap-4">
        <div className="flex gap-6 items-center flex-col md:flex-row">
          <h1 className="text-3xl font-black">{selectedMovie.title}</h1>
          <div
            className="bg-gray-300 flex gap-2 cursor-pointer w-24 p-2 rounded-xl items-center text-black hover:bg-gray-200"
            onClick={() => {
              setSelectedMovie(selectedMovie);
              setCurrentTab("edit");
            }}
          >
            <img src={Edit} className="h-8 w-8" />
            <h1>Edit</h1>
          </div>
        </div>
        <h2 className="text-sm">{selectedMovie.release}</h2>
        <p>{selectedMovie.synopsis}</p>
        {selectedMovie.cast.map((actor) => (
          <div>
            <h1>{actor.name}</h1>
            <h1>{actor.role}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
