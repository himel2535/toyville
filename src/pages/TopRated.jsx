import React from "react";

const TopRated = ({ toys }) => {
  const topToys = toys.filter((t) => t.rating >= 4.8);

  return (
    <section className="w-full mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {topToys.map((toy) => (
          <div
            key={toy.toyId}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
          >
            <img
              src={toy.pictureURL}
              alt={toy.toyName}
              className="w-full h-50 mx-auto object-contain"
            />
            <h3 className="text-lg font-semibold text-center ">
              {toy.toyName}
            </h3>
            <div className="flex justify-between items-center  mx-5">
              <p className="text-center text-gray-600">⭐ {toy.rating}</p>
              <p className="text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-400 font-bold">
                ${toy.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRated;
