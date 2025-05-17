import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useToast } from '@/components/ui/use-toast';

const UserProfile: React.FC = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  
  const [user, setUser] = useState({
    fullName: 'محمد أحمد',
    fullNameEn: 'Mohammed Ahmed',
    email: 'mohammed@example.com',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
    language: language
  });
  
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would save changes to the user profile
    console.log('Saving user profile changes:', user);
    toast({
      title: language === 'ar' ? 'تم الحفظ بنجاح' : 'Changes saved successfully',
      description: language === 'ar' ? 'تم تحديث معلوماتك الشخصية' : 'Your profile information has been updated',
    });
  };
  
  const handleCancel = () => {
    // Reset form or navigate away
    console.log('Cancelled changes');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-navy rounded-lg p-6 mb-6 shadow-sm border border-darkgray">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-xl font-bold gradient-gold-text">
            {language === 'ar' ? user.fullName : user.fullNameEn}
          </h1>
          <p className="text-gray-300">{user.email}</p>
        </div>
      </div>
      
      <div className="bg-navy rounded-lg p-6 shadow-sm border border-darkgray">
        <div className="flex justify-between items-center border-b border-darkgray pb-4 mb-6">
          <div className="flex-1 text-center">
            <h2 className="text-lg font-bold gradient-gold-text inline-block">
              <span className="mx-2">{language === 'ar' ? 'الملف الشخصي' : 'Profile'}</span>
            </h2>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-4">
            <label htmlFor="fullName" className={`block text-sm font-medium text-gray-300 ${language === 'ar' ? 'text-right' : 'text-left'} mb-1`}>
              {language === 'ar' ? 'الاسم الكامل' : 'Full Name'}
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={language === 'ar' ? user.fullName : user.fullNameEn}
              onChange={handleChange}
              className={`bg-darkgray border border-darkgray rounded-md p-2 w-full text-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent ${language === 'ar' ? 'text-right' : 'text-left'}`}
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className={`block text-sm font-medium text-gray-300 ${language === 'ar' ? 'text-right' : 'text-left'} mb-1`}>
              {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className={`bg-darkgray border border-darkgray rounded-md p-2 w-full text-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent ${language === 'ar' ? 'text-right' : 'text-left'}`}
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="currentPassword" className={`block text-sm font-medium text-gray-300 ${language === 'ar' ? 'text-right' : 'text-left'} mb-1`}>
              {language === 'ar' ? 'كلمة المرور الحالية' : 'Current Password'}
            </label>
            <div className="relative">
              <input
                type={showCurrentPassword ? "text" : "password"}
                id="currentPassword"
                name="currentPassword"
                value={user.currentPassword}
                onChange={handleChange}
                className={`bg-darkgray border border-darkgray rounded-md p-2 w-full text-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent ${language === 'ar' ? 'text-right' : 'text-left'}`}
              />
              <button
                type="button"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:gradient-gold-text"
              >
                {showCurrentPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="newPassword" className={`block text-sm font-medium text-gray-300 ${language === 'ar' ? 'text-right' : 'text-left'} mb-1`}>
              {language === 'ar' ? 'كلمة المرور الجديدة' : 'New Password'}
            </label>
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                id="newPassword"
                name="newPassword"
                value={user.newPassword}
                onChange={handleChange}
                className={`bg-darkgray border border-darkgray rounded-md p-2 w-full text-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent ${language === 'ar' ? 'text-right' : 'text-left'}`}
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:gradient-gold-text"
              >
                {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="confirmNewPassword" className={`block text-sm font-medium text-gray-300 ${language === 'ar' ? 'text-right' : 'text-left'} mb-1`}>
              {language === 'ar' ? 'تأكيد كلمة المرور الجديدة' : 'Confirm New Password'}
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmNewPassword"
                name="confirmNewPassword"
                value={user.confirmNewPassword}
                onChange={handleChange}
                className={`bg-darkgray border border-darkgray rounded-md p-2 w-full text-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent ${language === 'ar' ? 'text-right' : 'text-left'}`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:gradient-gold-text"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          
          <div className="flex justify-end space-x-4 space-x-reverse">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 border border-darkgray rounded-md text-gray-300 hover:bg-darkgray transition-colors"
            >
              {language === 'ar' ? 'إلغاء' : 'Cancel'}
            </button>
            <button
              type="submit"
              className="px-4 py-2 gradient-gold text-black rounded-md transition-colors"
            >
              {language === 'ar' ? 'حفظ التغييرات' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
