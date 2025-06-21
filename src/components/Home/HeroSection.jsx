export default function HeroSection() {
  return (
    <div className="flex items-center justify-center">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-black">Ready for a Fun Quiz?</h1>
          <p className="py-6">
            Dive into our brain-tickling quizzes and test your knowledge!
          </p>
          <button className="btn btn-primary text-white">Get Started</button>

          {/* Down Arrow */}
          <a href="#next" className="mt-10 animate-bounce text-black block">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}