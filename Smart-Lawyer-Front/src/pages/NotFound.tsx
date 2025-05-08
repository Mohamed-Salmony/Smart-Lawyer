
import React from "react";
import { Link } from "react-router-dom";
import MainLayout from '../components/layouts/MainLayout';

const NotFound = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-[70vh] bg-darknavy text-white">
        <h1 className="text-6xl font-bold text-gold mb-4">404</h1>
        <p className="text-2xl mb-8">الصفحة غير موجودة</p>
        <Link to="/" className="btn-primary">
          العودة إلى الصفحة الرئيسية
        </Link>
      </div>
    </MainLayout>
  );
};

export default NotFound;
