import React from 'react';
import { Link } from 'react-router-dom';
import { Home, FileText, BarChart2, Users, Settings } from 'lucide-react';

interface SidebarNavProps {
  language: string;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ language }) => {
  const navItems = [
    { 
      icon: <Home size={20} />, 
      label: { ar: 'الرئيسية', en: 'Home' }, 
      path: '/dashboard' 
    },
    { 
      icon: <FileText size={20} />, 
      label: { ar: 'الملفات', en: 'Files' }, 
      path: '/library' 
    },
    { 
      icon: <BarChart2 size={20} />, 
      label: { ar: 'التحليلات', en: 'Analyses' }, 
      path: '/analysis' 
    },
    { 
      icon: <Users size={20} />, 
      label: { ar: 'المستخدمين', en: 'Users' }, 
      path: '/users' 
    },
    { 
      icon: <Settings size={20} />, 
      label: { ar: 'الإعدادات', en: 'Settings' }, 
      path: '/settings' 
    },
  ];

  return (
    <nav className="w-64 bg-navy min-h-screen p-4">
      <div className="mb-8">
        <h1 className={`text-xl font-bold text-gold ${language === 'ar' ? 'text-right' : 'text-left'}`}>
          {language === 'ar' ? 'لوحة التحكم' : 'Dashboard'}
        </h1>
      </div>
      
      <ul className="space-y-2">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className={`flex items-center p-3 rounded-lg hover:bg-darkgray transition-colors ${
                language === 'ar' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <span className="text-gold">{item.icon}</span>
              <span className={`text-white ${language === 'ar' ? 'mr-3' : 'ml-3'}`}>
                {language === 'ar' ? item.label.ar : item.label.en}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarNav;
