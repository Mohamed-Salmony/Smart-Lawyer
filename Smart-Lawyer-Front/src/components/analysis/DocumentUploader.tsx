import React, { useState } from 'react';
import { Upload } from 'lucide-react';

interface DocumentUploaderProps {
  onFileSelected: (file: File) => void;
  language: string;
}

const DocumentUploader: React.FC<DocumentUploaderProps> = ({ onFileSelected, language }) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (validateFile(file)) {
        setSelectedFile(file);
        onFileSelected(file);
      }
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (validateFile(file)) {
        setSelectedFile(file);
        onFileSelected(file);
      }
    }
  };
  
  const validateFile = (file: File): boolean => {
    const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!validTypes.includes(file.type)) {
      alert(language === 'ar' ? 'يرجى تحميل ملف PDF أو DOCX فقط' : 'Please upload only PDF or DOCX files');
      return false;
    }
    
    const maxSize = 20 * 1024 * 1024; // 20MB
    if (file.size > maxSize) {
      alert(language === 'ar' ? 'حجم الملف يتجاوز الحد المسموح به (20 ميجابايت)' : 'File size exceeds the allowed limit (10MB)');
      return false;
    }
    
    return true;
  };

  return (
    <div className="w-full">
      <div 
        className={`file-upload ${dragActive ? 'border-yellow-700' : ''}`}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
      >
        <Upload className="text-yellow-700 h-10 w-10 mb-4" />
        <p className="text-center">
          {language === 'ar' ? 'اسحب الملفات هنا أو اضغط للتحميل' : 'Drag files here or click to upload'}
        </p>
        <p className="text-xs text-gray-400 mt-2 text-center">
          {language === 'ar' ? '(الحد الأقصى: 10 ميجابايت) PDF, DOCX' : '(Max: 10MB) PDF, DOCX'}
        </p>
        
        <input
          type="file"
          id="file-upload"
          className="hidden"
          accept=".pdf,.docx"
          onChange={handleFileChange}
        />
        
        <button 
          onClick={() => document.getElementById('file-upload')?.click()}
          className="mt-4 btn-primary"
        >
          {language === 'ar' ? 'اختر ملفاً' : 'Choose File'}
        </button>
      </div>
      
      {selectedFile && (
        <div className="mt-4 p-3 bg-darkgray rounded-lg flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-gold p-2 rounded mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <div className={language === 'ar' ? 'text-right' : 'text-left'}>
              <p className="text-white font-medium">{selectedFile.name}</p>
              <p className="text-gray-400 text-sm">{(selectedFile.size / (1024 * 1024)).toFixed(1)} {language === 'ar' ? 'ميجابايت' : 'MB'}</p>
            </div>
          </div>
          <button 
            onClick={() => {
              setSelectedFile(null);
            }}
            className="text-red-500 hover:text-red-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default DocumentUploader;
