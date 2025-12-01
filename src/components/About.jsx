import React from "react";
import { useLoaderData } from "react-router";
import AboutDetails from "./AboutDetails";
import { Helmet } from "react-helmet";

const About = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div className="pt-9">
      <h1 className="text-center font-bold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-400 mb-1">Seller Information</h1>
      <p className="text-center text-gray-400">All seller information of all toys in given here in each cards</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 mb-5">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About-ToyVille</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>

        {data.map((toy) => (
          <AboutDetails key={toy.toyId} toy={toy}></AboutDetails>
        ))}
      </div>
    </div>
  );
};

export default About;
