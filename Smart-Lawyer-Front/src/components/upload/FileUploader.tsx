import React, { useState } from 'react';
import { Upload, File } from 'lucide-react';

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [documentType, setDocumentType] = useState('');
  
  const fileTypes = [
    { id: 'lawbooks', label: 'كتب قانونية', checked: false },
    { id: 'laws', label: 'قوانين', checked: false },
    { id: 'contracts', label: 'عقود', checked: false },
    { id: 'memos', label: 'مذكرات', checked: false },
    { id: 'rulings', label: 'أحكام قضائية', checked: false },
  ];
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };
  
  const handleUpload = () => {
    if (!selectedFile) {
      alert('يرجى اختيار ملف أولاً');
      return;
    }
    
    if (!documentType) {
      alert('يرجى اختيار نوع المستند');
      return;
    }
    
    setIsUploading(true);
    setUploadProgress(0);
    
    // Simulate file upload with progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        const newProgress = prev + 10;
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          
          // In a real app, you would process the upload success
          setTimeout(() => {
            alert('تم رفع الملف بنجاح');
            setSelectedFile(null);
            setUploadProgress(0);
            setDocumentType('');
          }, 500);
          
          return 100;
        }
        
        return newProgress;
      });
    }, 300);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-2 gradient-gold-text">رفع ملف قانوني جديد</h1>
      
      <div className="max-w-2xl mx-auto bg-navy p-8 rounded-lg shadow-lg mt-8">
        <div className="file-upload mb-8">
          <Upload className="text-yellow-700 h-10 w-10 mb-4" />
          <p className="text-center">اسحب الملفات هنا أو اضغط للتحميل</p>
          <p className="text-xs text-gray-400 mt-2 text-center">(الحد الأقصى: 10 ميجابايت) PDF, DOCX</p>
          
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
            اختر ملفاً
          </button>
        </div>
        
        {selectedFile && (
          <div className="mb-8">
            <div className="mb-4 p-3 bg-darkgray rounded-lg flex items-center justify-between">
              <div className="flex items-center">
                <div className="gradient-gold p-2 rounded ml-2">
                  <File className="text-black" size={20} />
                </div>
                <div className="text-right">
                  <p className="text-white font-medium">{selectedFile.name}</p>
                  <p className="text-gray-400 text-sm">{(selectedFile.size / (1024 * 1024)).toFixed(1)} ميجابايت</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedFile(null)}
                className="text-red-500 hover:text-red-400"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            {isUploading && (
              <div className="mb-4">
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${uploadProgress}%` }}></div>
                </div>
              </div>
            )}
          </div>
        )}
        
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4 text-right">تصنيف الملف</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fileTypes.map((type) => (
              <div key={type.id} className="flex items-center space-x-2 space-x-reverse">
                <input
                  type="checkbox"
                  id={type.id}
                  checked={documentType === type.id}
                  onChange={() => setDocumentType(documentType === type.id ? '' : type.id)}
                  className="w-4 h-4 gradient-gold-text focus:ring-gold"
                />
                <label htmlFor={type.id} className="text-white">{type.label}</label>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <button 
            className="btn-primary py-3 px-8 w-full md:w-auto"
            onClick={handleUpload}
            disabled={isUploading || !selectedFile}
          >
            رفع الملف
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileUploader;
