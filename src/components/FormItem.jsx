import React from "react";

export const FormItem = ({ setter, value, name }) => {
  return (
    <div className="py-2 border-bottom-2 border-black gap-4 w-full flex justify-between">
      <h1 className="text-2xl w-1/3">{name}</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setter(e.target.value)}
        className="bg-purple-800 rounded-2xl p-2 text-white w-2/3"
      />
    </div>
  );
};
