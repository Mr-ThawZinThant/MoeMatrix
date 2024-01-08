import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface LoadingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoading: boolean;
}

const LoadingButton: React.FC<LoadingButtonProps> = ({ children, isLoading, ...props }) => {
  return (
    <button {...props} disabled={isLoading}>
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

export default LoadingButton;
