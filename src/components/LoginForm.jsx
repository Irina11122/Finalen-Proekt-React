import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleButton = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(
      (u) => u.username === username && u.password === password,
    );

    if (user) {
      const fakeToken = btoa(username + ':' + password);
      login(fakeToken);
      navigate('/dashboard');
    } else {
      alert('Invalid username or password');
    }
  };
  return (
    <div className="login-form-container">
      <h3> Login NOW! </h3>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleButton}> Login </button>
    </div>
  );
};
