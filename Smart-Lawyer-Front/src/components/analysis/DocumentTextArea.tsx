import React from 'react';

interface DocumentTextAreaProps {
  text: string;
  onChange: (text: string) => void;
  language: string;
}

const DocumentTextArea: React.FC<DocumentTextAreaProps> = ({ text, onChange, language }) => {
  return (
    <div className="w-full">
      <textarea
        className="w-full h-64 bg-darkgray text-white p-4 rounded-lg resize-none"
        placeholder={language === 'ar' ? 'قم بنسخ نص المذكرة هنا...' : 'Paste your memo text here...'}
        value={text}
        onChange={(e) => onChange(e.target.value)}
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      ></textarea>
    </div>
  );
};

export default DocumentTextArea;
