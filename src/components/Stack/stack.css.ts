// Stack.css.ts
import { style, styleVariants } from '@vanilla-extract/css';

export const stack = style({
  display: 'block',
});

export const positionVariants = styleVariants({
  static: { position: 'static' },
  relative: { position: 'relative' },
  absolute: { position: 'absolute' },
  fixed: { position: 'fixed' },
  sticky: { position: 'sticky' }
});

export const displayVariants = styleVariants({
  block: { display: 'block' },
  flex: { display: 'flex' },
  inline: { display: 'inline' },
});

export const backgroundColorVariants = styleVariants({
  transparent: { backgroundColor: 'transparent' },
  white: { backgroundColor: 'white' },
  // 필요에 따라 다른 색상 추가
});
