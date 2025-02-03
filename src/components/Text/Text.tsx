"use client";

import React from "react";
import { sprinkles } from "@/components/_core/sprinkles.css";
import colors from "@/components/_core/palate";
import { fontSize, fontWeight } from "@/components/_core/typo";

interface TextProps {
  text: string;
  size?: keyof typeof fontSize;
  color?: keyof typeof colors;
  weight?: keyof typeof fontWeight;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const Text = ({ text, ...props }: TextProps) => {
  return (
    <p
      className={sprinkles({
        fontSize: props.size,
        color: props.color,
        fontWeight: props.weight,
      })}
      onClick={props.onClick}
      style={{
        ...props.style,
      }}
    >
      {text}
    </p>
  );
};
