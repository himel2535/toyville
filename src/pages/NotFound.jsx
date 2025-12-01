import React from "react";
import { Link } from "react-router-dom";
import notFound from "../assets/App-Error.png";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 text-center ">
      {/* --- Image --- */}
      <div className="max-w-md w-full mb-6">
        <img
          src={notFound}
          alt="Page Not Found"
          className="w-full h-auto rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* ---Title--- */}
      <h1 className="text-3xl font-extrabold text-gray-800 drop-shadow-sm">
        404 - Page Not Found
      </h1>

      {/* ---Subtitle--- */}
      <p className="text-gray-600 mt-3 text-lg max-w-lg">
        Oops! The page you’re looking for doesn’t exist or might have been
        moved.
      </p>

      {/* ---Back to Home Button--- */}
      <Link
        to="/"
        className="mt-6 inline-block bg-black text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-gray-800 transition duration-300"
      >
        ⬅ Back to Home
      </Link>

      {/* Decorative emoji */}
      <div className="mt-10 text-4xl animate-bounce">🚧</div>
    </div>
  );
};

export default NotFound;
