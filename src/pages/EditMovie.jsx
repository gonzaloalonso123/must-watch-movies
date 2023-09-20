import React, { useEffect, useState } from "react";
import { FormItem } from "../components/FormItem";
import { StageSelector } from "../components/StageSelector";

export const EditMovie = ({ movieToEdit, saveMovie }) => {
  const [title, setTitle] = useState(movieToEdit?.title || "");
  const [synopsis, setSynopsis] = useState(movieToEdit?.synopsis || "");
  const [release, setRelease] = useState(movieToEdit?.release || "");
  const [image, setImage] = useState(movieToEdit?.image || "");
  const [cast, setCast] = useState(movieToEdit?.cast || []);
  const [stage, setStage] = useState(1);

  const editCast = (i, val, type) => {
    const newCast = [...cast];
    if (type === "role") newCast[i].role = val;
    else newCast[i].name = val;
    setCast(newCast);
  };

  const deleteCast = (i) => {
    const newCast = [...cast];
    newCast.splice(i, 1);
    setCast(newCast);
  };

  const save = () => {
    const newMovie = {
      title,
      synopsis,
      release,
      image,
      cast,
      id: movieToEdit?.id || Math.random(),
    };
    saveMovie(newMovie);
  };

  return (
    <div className="flex w-4/5 max-w-3xl flex-col py-28 gap-6">
      <StageSelector stage={stage} setStage={setStage} />
      <div className="w-full flex text-white flex-col items-top justify-top gap-6">
        {stage === 1 ? (
          <>
            <h1 className="text-white text-5xl">Details</h1>
            <FormItem name="Title" setter={setTitle} value={title} />
            <FormItem name="Image (Url)" setter={setImage} value={image} />
            <FormItem name="Synopsis" setter={setSynopsis} value={synopsis} />
            <button
              className="bg-purple-900 text-white rounded-2xl p-2 text-2xl w-1/3 mx-auto mt-10 font-black"
              onClick={() => setStage(2)}
            >
              NEXT
            </button>
          </>
        ) : stage === 2 ? (
          <>
            <h1 className="text-white text-5xl">Cast</h1>
            <div className="flex gap-4 items-center">
              <div
                className="bg-gray-800 text-white rounded-xl text-3xl font-black h-10 w-10 flex items-center justify-center cursor-pointer hover:bg-black"
                onClick={() => setCast([...cast, { name: "", role: "" }])}
              >
                +
              </div>
              <h1 className="3xl text-white">Add cast member</h1>
            </div>
            <div className="flex flex-col gap-4">
              {cast.map((actor, i) => (
                <div className="flex gap-4 items-center">
                  <FormItem
                    name="Name"
                    setter={(val) => {
                      editCast(i, val, "name");
                    }}
                    value={actor.name}
                  />
                  <FormItem
                    name="Role"
                    setter={(val) => {
                      editCast(i, val, "role");
                    }}
                    value={actor.role}
                  />
                  <div onClick={() => deleteCast(i)} className="cursor-pointer">
                    x
                  </div>
                </div>
              ))}
            </div>
            <button
              className="bg-purple-900 text-white rounded-2xl p-2 text-2xl w-1/3 mx-auto mt-10 font-black"
              onClick={() => setStage(3)}
            >
              NEXT
            </button>
          </>
        ) : (
          <>
            <h1 className="text-white text-5xl">Review</h1>
            <div className="flex flex-col gap-4">
              <h1>Title : {title}</h1>
              <h1>
                Image : <img src={image} alt="not found" />
              </h1>
              <h1>Synopsis : {synopsis}</h1>
              <h1>
                Cast :{" "}
                {cast
                  .map((actor) => `${actor.name} as ${actor.role}`)
                  .join(", ")}
              </h1>
            </div>
            <button
              className="bg-purple-900 text-white rounded-2xl p-2 text-2xl w-1/3 mx-auto mt-10 font-black"
              onClick={save}
            >
              Add
            </button>
          </>
        )}
      </div>
    </div>
  );
};
