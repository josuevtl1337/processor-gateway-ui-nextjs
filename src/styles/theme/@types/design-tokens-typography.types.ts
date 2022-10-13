import { Palette } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';

/**
 * 1) Declarar la nueva tipografía en: TypographyPropsVariantOverrides y IDesignTokensFonts
 * 2) Ir a design-tokens-fonts.ts y agregar la nueva tipografia con sus respectivas properties.
 */
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    specificTypographyBodyText1116pxRegular: true;
    textRegular: true;
  }
}

export interface IDesignTokensFonts extends TypographyOptions {
  specificTypographyBodyText1116pxRegular: React.CSSProperties;
  textRegular: React.CSSProperties;
}

export interface ICustomTypography {
  typography: TypographyOptions | ((palette: Palette) => TypographyOptions);
}
