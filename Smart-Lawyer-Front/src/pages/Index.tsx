import React from 'react';
import MainLayout from '../components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Zap, FileText, Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Index = () => {
  const { t, language } = useLanguage();
  return (
    <MainLayout>
      <div className="text-white">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-right mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold gradient-gold-text pb-6">
                {language === 'ar' ? 'تحليل قانوني ذكي مدعوم بالذكاء الاصطناعي' : 'Smart Legal Analysis Powered by AI'}
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                {language === 'ar' ? 'منصة متكاملة للمحاماة الذكية تساعد المحامين على تحليل الوثائق القانونية باستخدام أحدث تقنيات الذكاء الاصطناعي' : 'An integrated platform for smart lawyering that helps lawyers analyze legal documents using the latest AI technologies'}
              </p>
              <div className="flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
                <Link to="/upload">
                  <Button className="gradient-gold text-black w-full sm:w-auto hover:text-white hover:brightness-110">
                    <FileText className="ml-2" size={20} />
                    {language === 'ar' ? 'رفع مستند جديد' : 'Upload New Document'}
                  </Button>
                </Link>
                <Link to="/analysis">
                  <Button className="bg-navy text-yellow-700 hover:bg-darkgray w-full sm:w-auto border-2 border-yellow-700">
                    <Zap className="ml-2 text-yellow-700" size={20} />
                    {language === 'ar' ? 'تحليل مذكرة' : 'Analyze Memo'}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/image/logo.png" 
                alt="Smart Lawyer Logo" 
                className="w-full max-w-md mx-auto animate-fade-in" 
              />
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 gradient-gold-text">{language === 'ar' ? 'مزايا المنصة' : 'Platform Features'}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-darknavy p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap size={28} className="text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2 gradient-gold-text">{language === 'ar' ? 'تحليل سريع ودقيق' : 'Fast and Accurate Analysis'}</h3>
                <p className="text-gray-300">{language === 'ar' ? 'تحليل المذكرات القانونية في دقائق مع استخراج النقاط الأساسية والطلبات القانونية' : 'Analyze legal memos in minutes, extracting key points and legal requests'}</p>
              </div>
              
              <div className="bg-darknavy p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={28} className="text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2 gradient-gold-text">{language === 'ar' ? 'بحث ذكي في السوابق' : 'Smart Precedent Search'}</h3>
                <p className="text-gray-300">{language === 'ar' ? 'العثور على الأحكام والسوابق القضائية ذات الصلة بقضيتك باستخدام تقنية التشابه النصي' : 'Find relevant legal precedents and rulings using text similarity technology'}</p>
              </div>
              
              <div className="bg-darknavy p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText size={28} className="text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2 gradient-gold-text">{language === 'ar' ? 'صياغة قانونية احترافية' : 'Professional Legal Drafting'}</h3>
                <p className="text-gray-300">{language === 'ar' ? 'توليد مقترحات لصياغة المذكرات والدفوع القانونية بأسلوب قانوني احترافي' : 'Generate suggestions for drafting memos and legal defenses in a professional legal style'}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 gradient-gold-text">{language === 'ar' ? 'ابدأ اليوم في استخدام الذكاء الاصطناعي لتعزيز عملك القانوني' : 'Start using AI today to enhance your legal work'}</h2>
            <p className="text-lg mb-6 text-gray-300">{language === 'ar' ? 'سجل الآن وانضم إلى مجتمع المحامين المستفيدين من تقنيات الذكاء الاصطناعي' : 'Register now and join the community of lawyers benefiting from AI technologies'}</p>
            <Link to="/register">
              <Button className="gradient-gold text-black text-lg py-3 px-10 hover:text-white hover:brightness-110">
                {language === 'ar' ? 'سجل مجاناً' : 'Register for Free'}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
