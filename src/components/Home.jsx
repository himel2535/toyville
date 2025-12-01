import React from "react";
import { useLoaderData } from "react-router";
import Toy from "./Toy";
import Slider from "../pages/Slider";
import TopRated from "../pages/TopRated";
import UserReview from "../pages/UserReview";
import { Helmet } from "react-helmet";
import Quiz from "./Quiz";

const Home = () => {
  const toys = useLoaderData();
  return (
    <div className=" py-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home-ToyVille</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      {/* ---slider--- */}
      <div className="text-center flex flex-col items-center mt-7">
        {/* <h1 className="my-3 font-semibold text-xl underline">Popular Toys</h1> */}
        <Slider toys={toys}></Slider>
      </div>

      {/* ---Cards--- */}
<div className="text-center mt-10">
  <h1 className="font-bold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-400">
    Popular Toys
  </h1>

  <p className="text-gray-500 mb-5 mt-2">
    Discover our handpicked collection of toys that kids absolutely love.
    Fun and excitement await in every choice!
  </p>

  <div className="justify-center grid md:grid-cols-3 grid-cols-2 lg:grid-cols-5 items-center gap-5">
    {toys.slice(0, 5).map((toy) => (
      <Toy key={toy.toyId} toy={toy}></Toy>
    ))}
  </div>
</div>


      {/* ---Top Rated Toys */}
      <div className="text-center mt-10">
        <h1 className="font-bold text-3xl mt-10 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-400">Top Rated Toys</h1>
        <p className="text-gray-500 mb-5 mt-2">
          Explore the toys that our users adore the most. High-quality fun that
          brings endless smiles!
        </p>
        <div className="">
          <TopRated toys={toys}></TopRated>
        </div>
      </div>

      {/* ---User Review--- */}
      <div className="  text-center mt-10 pb-10">
        <h1 className=" font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-400">User Review</h1>
        <p className="text-gray-500 mt-2 mb-5">
          Hear from parents and kids who’ve tried our toys. Real experiences,
          real joy!
        </p>
        <UserReview></UserReview>
      </div>

      {/* --    Quiz--- */}
      <Quiz></Quiz>
    </div>
  );
};

export default Home;
