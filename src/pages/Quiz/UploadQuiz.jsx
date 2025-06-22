import { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "~/constants/constants";

export default function UploadQuiz() {
  const [uploadStatus, setUploadStatus] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setUploadStatus("");
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setUploadStatus("⚠️ Please select a file first.");
      return;
    }

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const json = JSON.parse(event.target.result);

        if (!Array.isArray(json)) {
          setUploadStatus("❌ Invalid format. JSON must be an array.");
          return;
        }

        // Validate each quiz object
        for (let quiz of json) {
          const isValidQuiz =
            typeof quiz.title === "string" &&
            typeof quiz.description === "string" &&
            typeof quiz.number_of_questions === "number" &&
            typeof quiz.type === "string" &&
            Array.isArray(quiz.questions) &&
            quiz.questions.length === quiz.number_of_questions;

          if (!isValidQuiz) {
            setUploadStatus("❌ Quiz schema is invalid. Please check quiz fields.");
            return;
          }

          for (let q of quiz.questions) {
            const hasValidQuestion =
              typeof q.question === "string" &&
              typeof q.options === "object" &&
              typeof q.correct_answer === "string" &&
              ["A", "B", "C", "D"].includes(q.correct_answer) &&
              q.options &&
              typeof q.options["A"] === "string" &&
              typeof q.options["B"] === "string" &&
              typeof q.options["C"] === "string" &&
              typeof q.options["D"] === "string";

            if (!hasValidQuestion) {
              setUploadStatus("❌ Invalid question format. Make sure each question has options A-D and a correct_answer.");
              return;
            }
          }
        }

        // If validation passed, upload all quizzes
        for (let quiz of json) {
          await axios.post(`${API_BASE_URL}/quizzes`, quiz);
        }

        alert("✅ Quizzes uploaded successfully!");
        window.location.reload();
        setFile(null);
      } catch (err) {
        console.error(err);
        setUploadStatus("❌ Failed to read or upload the file. Make sure it’s a valid .json format.");
      }
    };

    reader.readAsText(file);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow border mt-10 mb-10 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-2 text-primary">📤 Add Your Own Quiz</h2>
      <p className="text-sm text-gray-600 mb-3">Upload a <code>.json</code> file in the correct format.</p>
      <form onSubmit={handleUpload} className="flex flex-col sm:flex-row sm:items-center gap-4">
        <input
          type="file"
          accept=".json"
          onChange={handleFileChange}
          className="file-input file-input-bordered w-full max-w-sm"
        />
        <button type="submit" className="btn btn-primary text-white">Upload</button>
      </form>
      {uploadStatus && (
        <p className="mt-2 text-sm text-start">{uploadStatus}</p>
      )}
    </div>
  );
}