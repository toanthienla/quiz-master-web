import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import { API_BASE_URL } from "~/constants/constants";

export default function EditQuiz() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [quizJSON, setQuizJSON] = useState("");
  const [quizTitle, setQuizTitle] = useState("");
  const [quizDescription, setQuizDescription] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuiz() {
      try {
        const res = await axios.get(`${API_BASE_URL}/quizzes/${id}`);
        setQuizTitle(res.data.title);
        setQuizDescription(res.data.description);
        setQuizJSON(JSON.stringify(res.data, null, 2));
        setLoading(false);
      } catch (err) {
        alert("Failed to load quiz");
        console.error(err);
        navigate("/quiz");
      }
    }

    fetchQuiz();
  }, [id, navigate]);

  const handleChange = (e) => {
    setQuizJSON(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const parsedData = JSON.parse(quizJSON); // Validate and parse
      await axios.put(`${API_BASE_URL}/quizzes/${id}`, parsedData);
      alert("Quiz updated successfully!");
      navigate("/quiz");
    } catch (err) {
      alert("Failed to update quiz. Ensure your JSON is valid.");
      console.error(err);
    }
  };

  if (loading) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-base-200/30 px-4 py-10">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow space-y-6">
          {/* Header Title */}
          <div>
            <h1 className="text-3xl font-bold text-primary mb-2">{quizTitle}</h1>
            <p className="text-gray-600">{quizDescription}</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block font-semibold">Raw Quiz JSON</label>
            <textarea
              value={quizJSON}
              onChange={handleChange}
              rows={20}
              className="w-full textarea textarea-bordered font-mono text-sm"
              required
            />
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => navigate("/quiz")}
                className="btn btn-ghost"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary text-white">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );

}
