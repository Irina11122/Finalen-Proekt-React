import { jwtDecode } from 'jwt-decode';
import { createContext, useContext, useState } from 'react';
import useSWR from 'swr';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const { data: user, mutate } = useSWR('user', () => {
    if (!token) return null;
    try {
      return jwtDecode(token);
    } catch (err) {
      console.log(err);
      logout();
      return null;
    }
  });

  const login = (newToken, userData) => {
    localStorage.setItem('token', newToken);
    localStorage.setItem('user', JSON.stringify(userData));
    setToken(newToken);
    mutate();
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    mutate();
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {' '}
      {children}{' '}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
