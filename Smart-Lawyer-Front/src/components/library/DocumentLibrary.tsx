import React, { useState } from 'react';
import { Search, Filter, Calendar, Eye } from 'lucide-react';
import DocumentRow from './DocumentRow';

interface Document {
  id: number;
  name: string;
  nameEn: string;
  type: string;
  typeEn: string;
  date: string;
  dateEn: string;
}

interface DocumentLibraryProps {
  language: string;
}

const DocumentLibrary: React.FC<DocumentLibraryProps> = ({ language }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  
  // Sample document data
  const documents: Document[] = [
    { 
      id: 1, 
      name: 'قانون العمل الموحد', 
      nameEn: 'Unified Labor Law',
      type: 'قوانين', 
      typeEn: 'Laws',
      date: '15/01/2025',
      dateEn: '01/15/2025'
    },
    { 
      id: 2, 
      name: 'نموذج عقد عمل', 
      nameEn: 'Employment Contract Template',
      type: 'كتب عقود', 
      typeEn: 'Contract Templates',
      date: '20/01/2025',
      dateEn: '01/20/2025'
    },
    { 
      id: 3, 
      name: 'مذكرة دفاع مدني', 
      nameEn: 'Civil Defense Memo',
      type: 'مذكرات', 
      typeEn: 'Memos',
      date: '25/01/2025',
      dateEn: '01/25/2025'
    },
  ];
  
  const filteredDocuments = documents.filter(doc => {
    const searchField = language === 'ar' ? doc.name : doc.nameEn;
    const typeField = language === 'ar' ? doc.type : doc.typeEn;
    const dateField = language === 'ar' ? doc.date : doc.dateEn;
    
    return (
      (searchTerm === '' || searchField.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedType === '' || typeField === selectedType) &&
      (selectedDate === '' || dateField === selectedDate)
    );
  });

  const documentTypes = [
    { ar: 'قوانين', en: 'Laws' },
    { ar: 'كتب عقود', en: 'Contract Templates' },
    { ar: 'مذكرات', en: 'Memos' },
    { ar: 'أحكام قضائية', en: 'Court Rulings' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-navy rounded-lg p-6 shadow-lg">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-grow relative">
            <Search className={`absolute ${language === 'ar' ? 'right-3' : 'left-3'} top-1/2 transform -translate-y-1/2 text-gray-400`} size={18} />
            <input
              type="text"
              placeholder={language === 'ar' ? 'ابحث باسم الملف أو الكلمات المفتاحية' : 'Search by file name or keywords'}
              className={`form-input ${language === 'ar' ? 'pr-10' : 'pl-10'}`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="relative">
            <select
              className={`form-input appearance-none ${language === 'ar' ? 'pr-10' : 'pl-10'}`}
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="">{language === 'ar' ? 'نوع الملف' : 'File Type'}</option>
              {documentTypes.map((type, index) => (
                <option key={index} value={language === 'ar' ? type.ar : type.en}>
                  {language === 'ar' ? type.ar : type.en}
                </option>
              ))}
            </select>
            <Filter className={`absolute ${language === 'ar' ? 'left-3' : 'right-3'} top-1/2 transform -translate-y-1/2 text-gray-400`} size={18} />
          </div>
          
          <div className="relative">
            <Calendar className={`absolute ${language === 'ar' ? 'right-3' : 'left-3'} top-1/2 transform -translate-y-1/2 text-gray-400`} size={18} />
            <input
              type="date"
              className={`form-input ${language === 'ar' ? 'pr-10' : 'pl-10'}`}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>{language === 'ar' ? 'رقم' : 'No.'}</th>
                <th>{language === 'ar' ? 'اسم الملف' : 'File Name'}</th>
                <th>{language === 'ar' ? 'النوع' : 'Type'}</th>
                <th>{language === 'ar' ? 'تاريخ الرفع' : 'Upload Date'}</th>
                <th>{language === 'ar' ? 'خيارات' : 'Options'}</th>
              </tr>
            </thead>
            <tbody>
              {filteredDocuments.map((doc) => (
                <DocumentRow key={doc.id} document={doc} language={language} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DocumentLibrary;
