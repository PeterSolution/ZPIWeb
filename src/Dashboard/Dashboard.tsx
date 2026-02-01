import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TopStatsBar from './Components/TopStatsBar';
import CameraAndFaces from './Components/CameraAndFaces';
import DashboardRightPanel from './Components/DashboardRightPanel';
import type { UserModel } from '../Interfaces/LoginConfirm';
import './Dashboard.css';

interface LocationState {
  user?: UserModel;
}

const MOCK_USER: UserModel = {
  id: 1,
  name: 'Piotr',
  email: '',
};

const Dashboard: React.FC = () => {
  const location = useLocation();

  const [user, setUser] = useState<UserModel>(MOCK_USER);
  const [todayStatusText, setTodayStatusText] =
    useState<string>('Brak wejścia dzisiaj');

  useEffect(() => {
    const state = location.state as LocationState | undefined;

    if (state?.user) {
      setUser(state.user);
      localStorage.setItem('loggedUser', JSON.stringify(state.user));
      return;
    }

    const stored = localStorage.getItem('loggedUser');
    if (stored) {
      try {
        setUser(JSON.parse(stored));
        return;
      } catch {}
    }

    // fallback – BEZ backendu
    setUser(MOCK_USER);
  }, [location]);

  return (
    <div className="dashboard-page dashboard-page--panel">
      <TopStatsBar
        userId={user.id}
        userName={user.name}
        showTodayStart={false}
        onTodayStatusChange={setTodayStatusText}
      />

      <div className="dashboard-grid">
        <div className="dashboard-left">
          <CameraAndFaces userid={user.id} />
        </div>

        <div className="dashboard-right">
          <DashboardRightPanel todayStatusText={todayStatusText} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
