import React from 'react';
import MainLayout from '../components/layouts/MainLayout';
import UserProfile from '../components/profile/UserProfile';

const ProfilePage = () => {
  return (
    <MainLayout>
      <UserProfile />
    </MainLayout>
  );
};

export default ProfilePage;
