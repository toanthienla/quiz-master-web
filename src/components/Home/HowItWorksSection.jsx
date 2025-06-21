export default function HowItWorksSection() {
  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold mb-4 text-black">How It Works</h2>
      <p className="mb-10 text-gray-500">Get started in 3 easy steps</p>
      <div className="flex flex-col md:flex-row justify-center gap-10 max-w-4xl mx-auto px-4">
        <div>
          <div className="text-4xl font-bold text-primary">1</div>
          <p className="font-semibold mt-2">Sign Up</p>
          <p className="text-sm text-gray-500">Create your free account</p>
        </div>
        <div>
          <div className="text-4xl font-bold text-primary">2</div>
          <p className="font-semibold mt-2">Choose a Quiz</p>
          <p className="text-sm text-gray-500">Pick from curated categories</p>
        </div>
        <div>
          <div className="text-4xl font-bold text-primary">3</div>
          <p className="font-semibold mt-2">Track Progress</p>
          <p className="text-sm text-gray-500">Improve and earn badges</p>
        </div>
      </div>
    </section>
  );
}
