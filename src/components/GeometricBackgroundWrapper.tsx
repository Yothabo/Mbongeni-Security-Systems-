import React from 'react';
import GeometricBackground from './backgrounds/GeometricBackground';

interface GeometricBackgroundWrapperProps {
  children: React.ReactNode;
}

const GeometricBackgroundWrapper: React.FC<GeometricBackgroundWrapperProps> = ({ children }) => {
  return (
    <>
      <GeometricBackground />
      {children}
    </>
  );
};

export default GeometricBackgroundWrapper;
