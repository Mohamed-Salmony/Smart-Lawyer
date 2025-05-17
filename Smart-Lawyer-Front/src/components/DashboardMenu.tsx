import React, { useState } from 'react';
import {
  LayoutDashboard,
  FileText,
  BarChart3,
  Users,
  Menu,
  X,
  Languages
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface DashboardMenuProps {
  onMenuSelect: (menu: string) => void;
  activeSection: string;
}

const DashboardMenu: React.FC<DashboardMenuProps> = ({ onMenuSelect, activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, toggleLanguage, language } = useLanguage();

  const menuItems = [
    {
      id: 'summary',
      label: t('dashboard.summary'),
      icon: <LayoutDashboard className="w-5 h-5" />,
    },
    {
      id: 'files',
      label: t('dashboard.files'),
      icon: <FileText className="w-5 h-5" />,
    },
    {
      id: 'analytics',
      label: t('dashboard.analytics'),
      icon: <BarChart3 className="w-5 h-5" />,
    },
    {
      id: 'users',
      label: t('dashboard.users'),
      icon: <Users className="w-5 h-5" />,
    },
  ];

  const handleMenuClick = (menuId: string) => {
    onMenuSelect(menuId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-navy shadow-md"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6 gradient-gold-text" />
        ) : (
          <Menu className="w-6 h-6 gradient-gold-text" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-darknavy bg-opacity-75 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-navy border-r border-darkgray transform transition-transform duration-200 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold gradient-gold-text">{t('dashboard.title')}</h2>
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg hover:bg-darkgray transition-colors"
              title={language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
            >
              <Languages className="w-5 h-5 gradient-gold-text" />
            </button>
          </div>
          <nav>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleMenuClick(item.id)}
                    className={`w-full flex items-center px-4 py-2 text-sm rounded-lg transition-colors ${
                      activeSection === item.id
                        ? 'bg-darkgray gradient-gold-text'
                        : 'text-gray-300 hover:bg-darkgray hover:gradient-gold-text'
                    }`}
                  >
                    {item.icon}
                    <span className="ml-3">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default DashboardMenu; 