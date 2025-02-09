import { space } from "@/styles";
import { sprinkles } from "@/components/_core/sprinkles.css";
import React from "react";

interface FlexProps {
  position?: "relative" | "absolute" | "fixed" | "sticky";
  flexDirection?:
    | "row"
    | "column"
    | {
        mobile?: "row" | "column";
        tablet?: "row" | "column";
        desktop?: "row" | "column";
      };
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around";
  alignItems?: "center" | "flex-start" | "flex-end";
  gap?: keyof typeof space;
  padding?: keyof typeof space;
  margin?: keyof typeof space;
  flexWrap?: "nowrap" | "wrap";
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const Flex = ({
  position,
  flexDirection = "row",
  flexWrap,
  justifyContent,
  alignItems,
  padding,
  margin,
  gap,
  children,
  style,
  onClick,
  ...props
}: FlexProps) => {
  const flexStyles = sprinkles({
    position: position,
    display: "flex",
    flexWrap: flexWrap,
    flexDirection,
    justifyContent,
    alignItems: alignItems,
    padding: padding,
    margin: margin,
    gap: gap,
  });

  return (
    <div className={flexStyles} style={style} onClick={onClick} {...props}>
      {children}
    </div>
  );
};
