
import React from 'react';
import { FileText, Download } from 'lucide-react';

const AnalysisResults = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-10 gradient-gold-text">نتيجة تحليل المذكرة</h1>
      
      <div className="flex justify-between mb-8">
        <div className="flex space-x-2 space-x-reverse">
          <button className="btn-primary flex items-center">
            <Download size={18} className="ml-2" />
            تصدير PDF
          </button>
          <button className="btn-secondary flex items-center">
            <FileText size={18} className="ml-2" />
            تصدير Word
          </button>
        </div>
        
        <div className="flex space-x-2 space-x-reverse">
          <button className="lang-btn">العربية</button>
          <button className="lang-btn-inactive">English</button>
        </div>
      </div>
      
      {/* Analysis Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="result-section">
          <h2 className="result-section-title gradient-gold-text">الوقائع المستخرجة</h2>
          <div className="bg-darkgray p-3 rounded mb-2">
            <p className="text-right">تم إبرام عقد بيع بين الطرفين بتاريخ ١٥/مايو/٢٠٢٥</p>
          </div>
          <div className="bg-darkgray p-3 rounded">
            <p className="text-right">لم يتم تسليم البضاعة في الموعد المتفق عليه</p>
          </div>
        </div>
        
        <div className="result-section">
          <h2 className="result-section-title gradient-gold-text">الطلبات القانونية</h2>
          <div className="bg-darkgray p-3 rounded mb-2">
            <p className="text-right">فسخ العقد المؤرخ ١٥/مايو/٢٠٢٥</p>
          </div>
          <div className="bg-darkgray p-3 rounded">
            <p className="text-right">التعويض عن الأضرار المادية والمعنوية</p>
          </div>
        </div>
      </div>
      
      {/* Legal Phrasing */}
      <div className="result-section mb-8">
        <h2 className="result-section-title gradient-gold-text">الصياغة القانونية المقترحة</h2>
        <div className="bg-darkgray p-3 rounded">
          <p className="text-right leading-relaxed">
            وحيث أن هذا الإخلال قد ألحق أضراراً مادية ومعنوية بالمدعي، لذا نلتمس من عدالة المحكمة الموقرة الحكم بفسخ العقد المؤرخ في ١٥/يناير/٢٠٢٥ حيث إن المدعى عليه قد أخل بالتزاماته التعاقدية المنصوص عليها في العقد المؤرخ...
          </p>
        </div>
      </div>
      
      {/* Similar Rulings */}
      <div className="result-section">
        <h2 className="result-section-title gradient-gold-text">الأحكام المتشابهة</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-darkgray p-4 rounded">
            <div className="flex justify-between mb-2">
              <div className="gradient-gold text-black text-xs px-2 py-1 rounded">٧٥٪</div>
              <h3 className="font-bold">حكم رقم ٣٢٤٥</h3>
            </div>
            <p className="text-sm text-right">المحكمة التجارية بالرياض</p>
            <p className="text-xs text-gray-400 text-right mt-2">المادة ٧١ من نظام المحاكم التجارية</p>
          </div>
          
          <div className="bg-darkgray p-4 rounded">
            <div className="flex justify-between mb-2">
              <div className="gradient-gold text-black text-xs px-2 py-1 rounded">٦٨٪</div>
              <h3 className="font-bold">حكم رقم ١٨٧١</h3>
            </div>
            <p className="text-sm text-right">المحكمة التجارية بجدة</p>
            <p className="text-xs text-gray-400 text-right mt-2">المادة ٨٩ من نظام المحاكم التجارية</p>
          </div>
          
          <div className="bg-darkgray p-4 rounded">
            <div className="flex justify-between mb-2">
              <div className="gradient-gold text-black text-xs px-2 py-1 rounded">٦٣٪</div>
              <h3 className="font-bold">حكم رقم ٩٦٤٣</h3>
            </div>
            <p className="text-sm text-right">المحكمة التجارية بالدمام</p>
            <p className="text-xs text-gray-400 text-right mt-2">المادة ٩٢ من نظام المحاكم التجارية</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisResults;
