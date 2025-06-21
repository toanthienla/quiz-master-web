import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUserCircle, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ user }) {
  const isLoggedIn = !!user;

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload(); // or use navigate("/login")
  };

  return (
    <div className="navbar bg-base-100/90 text-base-content sticky top-0 z-30 flex h-16 w-full justify-center backdrop-blur transition-shadow duration-100 shadow-xs px-4">
      <div className="navbar-start">
        <Link to="/" className="text-xl font-bold text-primary">
          QuizMaster
        </Link>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 text-base">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/quiz">Quiz</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/guide">Guide</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      <div className="navbar-end gap-2">
        {/* Desktop Profile */}
        {isLoggedIn ? (
          <div className="dropdown dropdown-end hidden md:block">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <img
                src={user.img}
                alt="avatar"
                className="w-10 rounded-full border"
              />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box"
            >
              <li className="pointer-events-none">
                <div className="font-bold text-nowrap">Hello, {user.fullName}</div>
              </li>
              <li>
                <Link to="/profile">
                  <FontAwesomeIcon icon={faUserCircle} className="mr-2" />
                  Profile
                </Link>
              </li>
              <li>
                <button onClick={handleLogout}>
                  <FontAwesomeIcon icon={faRightFromBracket} className="mr-2" />
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn btn-sm btn-primary text-white">
            Login
          </Link>
        )}

        {/* Mobile Dropdown */}
        <div className="dropdown dropdown-end md:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <FontAwesomeIcon icon={faBars} className="text-xl" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box"
          >
            {isLoggedIn &&
              <li className="pointer-events-none">
                <div className="font-bold text-nowrap">Hello, {user.fullName || user.username}</div>
              </li>
            }
            <li><Link to="/">Home</Link></li>
            <li><Link to="/quiz">Quiz</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/guide">Guide</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            {isLoggedIn ? (
              <>
                <li><Link to="/profile">Profile</Link></li>
                <li><button onClick={handleLogout}>Logout</button></li>
              </>
            ) : (
              <li><Link to="/login">Login</Link></li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}