import React from "react";
import Logo from "../assets/images/logo.png";
import movies from "../assets/data/movies.json";

export const MovieList = () => {
  return (
    <div className="h-screen w-screen">
      <div className="fixed top-0 flex justify-center lg:justify-left px-4 bg-gray-600 h-2/12 w-full">
        <img src={Logo} className="w-24 md:w-36" />
        <h1>Must Watch!</h1>
      </div>
      <div className="flex justify-center items-center h-10/12 w-full overflow-y-scroll"></div>
    </div>
  );
};
