import ReactStars from "react-rating-stars-component";

const ToyDetailsCard = ({ toy }) => {
  return (
    <div className="max-w-3xl mb-15 mx-auto bg-white shadow-lg rounded-xl overflow-hidden ">
      <div className="flex justify-center bg-gray-100 p-6">
        <img
          src={toy.pictureURL}
          alt={toy.toyName}
          className="w-full  object-contain rounded-lg"
        />
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{toy.toyName}</h2>

        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Seller:</span> {toy.sellerName} (
          {toy.sellerEmail})
        </p>

        <p className="text-gray-600 mb-3">
          <span className="font-semibold">Category:</span> {toy.subCategory}
        </p>

        <div className="flex items-center justify-between mb-3">
          <span className="text-yellow-500 font-semibold">⭐ {toy.rating}</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-400">Qty: {toy.availableQuantity}</span>
        </div>

        <p className="text-2xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-400 mb-2">Price : ${toy.price}</p>

        {/* Description */}
        <p className="text-gray-700">{toy.description}</p>
      </div>
    </div>
  );
};

export default ToyDetailsCard;
