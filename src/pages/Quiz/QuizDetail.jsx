import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function QuizDetail() {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/quizzes/${id}`)
      .then((res) => {
        setQuiz(res.data);
        setStartTime(Date.now());
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error("Quiz not found:", err);
      });
  }, [id]);

  const handleChange = (qIndex, optionKey) => {
    setAnswers((prev) => ({
      ...prev,
      [qIndex]: optionKey
    }));
  };

  const handleSubmit = () => {
    let total = 0;
    quiz.questions.forEach((q, idx) => {
      if (answers[idx] === q.correct_answer) {
        total += 1;
      }
    });
    setScore(total);
    setSubmitted(true);
    setEndTime(Date.now());
  };

  const getElapsedTime = () => {
    if (!startTime || !endTime) return "0s";
    const seconds = Math.floor((endTime - startTime) / 1000);
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}m ${sec}s`;
  };

  if (!quiz) return <div className="text-center mt-10">Loading quiz...</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar user={user} />

      <main className="flex-grow bg-base-100 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-primary">{quiz.title}</h1>
            <p>{quiz.description}</p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
            <ul className="space-y-6">
              {quiz.questions.map((q, idx) => (
                <li key={idx} className="p-6 border rounded-xl bg-white shadow text-black">
                  <h3 className="font-semibold mb-4 text-base">Q{idx + 1}. {q.question}</h3>
                  <div className="grid gap-2">
                    {Object.entries(q.options).map(([key, text]) => (
                      <label key={key} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name={`q-${idx}`}
                          value={key}
                          checked={answers[idx] === key}
                          onChange={() => handleChange(idx, key)}
                          disabled={submitted}
                          className="radio radio-xs radio-primary"
                        />
                        <span>{text}</span>
                      </label>
                    ))}
                  </div>
                </li>
              ))}
            </ul>

            {!submitted ? (
              <button
                type="submit"
                className="btn btn-primary mt-10 w-full text-white"
              >
                Submit Quiz
              </button>
            ) : (
              <div className="text-center mt-10 bg-white p-6 rounded-lg shadow-md border">
                <h2 className="text-2xl font-bold mb-2 text-primary">🎉 Quiz Completed!</h2>
                <p>You scored <strong>{score}</strong> out of <strong>{quiz.questions.length}</strong>.</p>
                <p className="mt-1">⏱️ Time Taken: <strong>{getElapsedTime()}</strong></p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
                  <button
                    type="button"
                    className="btn text-white btn-primary"
                    onClick={() => {
                      setAnswers({});
                      setSubmitted(false);
                      setScore(0);
                      setStartTime(Date.now());
                      setEndTime(null);
                    }}
                  >
                    Restart Quiz
                  </button>

                  <button
                    type="button"
                    className="btn text-white btn-neutral"
                    onClick={() => navigate("/quiz")}
                  >
                    Back to Quiz List
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}