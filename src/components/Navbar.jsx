import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
export const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true',
  );

  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode);
      return newMode;
    });
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);
  return (
    <div className="navbar-container">
      <div className="navbar-title-container">
        <h1 className="navbar-title">
          {' '}
          no<span>TO-DO</span>{' '}
        </h1>
      </div>
      <div className="btn-container">
        {location.pathname === '/dashboard' && (
          <>
            <button onClick={handleLogout} className="logout-btn">
              {' '}
              Logout{' '}
            </button>
          </>
        )}
        <button className="theme-navbar-btn" onClick={toggleDarkMode}>
          {' '}
          {darkMode ? '🔆' : '🌙'}{' '}
        </button>
      </div>
    </div>
  );
};
