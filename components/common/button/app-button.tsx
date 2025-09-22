'use client'
import { cn } from "@/_lib/lib";
import { useState } from "react";

interface ButtonProps {
  width?: string;
  height?: string;
  onClick?: () => void;

  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
  label: string
}
const AppButton = ({ children, label, height, width, variant, type, onClick, disabled, className }: ButtonProps) => {

  const [active, setActive] = useState(false);

  const handleMouseDown = () => setActive(true);
  const handleMouseUp = () => setActive(false);

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const baseClasses = `
    flex items-center
    text-sm font-normal hover:scale-90 focus:ring-2 focus:ring-offset-2 justify-center
    rounded-full outline-none transition-all duration-300 select-none
    ${disabled ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}
    ${active ? 'shadow-md' : ''}
    ${`w-[${width}] h-[${height}] rounded-full`}
  `;

  const variantClasses =
    variant === 'secondary'
      ? `bg-global-btn-bg text-gray-700 border-none hover:bg-gray-400 hover:text-gray/700 px-4 py-0.5 ${disabled ? 'bg-opacity-70 ' : ''}`
      : variant === 'primary' ? `text-blue-100 bg-blue-800 text-xs px-2 py-0.5 rounded-2xl ${disabled ? 'bg-opacity-70' : ''}` : `bg-white ${disabled ? 'bg-opacity-70' : ''}`;

  return (
    <button aria-label={label || 'Button'}
      type={type}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={cn(baseClasses, variantClasses, className)}>{children}</button>
  )
}

export default AppButton