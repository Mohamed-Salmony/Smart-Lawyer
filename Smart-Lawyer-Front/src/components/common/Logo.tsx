import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
}

const Logo: React.FC<LogoProps> = ({ size = 'medium' }) => {
  const sizeClasses = {
    small: 'h-8',
    medium: 'h-16',
    large: 'h-24',
  };

  return (
    <Link to="/">
      <div className="flex items-center">
        <img 
          src="/image/logo.png" 
          alt="Smart Lawyer Logo" 
          className={`${sizeClasses[size]}`} 
        />
      </div>
    </Link>
  );
};

export default Logo;
