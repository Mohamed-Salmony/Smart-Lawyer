import React from 'react';
import { FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../../contexts/LanguageContext';

interface MyFilesProps {
  language: string;
}

const MyFiles: React.FC<MyFilesProps> = ({ language }) => {
  // Sample data for demonstration
  const files = [
    {
      id: 1,
      title: 'مذكرة تفاهم - وزارة العدل',
      titleEn: 'Memorandum of Understanding - Ministry of Justice',
      type: 'pdf',
      time: '10:30 صباحاً',
      timeEn: '10:30 AM',
      date: '',
      dateEn: ''
    },
    {
      id: 2,
      title: 'عقد شراكة',
      titleEn: 'Partnership Agreement',
      type: 'pdf',
      time: '9:15 صباحاً',
      timeEn: '9:15 AM',
      date: '',
      dateEn: ''
    },
    {
      id: 3,
      title: 'اتفاقية تعاون - شركة البناء',
      titleEn: 'Cooperation Agreement - Construction Company',
      type: 'pdf',
      time: '3:45 مساءً',
      timeEn: '3:45 PM',
      date: '',
      dateEn: ''
    },
    {
      id: 4,
      title: 'مذكرة تفاهم - وزارة المالية',
      titleEn: 'Memorandum of Understanding - Ministry of Finance',
      type: 'pdf',
      time: '',
      timeEn: '',
      date: '15 مايو 2025',
      dateEn: 'May 15, 2025'
    },
    {
      id: 5,
      title: 'اتفاقية تعاون',
      titleEn: 'Cooperation Agreement',
      type: 'pdf',
      time: '',
      timeEn: '',
      date: '14 مايو 2025',
      dateEn: 'May 14, 2025'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-darkgray bg-opacity-40 rounded-lg p-6">
        <h1 className={`text-2xl font-bold text-gold mb-6 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
          {language === 'ar' 
            ? 'عرض جميع الملفات والتحليلات السابقة' 
            : 'View all previous files and analyses'}
        </h1>
        
        <div className="space-y-6">
          {files.map((file) => (
            <div key={file.id} className="bg-darkgray bg-opacity-70 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div className={`flex items-center ${language === 'ar' ? 'space-x-2 space-x-reverse' : 'space-x-2'}`}>
                  <Button variant="outline" className="bg-transparent text-gold border-gold hover:bg-gold hover:text-black">
                    {language === 'ar' ? 'عرض النتائج' : 'View Results'}
                  </Button>
                  
                  {(file.id === 1 || file.id === 3 || file.id === 5) && (
                    <Button variant="outline" className="bg-transparent border-gold">
                      <Download size={18} className={`text-gold ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                      {language === 'ar' ? 'تحميل الملف' : 'Download File'}
                    </Button>
                  )}
                </div>
                
                <div className={`text-sm text-gray-400 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  <p>{language === 'ar' ? file.title : file.titleEn}</p>
                  <p>{language === 'ar' ? file.time || file.date : file.timeEn || file.dateEn}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyFiles;
