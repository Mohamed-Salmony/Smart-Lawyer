
import React from 'react';
import Navbar from '../navigation/Navbar';
import Footer from '../navigation/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="fixed inset-0 flex flex-col overflow-hidden text-white">
      <Navbar />
      <main className="flex-grow overflow-auto hide-scrollbar">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
