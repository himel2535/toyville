import React from "react";
import { Link } from "react-router";

const ToyCard = ({ toy }) => {
  const { pictureURL, toyName, rating, availableQuantity, price, toyId } = toy;

  return (
    <div className="w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {/* Image */}
      <img
        src={pictureURL}
        alt={toyName}
        className="w-full h-40 object-cover"
      />

      {/* Card Content */}
      <div className="p-4 flex flex-col">
        {/* Toy Name Box - fixed 2 line height */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2 h-14 line-clamp-2 overflow-hidden">
          {toyName}
        </h2>

        {/* Rating + Qty - always same position */}
        <div className="flex items-center text-gray-600 mb-2">
          <span className="mr-2">⭐ {rating}</span>
          <span className="ml-auto bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-400">
            Qty: {availableQuantity}
          </span>
        </div>

        {/* Price */}
        <p className="text-lg font-bold mb-2">${price}</p>

        {/* View More Button */}
        <Link
          to={`/toyDetails/${toyId}`}
          className="btn-default block w-full font-semibold py-2 px-4 rounded-lg"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default ToyCard;
