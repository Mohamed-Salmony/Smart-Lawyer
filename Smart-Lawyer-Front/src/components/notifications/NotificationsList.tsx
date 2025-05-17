import React from 'react';
import { Bell, File, BarChart2 } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '@/components/ui/button';

interface Notification {
  id: number;
  type: 'file' | 'analysis' | 'status';
  message: string;
  messageEn: string;
  time: string;
  timeEn: string;
  isRead: boolean;
}

interface NotificationsListProps {
  language: string;
}

const NotificationsList: React.FC<NotificationsListProps> = ({ language }) => {
  // Sample notifications data
  const notifications: Notification[] = [
    {
      id: 1,
      type: 'file',
      message: 'تم إضافة تحليل قانوني جديد متعلق بقضيتك',
      messageEn: 'A new legal analysis related to your case has been added',
      time: 'منذ 5 دقائق',
      timeEn: '5 minutes ago',
      isRead: false
    },
    {
      id: 2,
      type: 'analysis',
      message: 'تم تحديث نتائج تحليل الملف رقم ١٢٣٤٥',
      messageEn: 'Analysis results for file #12345 have been updated',
      time: 'أمس',
      timeEn: 'Yesterday',
      isRead: false
    },
    {
      id: 3,
      type: 'status',
      message: 'تم تحديث حالة القضية رقم ٨٩٧٦٥ إلى "قيد المراجعة"',
      messageEn: 'Case #89765 status has been updated to "Under Review"',
      time: 'منذ يومين',
      timeEn: '2 days ago',
      isRead: true
    },
  ];
  
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'file':
        return <div className="gradient-gold p-2 rounded-full"><File size={20} className="gradient-gold-text" /></div>;
      case 'analysis':
        return <div className="bg-blue-100 p-2 rounded-full"><BarChart2 size={20} className="text-blue-500" /></div>;
      case 'status':
        return <div className="bg-green-100 p-2 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div>;
      default:
        return <Bell size={20} className="gradient-gold-text" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className={`flex justify-between items-center mb-6 ${language === 'en' ? 'flex-row-reverse' : ''}`}>
        <button className="gradient-gold-text hover:gradient-gold-text font-bold">
          {language === 'ar' ? 'تحديد الكل كمقروء' : 'Mark all as read'}
        </button>
        <div className={`flex items-center ${language === 'en' ? 'flex-row-reverse' : ''}`}>
          <h1 className="text-2xl font-bold">
            {language === 'ar' ? 'جميع الإشعارات' : 'All Notifications'}
          </h1>
          <div className={`w-10 h-10 gradient-gold rounded-full flex items-center justify-center ${language === 'ar' ? 'ml-4' : 'mr-4'}`}>
            <Bell className="text-black" size={20} />
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className={`flex gap-2 ${language === 'en' ? 'flex-row-reverse' : ''}`}>
          <Button variant="default" className="gradient-gold text-black">
            {language === 'ar' ? 'جميع الإشعارات' : 'All Notifications'}
          </Button>
          <Button variant="outline" className="bg-darkgray">
            {language === 'ar' ? 'غير مقروءة' : 'Unread'}
          </Button>
          <Button variant="outline" className="bg-darkgray">
            {language === 'ar' ? 'مقروءة' : 'Read'}
          </Button>
        </div>
        
        {notifications.map((notification) => (
          <div 
            key={notification.id}
            className={`bg-navy p-4 rounded-lg ${language === 'ar' ? 'border-r-4' : 'border-l-4'} ${notification.isRead ? 'border-gray-400' : 'border-gold'}`}
          >
            <div className={`flex items-start ${language === 'en' ? 'flex-row-reverse' : ''}`}>
              <div className={language === 'ar' ? 'ml-4' : 'mr-4'}>
                {getNotificationIcon(notification.type)}
              </div>
              <div className="flex-grow">
                <p className={language === 'ar' ? 'text-right mb-1' : 'text-left mb-1'}>
                  {language === 'ar' ? notification.message : notification.messageEn}
                </p>
                <p className={`text-gray-400 text-sm ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {language === 'ar' ? notification.time : notification.timeEn}
                </p>
              </div>
            </div>
          </div>
        ))}
        
        <div className="text-center mt-8">
          <Button variant="outline" className="bg-darkgray">
            {language === 'ar' ? 'تحميل المزيد' : 'Load More'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotificationsList;
