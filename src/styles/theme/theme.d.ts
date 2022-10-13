import '@mui/material/styles';
import 'styled-components';
import { IDesignTokensColors } from './@types/design-tokens-colors.types';
import {
  ICustomTypography, IDesignTokensFonts
} from './@types/design-tokens-typography.types';
interface IStatus {
  backgroundColor?: string;
  color?: string;
}
interface CustomTheme extends IDesignTokensColors, IDesignTokensFonts, ICustomTypography {
  status: {
    info: IStatus;
    warning: IStatus;
    success: IStatus;
    error: IStatus;
  };
  palette: { primary: { main: string }; secondary: { main: string } };
}
declare module '@mui/material/styles' {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

// declare module 'styled-components' {
//   export interface DefaultTheme extends Theme {}
// }
