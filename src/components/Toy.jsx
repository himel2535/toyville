import React from "react";
import { Link } from "react-router";

const ToyCard = ({ toy }) => {
  const { pictureURL, toyName, rating, availableQuantity, price, toyId } = toy;


  return (
    <div className="w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <img
        src={pictureURL}
        alt={toyName}
        className="w-full h-50 object-cover"
      />

      {/* Card Content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{toyName}</h2>

        <div className="flex items-center mt-1 text-gray-600">
          <span className="mr-2">⭐ {rating}</span>
          <span className="ml-auto bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-400">Qty: {availableQuantity}</span>
        </div>

        <p className="text-lg font-bold mt-1">${price}</p>

        <Link
          to={`/toyDetails/${toyId}`}
          className="btn-default block mt-2 w-full font-semibold py-2 px-4 rounded-lg"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default ToyCard;
