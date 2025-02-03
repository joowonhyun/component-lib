import React from "react";
import { sprinkles } from "@/components/_core/sprinkles.css";
import space from "@/components/_core/space";

type Breakpoint = "mobile" | "tablet" | "desktop";
type ResponsiveObject<T> = Partial<Record<Breakpoint, T>>;
type ResponsiveValue<T> = T | ResponsiveObject<T>;

type FlexAlign = "flex-start" | "center" | "flex-end" | "stretch";
type FlexJustify = FlexAlign | "space-around" | "space-between";
type FlexDirection = "row" | "column";
type FlexWrap = "wrap" | "nowrap";

interface FlexProps {
  children: React.ReactNode;
  direction?: ResponsiveValue<FlexDirection>;
  gap?: ResponsiveValue<keyof typeof space>;
  align?: ResponsiveValue<FlexAlign>;
  justify?: ResponsiveValue<FlexJustify>;
  wrap?: ResponsiveValue<boolean>;
}

/**
 * 주어진 값을 기반으로 반응형 객체인지 확인합니다.
 */
function isResponsiveObject<T>(
  value: ResponsiveValue<T>
): value is ResponsiveObject<T> {
  return (
    typeof value === "object" &&
    value !== null &&
    ("mobile" in value || "tablet" in value || "desktop" in value)
  );
}

/**
 * 주어진 반응형 값을 가져옵니다. 기본값을 설정할 수 있습니다.
 */
function getResponsiveValue<T>(
  value: ResponsiveValue<T> | undefined
): ResponsiveValue<T> | undefined {
  return value ?? undefined; // 기본값 처리
}

/**
 * wrap 값을 boolean에서 FlexWrap으로 변환합니다.
 */
function getFlexWrap(
  wrap: ResponsiveValue<boolean> | undefined
): ResponsiveValue<FlexWrap> | undefined {
  if (!wrap) return undefined;

  const wrapValue = (val: boolean): FlexWrap => (val ? "wrap" : "nowrap");

  if (isResponsiveObject(wrap)) {
    return {
      mobile: wrapValue(wrap.mobile ?? false),
      tablet: wrapValue(wrap.tablet ?? false),
      desktop: wrapValue(wrap.desktop ?? false),
    };
  }

  return wrapValue(wrap);
}

export const Flex = ({ children, ...props }: FlexProps) => {
  return (
    <div
      className={sprinkles({
        display: "flex",
        flexDirection: getResponsiveValue(props.direction),
        gap: getResponsiveValue(props.gap),
        alignItems: getResponsiveValue(props.align),
        justifyContent: getResponsiveValue(props.justify),
        flexWrap: getFlexWrap(props.wrap),
      })}
    >
      {children}
    </div>
  );
};
