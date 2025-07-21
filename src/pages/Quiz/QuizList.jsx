import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import { useSelector } from "react-redux";
import UploadQuiz from '~/pages/Quiz/UploadQuiz.jsx';
import { API_BASE_URL } from "~/constants/constants";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

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

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this quiz?")) {
      try {
        await axios.delete(`${API_BASE_URL}/quizzes/${id}`);
        setQuizzes((prev) => prev.filter((quiz) => quiz.id !== id));
      } catch (err) {
        alert("Failed to delete quiz.");
        console.error("Delete error:", err);
      }
    }
  };

  const handleEdit = (id) => {
    window.location.href = `/quiz/edit/${id}`;
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
                <div
                  key={quiz.id}
                  onClick={() => window.location.href = `/quiz/${quiz.id}`}
                  className="group block p-6 bg-white rounded-2xl shadow hover:shadow-xl border hover:border-primary transition duration-200 cursor-pointer"
                >
                  <div className="flex flex-col h-full">
                    <h2 className="text-lg font-bold text-primary group-hover:underline">{quiz.title}</h2>
                    <p className="text-sm text-gray-600 mt-2 flex-grow">{quiz.description}</p>
                    <div className="mt-4 text-sm text-gray-500">
                      <span className="block">📚 Type: <span className="font-medium capitalize">{quiz.type}</span></span>
                      <span className="block">❓ Questions: {quiz.number_of_questions}</span>
                    </div>

                    <div className="flex gap-2 mt-3 w-full justify-end">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEdit(quiz.id);
                        }}
                        className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded bg-blue-100 text-blue-700 hover:bg-blue-200 focus:outline-none focus:ring-1 focus:ring-blue-300 transition cursor-pointer"
                        title="Edit Quiz"
                      >
                        <FiEdit2 className="w-3 h-3" />
                        Edit
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(quiz.id);
                        }}
                        className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded bg-red-100 text-red-700 hover:bg-red-200 focus:outline-none focus:ring-1 focus:ring-red-300 transition cursor-pointer"
                        title="Delete Quiz"
                      >
                        <FiTrash2 className="w-3 h-3" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
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