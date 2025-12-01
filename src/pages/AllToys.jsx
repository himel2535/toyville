import React from "react";
import { useLoaderData } from "react-router";
import Toy from "../components/Toy";

const AllToys = () => {
  const toys = useLoaderData();

  return (
    <div>
      <div className=" text-center py-10 ">
        <h1 className="font-bold text-4xl bg-clip-text mb-2 text-transparent bg-gradient-to-r from-amber-400 to-rose-400">
          All Toys
        </h1>

        <p className="text-center text-gray-500 mb-6 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
          Welcome to our full toy collection at ToyVille! Here you can explore a
          wide range of toys, carefully curated to bring joy, creativity, and
          learning to children of all ages. From building blocks and puzzles to
          dolls and action figures, every toy is handpicked to ensure quality
          and fun. Dive into the collection, discover your child’s favorites,
          and make playtime unforgettable with our diverse and exciting toys.
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
