import React from 'react';
import MainLayout from '../components/layouts/MainLayout';
import DocumentLibrary from '../components/library/DocumentLibrary';
import { useLanguage } from '../context/LanguageContext';

const LibraryPage = () => {
  const { language } = useLanguage();
  return (
    <MainLayout>
      <DocumentLibrary language={language} />
    </MainLayout>
  );
};

export default LibraryPage;
