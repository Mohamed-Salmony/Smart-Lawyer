import React, { useState } from 'react';
import DashboardMenu from '../components/DashboardMenu';
import DashboardSummary from '../components/dashboard/DashboardSummary';
import FilesSection from '../components/dashboard/FilesSection';
import AnalyticsSection from '../components/dashboard/AnalyticsSection';
import UsersSection from '../components/dashboard/UsersSection';
import { useLanguage } from '../context/LanguageContext';

const Dashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState('summary');
  const { t } = useLanguage();

  const renderSection = () => {
    switch (activeSection) {
      case 'summary':
        return <DashboardSummary />;
      case 'files':
        return <FilesSection />;
      case 'analytics':
        return <AnalyticsSection />;
      case 'users':
        return <UsersSection />;
      default:
        return <DashboardSummary />;
    }
  };

  return (
    <div className="min-h-screen bg-darknavy">
      <div className="flex">
        <DashboardMenu onMenuSelect={setActiveSection} activeSection={activeSection} />
        <main className="flex-1 p-4 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {renderSection()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard; 