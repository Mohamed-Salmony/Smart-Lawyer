
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import Logo from '../common/Logo';
import { Button } from '@/components/ui/button';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Authentication logic would go here
    console.log('Login attempt with:', { email, password, rememberMe });
    // For demo purposes, navigate to dashboard after login
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-navy rounded-lg max-w-md mx-auto">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Logo size="medium" />
          <h2 className="mt-6 text-xl font-cairo font-bold">مرحباً بعودتك، سجل دخولك لمتابعة</h2>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-6 rounded-md shadow-sm">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-right mb-1">
                البريد الإلكتروني
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="form-input"
                  placeholder="أدخل بريدك الإلكتروني"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-right mb-1">
                كلمة المرور
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="form-input"
                  placeholder="أدخل كلمة المرور"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 left-0 px-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-gold focus:ring-gold"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <label htmlFor="remember-me" className="mr-2 block text-sm">
                  تذكرني
                </label>
              </div>
              <div className="text-sm">
                <Link to="/forgot-password" className="text-gold hover:text-amber-400">
                  نسيت كلمة المرور؟
                </Link>
              </div>
            </div>
          </div>

          <div>
            <Button
              type="submit"
              className="w-full bg-gold text-black hover:bg-amber-400"
            >
              تسجيل الدخول
            </Button>
          </div>
          
          <div className="text-center">
            <p className="my-2">أو</p>
            <button type="button" className="w-full py-2 px-4 border border-gray-500 rounded-md shadow-sm bg-darkgray hover:bg-gray-700 flex items-center justify-center space-x-2 space-x-reverse">
              <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <span>تسجيل الدخول باستخدام Google</span>
            </button>
          </div>
        </form>
        
        <div className="text-center mt-4">
          <p className="text-sm">
            ليس لديك حساب؟{" "}
            <Link to="/register" className="text-gold hover:text-amber-400 font-bold">
              إنشاء حساب جديد
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
