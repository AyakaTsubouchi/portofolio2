import React from "react";
import Worktemplage from "./WorkTemplate";

const Fourcast = () => {
  const fourcast = {
    title: "Fourcast",
    img: "./img/fourcast.png",
    tech: ["HTML", "React", "css"],
    difficulty: "",
  };

  return (
    <>
      <div>
        <Worktemplage fourcast={fourcast} />
      </div>
    </>
  );
};

export default Fourcast;
