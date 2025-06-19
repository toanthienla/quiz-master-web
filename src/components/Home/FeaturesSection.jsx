export default function FeaturesSection() {
  const features = [
    { title: "Variety of Quizzes", desc: "From tech to trivia — we cover it all." },
    { title: "Track Your Progress", desc: "Monitor your scores and growth over time." },
    { title: "Real-time Feedback", desc: "Instant answers and explanations." }
  ];

  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold mb-6">Why Choose QuizMaster?</h2>
      <div className="grid gap-6 md:grid-cols-3 px-4 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <div key={i} className="p-6 bg-white shadow rounded-lg">
            <h3 className="font-bold text-lg">{f.title}</h3>
            <p className="mt-2 text-gray-500">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}