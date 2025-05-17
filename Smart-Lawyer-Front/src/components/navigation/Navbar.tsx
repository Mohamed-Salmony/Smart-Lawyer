import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, User, Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import Logo from '../common/Logo';
import { Avatar } from '@/components/ui/avatar';
import { useLanguage } from '../../context/LanguageContext';

const Navbar = () => {
  const isMobile = useIsMobile();
  const { language, toggleLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Sample user data - in a real app this would come from auth context/state
  const user = {
    name: 'محمد أحمد',
    email: 'mohammed@example.com',
    nameEn: 'Mohammed Ahmed',
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { to: '/', label: language === 'ar' ? 'الرئيسية' : 'Home' },
    { to: '/library', label: language === 'ar' ? 'المكتبة' : 'Library' },
    { to: '/analysis', label: language === 'ar' ? 'التحليل' : 'Analysis' },
    { to: '/my-files', label: language === 'ar' ? 'سجلاتي' : 'My Files' },
  ];

  return (
    <nav className="navbar-glass shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Avatar className="h-8 w-8 rounded-full hover:bg-darkgray relative cursor-pointer flex items-center justify-center" onClick={() => window.location.href = '/profile'}>
                <User className="h-5 w-5 text-yellow-600" />
            </Avatar>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="text-white hover:gradient-gold-text">
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center space-x-4 space-x-reverse">
            <button 
              onClick={toggleLanguage}
              className="p-2 rounded-full text-yellow-700 hover:bg-darkgray"
            >
              {language === 'ar' ? 'EN' : 'عربي'}
            </button>
            <Link to="/notifications" className="p-2 rounded-full text-yellow-700 hover:bg-darkgray">
              <Bell size={20} />
            </Link>
            <div className="mr-3">
              <Logo size="small" />
            </div>
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-full text-yellow-700 hover:bg-darkgray"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:gradient-gold-text hover:bg-darkgray"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
