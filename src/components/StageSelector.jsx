import React from "react";

export const StageSelector = ({ setStage, stage }) => {
  return (
    <div className="flex gap-2 w-full items-center justify-center">
      <div
        className=" text-white flex items-center justify-center p-4 rounded-full cursor-pointer font-black text-xl hover:bg-purple-500"
        onClick={() => setStage(1)}
        style={{
          backgroundColor: stage >= 1 ? "rgb(126 34 206)" : "#555",
        }}
      >
        1
      </div>
      <div
        className=" h-1 w-full"
        style={{
          backgroundColor: stage > 1 ? "rgb(126 34 206)" : "#555",
        }}
      />
      <div
        className="  text-white flex items-center justify-center rounded-full p-4 cursor-pointer font-black text-xl hover:bg-purple-500"
        onClick={() => setStage(2)}
        style={{
          backgroundColor: stage >= 2 ? "rgb(126 34 206)" : "#555",
        }}
      >
        2
      </div>
      <div
        className="h-1 w-full"
        style={{
          backgroundColor: stage > 2 ? "rgb(126 34 206)" : "#555",
        }}
      />
      <div
        className="  text-white flex items-center justify-center rounded-full p-4 cursor-pointer font-black text-xl hover:bg-purple-500"
        onClick={() => setStage(3)}
        style={{
          backgroundColor: stage === 3 ? "rgb(126 34 206)" : "#555",
        }}
      >
        3
      </div>
    </div>
  );
};
