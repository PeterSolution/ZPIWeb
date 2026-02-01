import React, { useState } from 'react';
import type { ApiConfigType } from '../../Data/backEndConnection';
import './LoginComponent.css';
import type {UserModel} from '../../Interfaces/LoginConfirm';
//import { User } from '../../Interfaces/LoginConfirm';


interface LoginPanelProps {
  apiConfig: ApiConfigType;
  onLoginSuccess: (user:UserModel) => void;
}

export const LoginPanel: React.FC<LoginPanelProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  setTimeout(() => {
    if (username === 'Piotr' && password === '123') {
      const user: UserModel = {
        id: 1,
        name: 'Piotr',
        email: ''
      };

      localStorage.setItem('loggedUser', JSON.stringify(user));
      onLoginSuccess(user);
    } else {
      alert('Nieprawidłowy login lub hasło');
    }

    setLoading(false);
  }, 500); // małe opóźnienie, żeby wyglądało jak API
};


  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Logowanie</h1>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Nazwa użytkownika</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Wprowadź nazwę użytkownika"
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Hasło</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Wprowadź hasło"
              required
              disabled={loading}
            />
          </div>

          <button 
            type="submit" 
            className="login-button"
            disabled={loading}
          >
            {loading ? 'Sprawdzanie danych...' : 'Zaloguj się'}
          </button>
        </form>

      </div>
        <br/>
        <h3>Login: Piotr</h3>
        <br />
        <h3>Hasło: 123</h3>
    </div>
  );
};
