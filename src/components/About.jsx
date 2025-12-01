import React from "react";
import { useLoaderData } from "react-router";
import { Helmet } from "react-helmet";

const About = () => {
  const data = useLoaderData();

  return (
    <div className="py-9 px-4 md:px-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About-ToyVille</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <h1 className="text-center font-bold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-400 mb-2">
        Seller Information
      </h1>
      <p className="text-center text-gray-400 mb-6">
        All seller information of all toys is given here in a table
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-amber-100">
            <tr>
              <th className="text-left py-3 px-4 border-b">Image</th>
              <th className="text-left py-3 px-4 border-b">Toy Name</th>
              <th className="text-left py-3 px-4 border-b">Seller Name</th>
              <th className="text-left py-3 px-4 border-b">Seller Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((toy) => (
              <tr key={toy.toyId} className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">
                  <img
                    src={toy.pictureURL}
                    alt={toy.toyName}
                    className="w-20 h-20 object-cover rounded"
                  />
                </td>
                <td className="py-3 px-4 border-b font-semibold">{toy.toyName}</td>
                <td className="py-3 px-4 border-b">{toy.sellerName}</td>
                <td className="py-3 px-4 border-b text-blue-600">{toy.sellerEmail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default About;
