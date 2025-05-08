import React from 'react';
import MainLayout from '../components/layouts/MainLayout';
import NotificationsList from '../components/notifications/NotificationsList';
import { useLanguage } from '../context/LanguageContext';

const NotificationsPage = () => {
  const { language } = useLanguage();
  return (
    <MainLayout>
      <NotificationsList language={language} />
    </MainLayout>
  );
};

export default NotificationsPage;
