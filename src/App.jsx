import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from '~/pages/Home/Home';
import Login from '~/pages/Auth/Login';
import Register from '~/pages/Auth/Register';
import Profile from '~/pages/Profile/Profile';
import Pricing from '~/pages/Pricing/Pricing';
import Contact from '~/pages/Contact/Contact';
import Guide from '~/pages/Guide/Guide';
import QuizList from '~/pages/Quiz/QuizList';
import QuizDetail from '~/pages/Quiz/QuizDetail';

const AuthRoute = () => {
  const user = useSelector((state) => state.user);
  return user ? <Navigate to="/home" replace /> : <Outlet />;
};

const ProtectedRoute = () => {
  const user = useSelector((state) => state.user);
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/guide" element={<Guide />} />

      {/* Authentication Routes */}
      <Route element={<AuthRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/quiz" element={<QuizList />} />
        <Route path="/quiz/:id" element={<QuizDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
