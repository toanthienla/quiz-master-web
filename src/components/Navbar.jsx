import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ isLoggedIn }) {
  return (
    <div className="navbar bg-base-100/90 text-base-content sticky top-0 z-30 flex h-16 w-full justify-center backdrop-blur transition-shadow duration-100 shadow-xs px-4">
      <div className="navbar-start">
        <Link to="/" className="text-xl font-bold text-primary">
          QuizMaster
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/quiz">Quiz</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/guide">Guide</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      <div className="navbar-end ">
        {isLoggedIn ? (
          <Link to="/profile" className="btn btn-sm btn-outline btn-primary">Profile</Link>
        ) : (
          <Link to="/login" className="btn btn-sm btn-primary text-white">Login</Link>
        )}

        <div className="dropdown dropdown-end lg:hidden ml-2">
          <label tabIndex={0} className="btn btn-ghost">
            <FontAwesomeIcon icon={faBars} className="text-xl" />
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/quiz">Quiz</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/guide">Guide</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            {isLoggedIn ? (
              <li><Link to="/profile">Profile</Link></li>
            ) : (
              <li><Link to="/login">Login</Link></li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
