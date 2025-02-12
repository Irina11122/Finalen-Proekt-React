import { useState } from 'react';
import { RegistrationForm } from '../components/RegistrationForm';
import { LoginForm } from '../components/LoginForm';

export const LoginPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  return (
    <div className="form-container">
      <div>
        {isRegistering ? <RegistrationForm /> : <LoginForm />}
        <p
          className="account-p"
          onClick={() => setIsRegistering(!isRegistering)}
        >
          {' '}
          {isRegistering
            ? `Already have an account? Sign in!  `
            : "Don't have an account? Sign up!"}{' '}
        </p>
      </div>
    </div>
  );
};
