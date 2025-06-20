import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "~/store/userSlice";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [studentId, setStudentId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:3001/users");
      const users = response.data;

      const emailExists = users.some((u) => u.email === email);
      const usernameExists = users.some((u) => u.username === username);

      if (emailExists || usernameExists) {
        setError("Username or email already in use.");
        return;
      }

      const newUser = {
        fullName,
        email,
        studentId,
        username,
        password,
        img: `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&background=0069ff&color=fff`
      };

      const created = await axios.post("http://localhost:3001/users", newUser);
      dispatch(login(created.data));
      navigate("/home");
    } catch (err) {
      setError("⚠️ Failed to register. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-xl">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-primary">Create an Account</h2>
          <p className="text-sm text-gray-500">Join QuizMaster and start learning</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text font-medium">Full Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-medium">Student ID</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              required
              placeholder="e.g., CE190713"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-medium">Username</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Unique username"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Choose a password"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button type="submit" className="btn btn-primary w-full text-white">
            Register
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-semibold hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
