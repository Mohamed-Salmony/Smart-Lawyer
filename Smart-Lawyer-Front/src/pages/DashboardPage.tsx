import React from 'react';
import AdminDashboard from '../components/dashboard/AdminDashboard';
import MainLayout from '../components/layouts/MainLayout';

const DashboardPage = () => {
  return (
    <MainLayout>
      <AdminDashboard />
    </MainLayout>
  );
};

export default DashboardPage;
