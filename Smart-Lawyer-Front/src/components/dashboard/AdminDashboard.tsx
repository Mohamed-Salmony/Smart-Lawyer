import React from 'react';
import { Users, FileText, BarChart2, Plus, Trash, Edit } from 'lucide-react';
import StatsCard from './StatsCard';
import SidebarNav from './SidebarNav';
import { useLanguage } from '../../context/LanguageContext';

const AdminDashboard: React.FC = () => {
  const { language } = useLanguage();
  
  // Sample data - in a real app, this would come from an API
  const stats = {
    users: 1234,
    rulings: 856,
    analyses: 2567
  };
  
  const recentFiles = [
    { 
      id: 1, 
      name: 'doc2025_001.pdf', 
      user: { ar: 'أحمد محمد', en: 'Ahmed Mohammed' },
      date: { ar: '15 يناير 2025', en: 'January 15, 2025' },
      status: { ar: 'مكتمل', en: 'Completed' }
    },
    { 
      id: 2, 
      name: 'doc2025_002.pdf', 
      user: { ar: 'سارة أحمد', en: 'Sarah Ahmed' },
      date: { ar: '14 يناير 2025', en: 'January 14, 2025' },
      status: { ar: 'قيد المراجعة', en: 'Under Review' }
    },
  ];

  const users = [
    { 
      id: 1, 
      name: { ar: 'أحمد محمد', en: 'Ahmed Mohammed' },
      email: 'admin@example.com', 
      role: { ar: 'مشرف', en: 'Admin' }
    },
    { 
      id: 2, 
      name: { ar: 'سارة أحمد', en: 'Sarah Ahmed' },
      email: 'user@example.com', 
      role: { ar: 'مستخدم', en: 'User' }
    },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <SidebarNav language={language} />
      
      <div className="flex-1 p-8 bg-darknavy">
        <h1 className={`text-2xl font-bold mb-8 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
          {language === 'ar' ? 'لوحة التحكم' : 'Dashboard'}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard 
            icon={<Users size={24} />} 
            title={language === 'ar' ? 'المستخدمين' : 'Users'} 
            value={stats.users} 
            bgColor="gradient-gold" 
          />
          <StatsCard 
            icon={<FileText size={24} />} 
            title={language === 'ar' ? 'الأحكام' : 'Rulings'} 
            value={stats.rulings} 
            bgColor="bg-darkgray" 
          />
          <StatsCard 
            icon={<BarChart2 size={24} />} 
            title={language === 'ar' ? 'التحليلات' : 'Analyses'} 
            value={stats.analyses} 
            bgColor="gradient-gold" 
          />
        </div>
        
        <div className="bg-navy rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <button className="btn-primary flex items-center">
              <Plus size={18} className={language === 'ar' ? 'ml-2' : 'mr-2'} />
              {language === 'ar' ? 'إضافة ملف' : 'Add File'}
            </button>
            <h2 className={`text-xl font-bold ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              {language === 'ar' ? 'الملفات المرفوعة حديثاً' : 'Recently Uploaded Files'}
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-right">{language === 'ar' ? 'اسم الملف' : 'File Name'}</th>
                  <th className="text-right">{language === 'ar' ? 'المستخدم' : 'User'}</th>
                  <th className="text-right">{language === 'ar' ? 'التاريخ' : 'Date'}</th>
                  <th className="text-right">{language === 'ar' ? 'الحالة' : 'Status'}</th>
                  <th className="text-right">{language === 'ar' ? 'خيارات' : 'Options'}</th>
                </tr>
              </thead>
              <tbody>
                {recentFiles.map((file) => (
                  <tr key={file.id} className="hover:bg-darkgray">
                    <td>{file.name}</td>
                    <td>{language === 'ar' ? file.user.ar : file.user.en}</td>
                    <td>{language === 'ar' ? file.date.ar : file.date.en}</td>
                    <td>{language === 'ar' ? file.status.ar : file.status.en}</td>
                    <td className="space-x-2 space-x-reverse">
                      <button className="p-1 force-gradient-gold-text hover:force-gradient-gold-text">
                        <Edit size={18} className="force-gradient-gold-text" />
                      </button>
                      <button className="p-1 text-red-400 hover:text-red-300">
                        <Trash size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-navy rounded-lg shadow-md p-6">
          <h2 className={`text-xl font-bold mb-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            {language === 'ar' ? 'المستخدمين' : 'Users'}
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-right">{language === 'ar' ? 'الاسم' : 'Name'}</th>
                  <th className="text-right">{language === 'ar' ? 'البريد الإلكتروني' : 'Email'}</th>
                  <th className="text-right">{language === 'ar' ? 'الدور' : 'Role'}</th>
                  <th className="text-right">{language === 'ar' ? 'خيارات' : 'Options'}</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-darkgray">
                    <td>{language === 'ar' ? user.name.ar : user.name.en}</td>
                    <td>{user.email}</td>
                    <td>{language === 'ar' ? user.role.ar : user.role.en}</td>
                    <td className="space-x-2 space-x-reverse">
                      <button className="p-1 force-gradient-gold-text hover:force-gradient-gold-text">
                        <Edit size={18} className="force-gradient-gold-text" />
                      </button>
                      <button className="p-1 text-red-400 hover:text-red-300">
                        <Trash size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
