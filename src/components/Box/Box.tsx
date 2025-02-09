import { space, colors } from "@/styles";
import { sprinkles } from "@/components/_core/sprinkles.css";

interface BoxProps {
  position?: "relative" | "absolute" | "fixed" | "sticky";
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
  maxWidth?: "full";
  padding?: keyof typeof space;
  margin?: keyof typeof space;
  border?: "none" | "solid";
  borderColor?: keyof typeof colors;
  width?: keyof typeof space;
  height?: keyof typeof space;
  borderRadius?: "none" | "radius8" | "radius12" | "radius24" | "radiusRounded";
  paddingX?: keyof typeof space;
  paddingY?: keyof typeof space;
  marginX?: keyof typeof space;
  marginY?: keyof typeof space;
}

export const Box = ({
  position,
  children,
  maxWidth = "full",
  style,
  onClick,
  border,
  width,
  height,
  borderRadius,
  borderColor = "line",
  padding,
  margin,
  paddingX,
  paddingY,
  marginX,
  marginY,
  ...props
}: BoxProps) => {
  const boxStyles = sprinkles({
    position,
    maxWidth,
    display: "block",
    border,
    borderColor,
    padding,
    margin,
    paddingX,
    paddingY,
    marginX,
    marginY,
    width,
    height,
    borderRadius,
  });

  return (
    <div className={boxStyles} style={style} onClick={onClick} {...props}>
      {children}
    </div>
  );
};
