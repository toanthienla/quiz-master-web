import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import { useSelector } from "react-redux";

export default function Guide() {
  const user = useSelector((state) => state.user);

  const steps = [
    {
      title: "1. Create an Account",
      description: "Sign up with your email to get started. Already have an account? Just log in!"
    },
    {
      title: "2. Browse Quizzes",
      description: "Explore a wide range of quizzes by category, topic, or difficulty level."
    },
    {
      title: "3. Take a Quiz",
      description: "Answer questions in real-time. Your progress is saved automatically."
    },
    {
      title: "4. Track Your Progress",
      description: "View scores, review answers, and improve over time with analytics."
    },
    {
      title: "5. Compete & Learn",
      description: "Challenge friends or join public competitions to sharpen your skills."
    },
    {
      title: "6. Add Your Own Quiz",
      description: (
        <div className="space-y-2">
          <p>You can create your own quiz by preparing a <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">.json</code> file in the following format:</p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            {`[
  {
    "id": "your_quiz_id",
    "title": "Your Quiz Title",
    "description": "A short description of your quiz",
    "number_of_questions": 3,
    "type": "Science",
    "questions": [
      {
        "question": "What is the unit of force in the International System of Units (SI)?",
        "options": {
          "A": "Joule",
          "B": "Newton",
          "C": "Watt",
          "D": "Pascal"
        },
        "correct_answer": "B"
      }
      // Add more questions here
    ]
  }
]`}
          </pre>
          <p>Then go to the <a href="/quiz" className="text-blue-600 hover:underline">Quiz page</a> and click <strong>&quot;Add Quiz&quot;</strong> to upload your file.</p>
        </div>
      )
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar user={user} />

      <main className="flex-grow px-4 py-12 bg-base-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">How to Use QuizMaster</h1>
          <p className="text-gray-600 mb-10">Follow these simple steps to get started and make the most of your experience.</p>

          <div className="space-y-8 text-left">
            {steps.map((step, index) => (
              <div key={index} className="p-6 rounded-lg bg-white shadow-md">
                <h2 className="text-xl font-semibold text-primary mb-2">{step.title}</h2>
                <div className="text-gray-700">{step.description}</div>
              </div>
            ))}
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
