import React from "react";
import Logo from "../assets/images/logo.png";

export const Header = () => {
  return (
    <div className="fixed top-0 flex gap-4 p-4 items-end bg-gray-600 w-full">
      <img src={Logo} className="w-14" />
      <h1 className="text-3xl text-white font-black">Must Watch!</h1>
    </div>
  );
};
