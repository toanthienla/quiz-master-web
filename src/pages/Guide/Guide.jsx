import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import { useSelector } from "react-redux";
import { QUIZ_FILE_SCHEMA } from "~/constants/constants";

export default function Guide() {
  const user = useSelector((state) => state.user);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar user={user} />

      <main className="flex-grow px-4 py-12 bg-base-200/30">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Get started with QuizAPP</h1>
          <p className="text-gray-600 mb-10">
            A Quiz App is an interactive tool for practicing knowledge and critical thinking through customizable quizzes.
            It provides feedback, tracks progress, and makes learning fun and engaging.
          </p>

          <div className="space-y-8 text-left">
            {/* Step 1: JSON File */}
            <div className="p-6 rounded-lg bg-white shadow-md">
              <h2 className="text-xl font-semibold text-primary mb-2">1. JSON File</h2>
              <p className="mb-2">You need a JSON file named <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">Question.json</code> with the following format:</p>
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
                {QUIZ_FILE_SCHEMA.trim()}
              </pre>
            </div>

            {/* Step 2: Add Quiz */}
            <div className="p-6 rounded-lg bg-white shadow-md">
              <h2 className="text-xl font-semibold text-primary mb-2">2. ADD</h2>
              <p>
                Go to the <a href="/quiz" className="text-blue-600 hover:underline">Quiz page</a> and click <strong>&quot;Add Quiz&quot;</strong> to upload your <code>Question.json</code> file.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-lg font-medium">
              Need more help? <a href="/contact" className="text-blue-600 hover:underline">Contact us</a>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}