import React from "react";
import { StackProps } from "./Stack.types";
import * as styles from './stack.css';

export const Stack = ({
  position = 'static',
  display = 'block',
  margin = {},
  padding = {},
  backgroundColor = 'transparent',
  zIndex,
  borderRadius = 0,
  cursor = 'inherit',
  onClick,
  children,
  ...rest
}: StackProps) => {
  const customStyles: React.CSSProperties = {
    position,
    display,
    margin: `${margin.top || 0}px ${margin.right || 0}px ${margin.bottom || 0}px ${margin.left || 0}px`,
    padding: `${padding.top || 0}px ${padding.right || 0}px ${padding.bottom || 0}px ${padding.left || 0}px`,
    zIndex,
    borderRadius,
    cursor,
  };

  return (
    <div
      className={`${styles.stack} ${styles.positionVariants[position]} ${styles.displayVariants[display]} ${styles.backgroundColorVariants[backgroundColor]}`}
      style={customStyles}
      onClick={onClick}
      {...rest}
    >
      {children}
    </div>
  );
};

