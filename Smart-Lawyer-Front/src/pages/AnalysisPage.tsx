import React from 'react';
import MainLayout from '../components/layouts/MainLayout';
import DocumentAnalyzer from '../components/analysis/DocumentAnalyzer';
import { useLanguage } from '../context/LanguageContext';

const AnalysisPage = () => {
  const { language } = useLanguage();
  return (
    <MainLayout>
      <DocumentAnalyzer language={language} />
    </MainLayout>
  );
};

export default AnalysisPage;
