import React from 'react';
import MainLayout from '../components/layouts/MainLayout';
import MyFiles from '../components/files/MyFiles';
import { useLanguage } from '../context/LanguageContext';

const MyFilesPage = () => {
  const { language } = useLanguage();
  return (
    <MainLayout>
      <MyFiles language={language} />
    </MainLayout>
  );
};

export default MyFilesPage;
