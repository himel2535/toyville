import React from "react";
import { useLoaderData } from "react-router";
import { Helmet } from "react-helmet";

const About = () => {
  const data = useLoaderData();

  return (
    <div className="py-10 px-2 md:px-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About-ToyVille</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <h1 className="text-center font-bold text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-400 mb-2">
        Seller Information
      </h1>
      <p className="text-center text-gray-500 mb-6 text-sm md:text-sm leading-snug max-w-3xl mx-auto">
        Welcome to ToyVille's seller directory! Here, you can find all the
        important details about the sellers of our curated collection of toys.
        Each card contains the toy name, the seller's name, and their contact
        email to help you get in touch or learn more about their offerings.
        Explore the variety of toys, understand their sources, and make informed
        choices for your little ones. Our goal is to provide transparency and
        ease so you can shop confidently and enjoy a delightful toy shopping
        experience!
      </p>

      {/* Desktop Table */}
      <div className="overflow-x-auto mb-6 hidden md:block">
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden text-sm md:text-base">
          <thead className="bg-amber-100">
            <tr>
              <th className="text-left py-3 px-4">Image</th>
              <th className="text-left py-3 px-4">Toy Name</th>
              <th className="text-left py-3 px-4">Seller Name</th>
              <th className="text-left py-3 px-4">Seller Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((toy) => (
              <tr key={toy.toyId} className="hover:bg-gray-50">
                <td className="py-3 px-4">
                  <img
                    src={toy.pictureURL}
                    alt={toy.toyName}
                    className="w-20 h-20 object-cover rounded"
                  />
                </td>
                <td className="py-3 px-4 font-semibold">{toy.toyName}</td>
                <td className="py-3 px-4">{toy.sellerName}</td>
                <td className="py-3 px-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-600">
                  {toy.sellerEmail}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile split card layout */}
      <div className="md:hidden space-y-4">
        {data.map((toy) => (
          <div
            key={toy.toyId}
            className="bg-white rounded-lg shadow p-3 flex flex-col sm:flex-row gap-3"
          >
            {/* Left half: Image + Toy Name */}
            <div className="flex-1 flex flex-col items-center sm:items-start gap-1">
              <img
                src={toy.pictureURL}
                alt={toy.toyName}
                className="w-20 h-20 object-cover rounded"
              />
              <span className="font-semibold text-center sm:text-left">
                {toy.toyName}
              </span>
            </div>

            {/* Right half: Seller Info */}
            <div className="flex-1 flex flex-col justify-center items-center gap-1 text-sm">
              <span>
                <span className="font-semibold">Seller Name: </span>
                {toy.sellerName}
              </span>
              <span className="py-3 px-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-600 ">
                <span className="font-semibold">Seller Email: </span>
                {toy.sellerEmail}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
