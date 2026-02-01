import React from 'react';
import BottomNavBar from '../../Layout/BottomNavBar';
import './DashboardRightPanel.css';

type Props = {
  todayStatusText: string;
};

const DashboardRightPanel: React.FC<Props> = ({ todayStatusText }) => {
  return (
    <aside className="drp">
      <div className="drp-card drp-card--top">
        <div className="drp-title">Status dzisiejszy</div>
        <div className="drp-subtitle">{todayStatusText}</div>
      </div>

      <div className="drp-card drp-card--main">
        <div className="drp-title">Nawigacja</div>
        <div className="drp-subtitle">Skróty do modułów</div>

        <div className="drp-nav">
          <BottomNavBar mode="panel" disableLogout />
        </div>
      </div>
    </aside>
  );
};

export default DashboardRightPanel;
