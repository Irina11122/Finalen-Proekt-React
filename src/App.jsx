import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { LoginPage } from './pages/LoginPage';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <AuthProvider>
      {' '}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<h1> Stranicata ne postoi </h1>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
