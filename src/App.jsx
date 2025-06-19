import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '~/pages/Home/Home';
import Login from '~/pages/Auth/Login';
import Register from './pages/Auth/Register';

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path='/' element={<Navigate to='/home' replace={true} />} />
      <Route path='/home' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

    </Routes>
  );
}

export default App;
