import React, { ReactNode } from 'react';
import { PaddingVariants, ColorVariants, WidthVariants, LineHeightVariants } from './index';
import { baseButton, paddingVariants, colorVariants, lineHeightVariants, widthVariants } from './button.css';

interface ButtonProps {
  padding: PaddingVariants;
  width: WidthVariants;
  lineHeight: LineHeightVariants;
  color: ColorVariants;
  children: ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ padding, color, children, disabled = false, lineHeight = 'small', width, onClick, type = 'button', style }: ButtonProps) => {
  return (
    <button
      style={style}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseButton} ${paddingVariants[padding]} ${colorVariants[color]} ${lineHeightVariants[lineHeight]} ${widthVariants[width]}`}
    >
      {children}
    </button>
  );
};

export default Button;