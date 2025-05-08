import React from 'react';
import { FileText, Users, Clock, CheckCircle, XCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const DashboardSummary: React.FC = () => {
  const { t } = useLanguage();

  const recentActivities = [
    {
      id: 1,
      title: t('summary.recentFiles.contractReview'),
      status: 'approved',
      timeAgo: t('summary.timeAgo.2hours'),
      icon: <CheckCircle className="w-5 h-5 text-gold" />,
      bgColor: 'bg-darkgray',
    },
    {
      id: 2,
      title: t('summary.recentFiles.legalBrief'),
      status: 'pending',
      timeAgo: t('summary.timeAgo.4hours'),
      icon: <Clock className="w-5 h-5 text-gold" />,
      bgColor: 'bg-darkgray',
    },
    {
      id: 3,
      title: t('summary.recentFiles.caseNotes'),
      status: 'rejected',
      timeAgo: t('summary.timeAgo.1day'),
      icon: <XCircle className="w-5 h-5 text-gold" />,
      bgColor: 'bg-darkgray',
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gold">{t('dashboard.summary')}</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-navy p-6 rounded-lg shadow-sm border border-darkgray">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-300">{t('summary.totalFiles')}</p>
              <p className="text-2xl font-bold text-gold">24</p>
            </div>
            <div className="p-3 bg-darkgray rounded-full">
              <FileText className="w-6 h-6 text-gold" />
            </div>
          </div>
        </div>

        <div className="bg-navy p-6 rounded-lg shadow-sm border border-darkgray">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-300">{t('summary.userActivity')}</p>
              <p className="text-2xl font-bold text-gold">12</p>
            </div>
            <div className="p-3 bg-darkgray rounded-full">
              <Users className="w-6 h-6 text-gold" />
            </div>
          </div>
        </div>

        <div className="bg-navy p-6 rounded-lg shadow-sm border border-darkgray">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-300">{t('summary.pendingApproval')}</p>
              <p className="text-2xl font-bold text-gold">5</p>
            </div>
            <div className="p-3 bg-darkgray rounded-full">
              <Clock className="w-6 h-6 text-gold" />
            </div>
          </div>
        </div>

        <div className="bg-navy p-6 rounded-lg shadow-sm border border-darkgray">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-300">{t('summary.status.approved')}</p>
              <p className="text-2xl font-bold text-gold">19</p>
            </div>
            <div className="p-3 bg-darkgray rounded-full">
              <CheckCircle className="w-6 h-6 text-gold" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-navy rounded-lg shadow-sm border border-darkgray">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gold mb-4">{t('summary.recentUploads')}</h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between p-4 bg-darkgray rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 ${activity.bgColor} rounded-full`}>
                    {activity.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-300">{activity.title}</p>
                    <p className="text-xs text-gray-400">{t(`summary.status.${activity.status}`)}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-400">{activity.timeAgo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSummary; 