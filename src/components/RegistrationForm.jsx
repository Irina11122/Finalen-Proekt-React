import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setMessage('');
    if (!username || !password || !email || !phone || !firstName || !lastName) {
      setMessage('Enter all the information!');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some((user) => user.username === username)) {
      setMessage('The Username is taken!');
      return;
    }

    const newUser = { firstName, lastName, username, phone, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    setMessage('Uspesna Registracija! Sega najavi se');
    setTimeout(() => navigate('/login'), 2000);
    navigate('/login');
  };
  return (
    <div className="register-form-container">
      <h3> Registracija </h3> {message && <p> {message} </p>}
      <input
        type="text"
        placeholder="First Name:"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name:"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Username:"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email:"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleRegister}> Register </button>
    </div>
  );
};
