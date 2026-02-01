import React, { useEffect, useState } from 'react';
import apiConfig from '../../Data/backEndConnection';
import './TopStatsBar.css';

type Entry = {
  id: number;
  personId: number;
  data: string;
  place: string | null;
};

type EntersInRowRecord = {
  userId: number;
  EntersInRow: number;
  LastEdit: string | null;
};

interface Props {
  userId: number;
  userName: string;
  showTodayStart?: boolean; // domyślnie false
  onTodayStatusChange?: (text: string) => void;
}

const TopStatsBar: React.FC<Props> = ({
  userId,
  userName,
  showTodayStart = false,
  onTodayStatusChange,
}) => {

  return (
    <div className="top-stats-wrapper">
      <div className="top-stats-row">
        <div className="stat-card left">
          <h4>Wejścia do pracy</h4>
          <p className="stat-value">11</p>
          <span className="stat-label">Łącznie dla: Piotr</span>
        </div>

        <div className="stat-card right">
          <h4>Wejścia na czas pod rząd</h4>
          <p className="stat-value">2</p>
          <span className="stat-label">Aktualna seria</span>
        </div>
      </div>

      {showTodayStart && (
        <div className="today-start">
          Brak wejścia dzisiaj
        </div>
      )}
    </div>
  );
};

export default TopStatsBar;
