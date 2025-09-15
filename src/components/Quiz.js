"use client";
import { useState } from "react";

const questions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    answer: "Delhi",
    category: "Geography",
    difficulty: "Easy",
  },
  {
    question: "Which language is used in React?",
    options: ["Python", "JavaScript", "C++", "Java"],
    answer: "JavaScript",
    category: "Programming",
    difficulty: "Easy",
  },
  {
    question: "Who is the father of computers?",
    options: ["Charles Babbage", "Alan Turing", "Steve Jobs", "Bill Gates"],
    answer: "Charles Babbage",
    category: "History",
    difficulty: "Medium",
  },
  {
    question: "Which algorithm is used in Google Search?",
    options: ["PageRank", "Binary Search", "QuickSort", "Dijkstra"],
    answer: "PageRank",
    category: "Technology",
    difficulty: "Hard",
  },
  {
    question: "Which language is used in React?",
    options: ["Python", "JavaScript", "C++", "Java"],
    answer: "JavaScript",
    category: "Programming",
    difficulty: "Easy",
  },
  {
    question: "Who is the father of computers?",
    options: ["Charles Babbage", "Alan Turing", "Steve Jobs", "Bill Gates"],
    answer: "Charles Babbage",
    category: "History",
    difficulty: "Medium",
  },
  {
    question: "Which algorithm is used in Google Search?",
    options: ["PageRank", "Binary Search", "QuickSort", "Dijkstra"],
    answer: "PageRank",
    category: "Technology",
    difficulty: "Hard",
  }
];

export default function Quiz() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const categories = [...new Set(questions.map((q) => q.category))];
  const difficulties = [...new Set(questions.map((q) => q.difficulty))];

  const startQuiz = () => {
    let filtered = questions.filter(
      (q) =>
        (selectedCategory ? q.category === selectedCategory : true) &&
        (selectedDifficulty ? q.difficulty === selectedDifficulty : true)
    );

    if (filtered.length === 0) {
      alert("No questions found. Try another filter!");
      return;
    }

    setFilteredQuestions(filtered);
    setQuizStarted(true);
  };

  const handleAnswer = (option) => {
    if (option === filteredQuestions[current].answer) {
      setScore(score + 1);
    }

    if (current + 1 < filteredQuestions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  const restartQuiz = () => {
    setQuizStarted(false);
    setFinished(false);
    setScore(0);
    setCurrent(0);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl text-center">
      {!quizStarted ? (
        <div>
          <h2 className="text-2xl font-bold mb-6 text-black">🎮 Start Quiz</h2>

          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-500">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 border rounded-lg text-gray-500"
            >
              <option value="">All</option>
              {categories.map((c, i) => (
                <option key={i} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className="block mb-1 font-medium text-gray-500">Difficulty</label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full p-2 border rounded-lg text-gray-500"
            >
              <option value="">All</option>
              {difficulties.map((d, i) => (
                <option key={i} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={startQuiz}
            className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Start 🚀
          </button>
        </div>
      ) : !finished ? (
        <div>
          <h2 className="text-xl font-bold mb-4 text-gray-500">
            Q{current + 1}. {filteredQuestions[current].question}
          </h2>
          <p className="text-gray-500 text-sm mb-4">
            Category: {filteredQuestions[current].category} | Difficulty:{" "}
            {filteredQuestions[current].difficulty}
          </p>
          <div className="space-y-2">
            {filteredQuestions[current].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(opt)}
                className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-500">🎉 Quiz Completed!</h2>
          <p className="text-lg mb-4 text-gray-500">
            You scored <b>{score}</b> out of{" "}
            <b>{filteredQuestions.length}</b>
          </p>
          <button
            onClick={restartQuiz}
            className="w-full py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
          >
            Restart 🔄
          </button>
        </div>
      )}
    </div>
  );
}
