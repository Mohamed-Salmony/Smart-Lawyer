import React from 'react';
import { BarChart3, TrendingUp, Users, FileText } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface AnalyticsData {
  id: string;
  title: string;
  createdBy: string;
  date: string;
  type: string;
  status: 'completed' | 'in_progress' | 'pending';
  details: string;
}

const AnalyticsSection: React.FC = () => {
  const { t } = useLanguage();

  const analyticsData: AnalyticsData[] = [
    {
      id: '1',
      title: t('analytics.recent.contractAnalysis.title'),
      createdBy: t('analytics.recent.contractAnalysis.createdBy'),
      date: '2024-03-15',
      type: t('analytics.recent.contractAnalysis.type'),
      status: 'completed',
      details: t('analytics.recent.contractAnalysis.details'),
    },
    {
      id: '2',
      title: t('analytics.recent.documentReview.title'),
      createdBy: t('analytics.recent.documentReview.createdBy'),
      date: '2024-03-14',
      type: t('analytics.recent.documentReview.type'),
      status: 'in_progress',
      details: t('analytics.recent.documentReview.details'),
    },
    // Add more sample analytics data as needed
  ];

  const stats = [
    {
      title: t('analytics.totalUploads'),
      value: '156',
      icon: <BarChart3 className="w-6 h-6 gradient-gold-text" />,
      change: '+12%',
    },
    {
      title: t('analytics.activeUsers'),
      value: '23',
      icon: <TrendingUp className="w-6 h-6 gradient-gold-text" />,
      change: '+5%',
    },
    {
      title: t('analytics.approvedFiles'),
      value: '1,234',
      icon: <FileText className="w-6 h-6 gradient-gold-text" />,
      change: '+23%',
    },
    {
      title: t('analytics.pendingApprovals'),
      value: '15',
      icon: <Users className="w-6 h-6 gradient-gold-text" />,
      change: '+3%',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold gradient-gold-text">{t('analytics.title')}</h1>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-navy p-6 rounded-lg shadow-sm border border-darkgray">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-300">{stat.title}</p>
                <p className="text-2xl font-bold gradient-gold-text">{stat.value}</p>
                <p className="text-sm gradient-gold-text">{stat.change} {t('analytics.fromLastMonth')}</p>
              </div>
              <div className="p-3 bg-darkgray rounded-full">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-navy p-6 rounded-lg shadow-sm border border-darkgray">
          <h2 className="text-lg font-semibold gradient-gold-text mb-4">{t('analytics.uploadTrends')}</h2>
          <div className="h-64 bg-darkgray rounded-lg flex items-center justify-center">
            <p className="text-gray-300">{t('analytics.chartPlaceholder')}</p>
          </div>
        </div>

        <div className="bg-navy p-6 rounded-lg shadow-sm border border-darkgray">
          <h2 className="text-lg font-semibold gradient-gold-text mb-4">{t('analytics.userStats')}</h2>
          <div className="h-64 bg-darkgray rounded-lg flex items-center justify-center">
            <p className="text-gray-300">{t('analytics.chartPlaceholder')}</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-navy rounded-lg shadow-sm border border-darkgray">
        <div className="p-6">
          <h2 className="text-lg font-semibold gradient-gold-text mb-4">{t('analytics.uploadStats')}</h2>
          <div className="space-y-4">
            {analyticsData.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 bg-darkgray rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-navy rounded-full">
                    <FileText className="w-5 h-5 gradient-gold-text" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-300">{item.title}</p>
                    <p className="text-xs text-gray-400">{item.details}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-400">{item.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection; 