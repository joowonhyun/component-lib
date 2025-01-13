// Stack.types.ts
export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
    position?: "static" | "relative" | "absolute" | "fixed" | "sticky";
    display?: "block" | "flex" | "inline";
    margin?: {
      top?: number;
      right?: number;
      bottom?: number;
      left?: number;
    };
    padding?: {
      top?: number;
      right?: number;
      bottom?: number;
      left?: number;
    };
    backgroundColor?: "transparent" | "white"; // 필요에 따라 색상 추가
    zIndex?: number;
    borderRadius?: number;
    cursor?: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    children?: React.ReactNode;
  }
  