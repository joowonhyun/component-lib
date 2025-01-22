import { styleVariants, style } from '@vanilla-extract/css';
import { global } from '@/app/globalTheme.css';

export const paddingVariants = styleVariants({
  small: {
    padding: `${global.spacing.s8} ${global.spacing.s12}`,
  },
  medium: {
    padding: `${global.spacing.s12} ${global.spacing.s24}`,
  },
  // Add more padding variants as needed
});

export const colorVariants = styleVariants({
  default: {
    backgroundColor: global.color.gray,
    color: global.color.normal,
  },
  primary: {
    backgroundColor: global.color.key,
    color: global.color.white,
  },
  // Add more color variants as needed
});

export const widthVariants = styleVariants({
  xsmall: {
    width: '45px',
  },
  small: {
    width: '56px',
  },
  medium: {
    width: '76px',
  },
  large: {
    width: '100%',
  },
  full: {
    width: '100%',
  },
});

export const lineHeightVariants = styleVariants({
  small: {
    lineHeight: '16px',
    fontSize: global.fontSize.f12,
  },
  medium: {
    lineHeight: '24px',
    fontSize: global.fontSize.f16,
  },
});

export const baseButton = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: global.radius.radius8,
  fontWeight: global.fontWeight.w700,
  ':disabled': {
    border: 'none',
    backgroundColor: global.color.gray,
    color: global.color.disabled,
  },
});