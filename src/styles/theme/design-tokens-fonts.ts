import { ICustomTypography, IDesignTokensFonts } from './@types/design-tokens-typography.types';

export const designTokensFonts: IDesignTokensFonts = {
  specificTypographyBodyText1116pxRegular: {
    fontFamily: "'Poppins', 'Poppins-Regular'",
    fontSize: '16px',
    letterSpacing: '-0.3px',
    lineHeight: '22px',
    fontWeight: 400,
    color: 'green',
    display: 'inline-block',
  },
  textRegular: {
    color: 'red',
  },
};

export const customTypography: ICustomTypography = {
  typography: {
    allVariants: {
      fontFamily: 'Poppins',
      textTransform: 'none',
    },
    ...designTokensFonts,
  } as IDesignTokensFonts,
};
