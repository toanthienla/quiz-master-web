import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer p-10 bg-base-100/90 text-base-content border-t border-base-300 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {/* Brand & Description */}
      <div>
        <Link to="/" className="text-xl font-bold text-primary">
          QuizMaster
        </Link>
        <p>
          Empowering your knowledge journey.<br />
          Ace every quiz with confidence.
        </p>
      </div>

      {/* Navigation Links */}
      <div>
        <span className="footer-title">Navigate</span>
        <Link to="/" className="link link-hover">Home</Link>
        <Link to="/quiz" className="link link-hover">Quiz</Link>
        <Link to="/pricing" className="link link-hover">Pricing</Link>
        <Link to="/guide" className="link link-hover">Guide</Link>
        <Link to="/contact" className="link link-hover">Contact</Link>
      </div>

      {/* Contact / Social (optional) */}
      <div>
        <span className="footer-title">Contact</span>
        <a href="mailto:support@quizmaster.com" className="link link-hover">
          support@quizmaster.com
        </a>
        <a href="#" className="link link-hover">Facebook</a>
        <a href="#" className="link link-hover">Twitter</a>
      </div>

      {/* Bottom Line */}
      <div className="col-span-full text-center text-sm mt-10 w-full">
        <p>&copy; {new Date().getFullYear()} QuizMaster. All rights reserved.</p>
      </div>
    </footer>
  );
}
