import React, { ReactNode } from 'react';
import {
  PaddingVariants,
  PositionVariants,
  DisplayVariants,
  GapVariants,
  BorderVariants,
  JustifyContentVariants,
  AlignVariants,
  FlexVariants,
  BorderRadiusVariants
} from './index';
import {
  paddingVariants,
  positionVariants,
  displayVariants,
  gapVariants,
  borderVariants,
  justifyContentVariants,
  alignVariants,
  flexVariants,
  borderRadiusVariants
} from './container.css';
import { getClassNames } from '@/util/getClassNames';

interface ContainerProps {
  padding?: PaddingVariants | PaddingVariants[];
  position?: PositionVariants | PositionVariants[];
  children: ReactNode;
  display?: DisplayVariants;
  gap?: GapVariants;
  border?: BorderVariants;
  justifyContent?: JustifyContentVariants;
  align?: AlignVariants;
  flex?: FlexVariants;
  borderRadius?: BorderRadiusVariants;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Container = ({
  padding = 'none',
  position = 'static',
  children,
  display = 'block',
  gap = 'none',
  border = 'none',
  justifyContent = 'none',
  align,
  flex,
  borderRadius,
  onClick,
  style,
}: ContainerProps) => {
  const classNames = [
    getClassNames(padding, paddingVariants),
    getClassNames(position, positionVariants),
    getClassNames(display, displayVariants),
    getClassNames(border, borderVariants),
    borderRadius ? getClassNames(borderRadius, borderRadiusVariants) : '',
    flex ? getClassNames(flex, flexVariants) : '',
    display.startsWith('flex') ? getClassNames(gap, gapVariants) : '',
    display.startsWith('flex') && justifyContent ? getClassNames(justifyContent, justifyContentVariants) : '',
    display.startsWith('flex') && align ? getClassNames(align, alignVariants) : '',
  ].join(' ');

  return (
    <div className={classNames} style={{ ...style }} onClick={onClick}>
      {children}
    </div>
  );
};

export default Container;