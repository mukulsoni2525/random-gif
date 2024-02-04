import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="flex flex-col w-full min-h-screen h-full background relative items-center">
      <h1 className="bg-white rounded-md text-center mt-[40px] 
       px-10 py-2 text-4xl font-bold w-11/12">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random></Random>
        <Tag></Tag>
      </div>
    </div>
  );
}
