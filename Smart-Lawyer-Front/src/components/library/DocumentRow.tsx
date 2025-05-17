import React from 'react';
import { Eye, Download, Trash } from 'lucide-react';

interface Document {
  id: number;
  name: string;
  nameEn: string;
  type: string;
  typeEn: string;
  date: string;
  dateEn: string;
}

interface DocumentRowProps {
  document: Document;
  language: string;
}

const DocumentRow: React.FC<DocumentRowProps> = ({ document, language }) => {
  const handleView = () => {
    console.log('Viewing document:', document.id);
    // In a real app, you would navigate to a document view page
  };
  
  const handleDownload = () => {
    console.log('Downloading document:', document.id);
    // In a real app, you would trigger a document download
  };
  
  const handleDelete = () => {
    if (window.confirm(language === 'ar' ? 'هل أنت متأكد أنك تريد حذف هذا الملف؟' : 'Are you sure you want to delete this file?')) {
      console.log('Deleting document:', document.id);
      // In a real app, you would delete the document and update the UI
    }
  };

  return (
    <tr className="hover:bg-darkgray">
      <td>{document.id}</td>
      <td>{language === 'ar' ? document.name : document.nameEn}</td>
      <td>{language === 'ar' ? document.type : document.typeEn}</td>
      <td>{language === 'ar' ? document.date : document.dateEn}</td>
      <td className="space-x-2 space-x-reverse">
        <button onClick={handleView} className="p-1 text-yellow-700 hover:text-yellow-400">
          <Eye size={18} />
        </button>
        <button onClick={handleDownload} className="p-1 text-blue-400 hover:text-blue-300">
          <Download size={18} />
        </button>
        <button onClick={handleDelete} className="p-1 text-red-400 hover:text-red-300">
          <Trash size={18} />
        </button>
      </td>
    </tr>
  );
};

export default DocumentRow;
