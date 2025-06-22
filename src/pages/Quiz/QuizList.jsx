import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import { useSelector } from "react-redux";
import UploadQuiz from '~/pages/Quiz/UploadQuiz.jsx';
import { API_BASE_URL } from "~/constants/constants";

export default function QuizList() {
  const [quizzes, setQuizzes] = useState([]);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    fetchQuizzes();
  }, []);

  const fetchQuizzes = () => {
    axios.get(`${API_BASE_URL}/quizzes`)
      .then((res) => setQuizzes(res.data))
      .catch((err) => console.error("Error fetching quizzes:", err));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar user={user} />

      <main className="flex-grow bg-base-200/30 px-4">
        <div className="max-w-6xl mx-auto mt-10">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-primary">Choose a Quiz</h1>
            <p className="mt-2 text-gray-600">Test your skills across multiple subjects and topics</p>
          </div>

          {/* Quiz List */}
          {quizzes.length === 0 ? (
            <div className="text-center text-gray-500">No quizzes available.</div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {quizzes.map((quiz) => (
                <Link
                  to={`/quiz/${quiz.id}`}
                  key={quiz.id}
                  className="group block p-6 bg-white rounded-2xl shadow hover:shadow-xl border hover:border-primary transition duration-200"
                >
                  <div className="flex flex-col h-full">
                    <h2 className="text-lg font-bold text-primary group-hover:underline">{quiz.title}</h2>
                    <p className="text-sm text-gray-600 mt-2 flex-grow">{quiz.description}</p>
                    <div className="mt-4 text-sm text-gray-500">
                      <span className="block">📚 Type: <span className="font-medium capitalize">{quiz.type}</span></span>
                      <span className="block">❓ Questions: {quiz.number_of_questions}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Upload Form */}
        <div className="border-t border-gray-300 mt-10 py-6">
          <UploadQuiz />
        </div>
      </main>
      <Footer />
    </div>
  );
}