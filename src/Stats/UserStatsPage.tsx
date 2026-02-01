import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BottomNavBar from '../Layout/BottomNavBar';
import apiConfig from '../Data/backEndConnection';
import './Stats.css';
import type { UserModel } from '../Interfaces/LoginConfirm';

interface Entry {
  id: number;
  personId: number;
  data: string;
}

interface LocationState {
  user?: UserModel;
}

const UserStatsPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [user, setUser] = useState<UserModel | null>(null);
  const [totalEntries, setTotalEntries] = useState<number>(0);
  const [monthEntries, setMonthEntries] = useState<number>(0);

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
        const parsed: UserModel = JSON.parse(stored);
        setUser(parsed);
        return;
      } catch {
        localStorage.removeItem('loggedUser');
      }
    }

    navigate('/login', { replace: true });
  }, [location, navigate]);

  useEffect(() => {
    if (!user) return;

    const fetchStats = async () => {
      try {
        const resp = await fetch(`${apiConfig.getEntriesUrl()}?page=1&pagesize=1000`);
        const entries: Entry[] = await resp.json();

        const userEntries = entries.filter((e) => e.personId === user!.id);
        setTotalEntries(userEntries.length);

        const now = new Date();
        const month = now.getMonth();
        const year = now.getFullYear();

        const monthly = userEntries.filter((e) => {
          const d = new Date(e.data);
          return d.getMonth() === month && d.getFullYear() === year;
        });

        setMonthEntries(monthly.length);
      } catch (err) {
        console.error('Błąd pobierania statystyk:', err);
        setTotalEntries(0);
        setMonthEntries(0);
      }
    };

    fetchStats();
  }, [user]);

  if (!user) return <div>Ładowanie...</div>;

  return (
    <div className="stats-page">
      <div className="stats-header">
        <h1>Twoje statystyki</h1>
        <div>Użytkownik: {user.name}</div>
      </div>

      {/* <<< TEN BLOK ROBI ODSTĘP >>> */}
      <div className="stats-cards">
        <div className="stats-card">
          <h3>Łączna liczba wejść</h3>
          <div className="stats-value">{totalEntries}</div>
        </div>

        <div className="stats-card">
          <h3>Wejścia w bieżącym miesiącu</h3>
          <div className="stats-value">{monthEntries}</div>
        </div>
      </div>

      <BottomNavBar />
    </div>
  );
};

export default UserStatsPage;
