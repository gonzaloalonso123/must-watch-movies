import React from "react";
import SavedImage from "../assets/images/saved.png";

export const SavedMovie = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-800 rounded-lg p-4 text-white flex gap-4 items-center">
        <img src={SavedImage} className="w-16 h-16" />
        <p className="text-2xl">Movie saved!</p>
      </div>
    </div>
  );
};
