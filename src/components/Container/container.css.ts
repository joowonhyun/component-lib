import { styleVariants, style } from '@vanilla-extract/css';
import { global } from '@/app/globalTheme.css';

export const paddingVariants = styleVariants({
  none: {
    padding: '0',
  },
  all4: {
    padding: global.spacing.s4,
  },
  all8: {
    padding: global.spacing.s8,
  },
  all12: {
    padding: global.spacing.s12,
  },
  all16: {
    padding: global.spacing.s16,
  },
  all24: {
    padding: global.spacing.s24,
  },
  top4: {
    paddingTop: global.spacing.s4,
  },
  bottom4: {
    paddingBottom: global.spacing.s4,
  },
  right4: {
    paddingRight: global.spacing.s4,
  },
  left4: {
    paddingLeft: global.spacing.s4,
  },
  top8: {
    paddingTop: global.spacing.s8,
  },
  bottom8: {
    paddingBottom: global.spacing.s8,
  },
  left8: {
    paddingLeft: global.spacing.s8,
  },
  right8: {
    paddingRight: global.spacing.s8,
  },
  top16: {
    paddingTop: global.spacing.s16,
  },
  bottom16: {
    paddingBottom: global.spacing.s16,
  },
  right16: {
    paddingRight: global.spacing.s16,
  },
  left16: {
    paddingLeft: global.spacing.s16,
  },
  top24: {
    paddingTop: global.spacing.s24,
  },
  bottom24: {
    paddingBottom: global.spacing.s24,
  },
  right24: {
    paddingRight: global.spacing.s24,
  },
  left24: {
    paddingLeft: global.spacing.s24,
  },
});

export const borderRadiusVariants = styleVariants({
  borderRadius8: {
    borderRadius: global.radius.radius8,
  },
  borderRadius12: {
    borderRadius: global.radius.radius12,
  },
  borderRadius24: {
    borderRadius: global.radius.radius24,
  },
  borderRadiusRounded: {
    borderRadius: global.radius.radiusRounded,
  } 
});

export const positionVariants = styleVariants({
  relative: {
    position: 'relative',
  },
  absolute: {
    position: 'absolute',
  },
  fixed: {
    position: 'fixed',
    bottom: 0,
    maxWidth: 1040,
    width: '100%',
  },
  top: {
    top: 0,
  },
  right: {
    right: 0,
  },
  bottom: {
    bottom: 0,
  },
  left: {
    left: 0,
  },
  center: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  sticky: {
    position: 'sticky',
  },
  static: {
    position: 'static',
  },
});

export const gapVariants = styleVariants({
  none: {
    gap: '0',
  },
  gap4: {
    gap: global.spacing.s4,
  },
  gap8: {
    gap: global.spacing.s8,
  },
  gap12: {
    gap: global.spacing.s12,
  },
  gap16: {
    gap: global.spacing.s16,
  },
});

export const displayVariants = styleVariants({
  block: {
    display: 'block',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  none: {
    display: 'none',
  },
});

export const alignVariants = styleVariants({
  center: {
    alignItems: 'center'
  },
  none: {
    alignItems: 'none'
  }
})

export const justifyContentVariants = styleVariants({
  none: {
    justifyContent: 'none',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  spaceAround: {
    justifyContent: 'space-around',
  },
  spaceEvenly: {
    justifyContent: 'space-evenly',
  },
  center: {
    justifyContent: 'center',
  }
});

export const flexVariants = styleVariants({
  flex1: {
    flex: 1
  },
  none: {
    flex: 0
  }
})

export const borderVariants = styleVariants({
  vertical: {
    borderTop: '1px solid rgba(0, 0, 0, 0.04)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.04)',
  },
  top: {
    borderTop: '1px solid rgba(0, 0, 0, 0.04)',
  },
  bottom: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.04)',
  },
  none: {
    border: 'none',
  },
  horizontal: {
    borderLeft: '1px solid rgba(0, 0, 0, 0.04)',
    borderRight: '1px solid rgba(0, 0, 0, 0.04)',
  },
  all: {
    border: '1px solid rgba(0, 0, 0, 0.04)',
  }
});