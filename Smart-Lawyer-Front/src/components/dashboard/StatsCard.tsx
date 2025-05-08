import React from 'react';

interface StatsCardProps {
  icon: React.ReactNode;
  title: string;
  value: number;
  bgColor: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ icon, title, value, bgColor }) => {
  return (
    <div className="bg-navy rounded-lg p-6 shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm mb-1">{title}</p>
          <p className="text-2xl font-bold">{value.toLocaleString()}</p>
        </div>
        <div className={`${bgColor} p-3 rounded-full`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
