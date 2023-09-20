import React from "react";

export const MovieCard = ({ title, image, synopsis, release, select }) => {
  return (
    <div
      className="flex rounded-sm bg-gray-800 w-full h-80 shadow-lg shadow-black cursor-pointer"
      onClick={select}
    >
      <img src={image} className="w-1/2" />
      <div className="p-4 text-white text-sm flex flex-col gap-4">
        <h1 className="text-xl font-black">{title}</h1>
        <h2 className="font-light text-sm">{release}</h2>
        <p className="text-ellipsis">{synopsis.slice(0, 35)}...</p>
      </div>
    </div>
  );
};
