import React from "react";
import Logo from "../assets/images/logo.png";

export const Header = ({ addMovie, setAddMovie }) => {
  return (
    <div className="fixed top-0 flex py-4 px-8 bg-gray-600 w-full justify-between items-center">
      <div className="flex gap-2 items-end">
        <img src={Logo} className="w-10" />
        <h1 className="text-3xl text-white font-black">Must Watch!</h1>
      </div>
      <div
        className="bg-gray-800 text-white rounded-xl text-3xl font-black h-14 w-14 flex items-center justify-center cursor-pointer hover:bg-black"
        onClick={() => setAddMovie(!addMovie)}
      >
        +
      </div>
    </div>
  );
};
