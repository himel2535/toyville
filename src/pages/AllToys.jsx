import React from "react";
import { useLoaderData } from "react-router";
import Toy from "../components/Toy";

const AllToys = () => {
  const toys = useLoaderData();

  return (
    <div>
      <div className=" text-center py-10 ">
        <h1 className="font-bold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-400">
          All Toys
        </h1>

        <p className="text-gray-500 mb-5 mt-2">
          Discover our handpicked collection of toys that kids absolutely love.
          Fun and excitement await in every choice!
        </p>
        <div className=" justify-center grid md:grid-cols-3 grid-cols-2 lg:grid-cols-5 items-center gap-5">
          {toys.map((toy) => (
            <Toy key={toy.toyId} toy={toy}></Toy>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllToys;
