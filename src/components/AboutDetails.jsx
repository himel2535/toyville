import React from "react";

const AboutDetails = ({ toy }) => {
  // console.log(toy);
  const { pictureURL, sellerEmail, sellerName, subCategory, toyName } = toy;
  return (
    <div className="max-w-sm w-full bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300  ">
      {/* Toy Image */}
      <img
        src={pictureURL}
        alt={toyName}
        className="w-full h-50 object-cover"
      />

      {/* Card Content */}
      <div className="p-6 text-center">
        {/* Toy Name */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{toyName}</h2>

        {/* Subcategory */}
        <p className="text-gray-600 font-semibold mb-2">
          Category: {subCategory}
        </p>

        {/* Seller Info */}
        <p className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-400">
          <span className="font-semibold">Seller:</span> {sellerName}
        </p>
        <p className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-400">
          <span className="font-semibold">Email:</span> {sellerEmail}
        </p>
      </div>
    </div>
  );
};

export default AboutDetails;
