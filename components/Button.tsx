import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  to?: string;
  href?: string;
  target?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  to, 
  href,
  target,
  onClick, 
  className = '', 
  type = 'button',
  fullWidth = false,
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm";
  
  const variants = {
    primary: "bg-brand-600 text-white hover:bg-brand-700 hover:shadow-brand-200/50 hover:shadow-lg",
    secondary: "bg-gray-900 text-white hover:bg-gray-800",
    outline: "border-2 border-brand-600 text-brand-600 hover:bg-brand-50",
    white: "bg-white text-brand-600 hover:bg-gray-100",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  const classes = `${baseStyles} ${variants[variant]} ${widthStyle} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};