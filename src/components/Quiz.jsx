import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    id: 2,
    question: "What type of toys do they like?",
    options: [
      { text: "Educational", value: "Educational Toys" },
      { text: "Outdoor/Active", value: "Vehicles" },
      { text: "Creative/Arts", value: "Building Blocks" },
      { text: "Soft Toys", value: "Soft Toys" },
      { text: "Musical Toys", value: "Musical Toys" },
      { text: "Action Figures", value: "Action Figures" },
      { text: "Puzzles", value: "Puzzles" },
      { text: "Role Play", value: "Role Play Toys" }
    ],
  },
];

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const handleOption = (value) => {
    setAnswers({ ...answers, [questions[current].id]: value });

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      // Send answers to results page
      navigate("/quiz-results", { state: { answers } });
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Which Toy Suits Your Child?
      </h2>
      <p className="text-gray-600 mb-6 text-center">
        Answer a few quick questions and find the perfect toy!
      </p>

      <div className="mb-4">
        <h3 className="font-semibold text-lg mb-3">{questions[current].question}</h3>
        <div className="flex flex-col gap-3">
          {questions[current].options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleOption(option.value)}
              className="bg-gradient-to-r from-amber-400 to-rose-400 hover:from-amber-500 hover:to-rose-500 cursor-pointer text-white px-4 py-2 rounded-lg transition"
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>

      <p className="text-gray-500 text-sm mt-4 text-center">
        Question {current + 1} of {questions.length}
      </p>
    </div>
  );
};

export default Quiz;
