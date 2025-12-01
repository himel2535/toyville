import React, { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";

const QuizResults = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { answers } = state || {};
  const [toysData, setToysData] = useState([]);

  // Load toys.json
  useEffect(() => {
    fetch("/toys.json")
      .then((res) => res.json())
      .then((data) => setToysData(data))
      .catch((err) => console.error(err));
  }, []);

  // Redirect if no answers
  useEffect(() => {
    if (!answers) navigate("/quiz");
  }, [answers, navigate]);

  if (!answers || toysData.length === 0)
    return <p className="text-center mt-10">Loading...</p>;

  // Get preferred subCategory from quiz (question id 2)
  const preferredSubCategory = answers[2] || "Educational Toys";

  // Filter recommended toys
  const recommendedToys = toysData.filter(
    (toy) => toy.subCategory === preferredSubCategory
  );

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Recommended Toys
      </h2>
      <p className="text-gray-600 mb-6 text-center">
        Based on your answers, we suggest these toys for your child:
      </p>

      {recommendedToys.length === 0 ? (
        <p className="text-center text-gray-500">
          No toys found for this category.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          {recommendedToys.map((toy) => (
            <Link
              to={`/toyDetails/${toy.toyId}`}
              key={toy.toyId}
              className="bg-amber-400 hover:bg-amber-500 text-white rounded-lg p-4 text-center transition"
            >
              {toy.toyName}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuizResults;
