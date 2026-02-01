import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BottomNavBar.css';

type Props = {
  mode?: 'fixed' | 'panel';
  disableLogout?: boolean;
};

const BottomNavBar: React.FC<Props> = ({ mode = 'fixed', disableLogout = false }) => {
  const navigate = useNavigate();

  const handleProfile = () => {
    localStorage.removeItem('loggedUser');
    navigate('/login');
  };

  return (
    <div className={`bottom-nav ${mode === 'panel' ? 'bottom-nav--panel' : 'bottom-nav--fixed'}`}>
      <button
        className="bottom-nav-btn"
        onClick={() => navigate('/dashboard')}
      >
        STRONA GŁÓWNA
      </button>

      <button
        className="bottom-nav-btn"
        onClick={() => navigate('/stats')}
      >
        STATYSTYKI
      </button>

      <button
        className="bottom-nav-btn account-btn"
        onClick={handleProfile}
        title={disableLogout ? 'Profil' : 'Wyloguj'}
      >
        <span style={{ fontSize: '26px' }}>👤</span>
      </button>
    </div>
  );
};

export default BottomNavBar;
