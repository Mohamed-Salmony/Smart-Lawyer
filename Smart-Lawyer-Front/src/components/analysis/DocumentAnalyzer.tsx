import React, { useState } from 'react';
import DocumentUploader from './DocumentUploader';
import DocumentTextArea from './DocumentTextArea';
import { Zap } from 'lucide-react';

interface DocumentAnalyzerProps {
  language: string;
}

const DocumentAnalyzer: React.FC<DocumentAnalyzerProps> = ({ language }) => {
  const [documentText, setDocumentText] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const handleFileSelected = (file: File) => {
    setSelectedFile(file);
    setDocumentText('');
  };
  
  const handleTextChange = (text: string) => {
    setDocumentText(text);
  };
  
  const handleAnalyzeDocument = () => {
    if (!documentText && !selectedFile) {
      alert(language === 'ar' ? 'يرجى إدخال نص المذكرة أو تحميل ملف' : 'Please enter memo text or upload a file');
      return;
    }
    
    setIsAnalyzing(true);
    setProgress(0);
    
    const totalSteps = 10;
    let currentStep = 0;
    
    const analysisInterval = setInterval(() => {
      currentStep += 1;
      setProgress(Math.round((currentStep / totalSteps) * 100));
      
      if (currentStep >= totalSteps) {
        clearInterval(analysisInterval);
        setIsAnalyzing(false);
        window.location.href = '/analysis/results';
      }
    }, 300);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-2 text-gold">
        {language === 'ar' ? 'تحليل المذكرة القانونية بالذكاء الاصطناعي' : 'AI-Powered Legal Memo Analysis'}
      </h1>
      <p className="text-gray-300 text-center mb-10">
        {language === 'ar' ? 'قم بتحميل المذكرة القانونية أو نسخ محتواها أدناه للتحليل الذكي' : 'Upload your legal memo or paste its content below for smart analysis'}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-navy rounded-lg p-6 shadow-lg">
          <h2 className={`text-xl font-bold mb-4 text-gold ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            {language === 'ar' ? 'تحميل ملف' : 'Upload File'}
          </h2>
          <DocumentUploader onFileSelected={handleFileSelected} language={language} />
        </div>
        
        <div className="bg-navy rounded-lg p-6 shadow-lg">
          <h2 className={`text-xl font-bold mb-4 text-gold ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            {language === 'ar' ? 'نص المذكرة' : 'Memo Text'}
          </h2>
          <DocumentTextArea text={documentText} onChange={handleTextChange} language={language} />
        </div>
      </div>
      
      <div className="text-center mt-10">
        <button 
          className="btn-primary text-lg py-3 px-10 flex items-center mx-auto"
          disabled={isAnalyzing}
          onClick={handleAnalyzeDocument}
        >
          <Zap className={language === 'ar' ? 'ml-2' : 'mr-2'} />
          <span>{language === 'ar' ? 'تحليل المذكرة' : 'Analyze Memo'}</span>
        </button>
        
        {isAnalyzing && (
          <div className="mt-6">
            <p className="text-gray-300 mb-2">
              {language === 'ar' ? 'جاري التحليل...' : 'Analyzing...'}
            </p>
            <div className="progress-bar w-full max-w-md mx-auto">
              <div className="progress transition-all" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="mt-2">{progress}%</p>
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <div className="bg-navy p-6 rounded-lg text-center">
          <div className="mb-4 flex justify-center">
            <Zap className="text-gold h-10 w-10" />
          </div>
          <h3 className="text-xl font-bold mb-2">
            {language === 'ar' ? 'تحليل سريع' : 'Fast Analysis'}
          </h3>
          <p className="text-gray-300 text-sm">
            {language === 'ar' ? 'تحليل ذكي للمذكرات القانونية في دقائق معدودة' : 'Smart analysis of legal memos in minutes'}
          </p>
        </div>
        
        <div className="bg-navy p-6 rounded-lg text-center">
          <div className="mb-4 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">
            {language === 'ar' ? 'خصوصية تامة' : 'Complete Privacy'}
          </h3>
          <p className="text-gray-300 text-sm">
            {language === 'ar' ? 'حماية كاملة لمحتوى المذكرات وبيانات العملاء' : 'Complete protection of memo content and client data'}
          </p>
        </div>
        
        <div className="bg-navy p-6 rounded-lg text-center">
          <div className="mb-4 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">
            {language === 'ar' ? 'دقة عالية' : 'High Accuracy'}
          </h3>
          <p className="text-gray-300 text-sm">
            {language === 'ar' ? 'نتائج تحليل دقيقة مدعومة بأحدث تقنيات الذكاء الاصطناعي' : 'Accurate analysis results supported by the latest AI technologies'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DocumentAnalyzer;
