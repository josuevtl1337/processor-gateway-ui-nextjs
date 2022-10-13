import { createTheme } from '@mui/material/styles';
import { customTypography, designTokensFonts } from '../design-tokens-fonts';

import { designTokensColorsLight } from './design-tokens-light';

export const astropayLightTheme = createTheme({
  ...customTypography,
  // overrides: {
  // MuiAppBar: {
  //   colorPrimary: { backgroundColor: '#FFF', color: '#2D2D2D' },
  // },
  // MuiButton: {
  //   root: {
  //     textTransform: 'initial',
  //   },
  // },
  // MuiLink: {
  //   root: {
  //     color: 'black',
  //   },
  // },
  // },
  status: {
    info: {
      backgroundColor: '#D1E9FF',
      color: '#146FEE',
    },
    warning: {
      backgroundColor: '#FFFAEB',
      color: '#FDB022',
    },
    error: {
      backgroundColor: '#FFE5E5',
      color: '#CC0000',
    },
    success: {
      backgroundColor: '#D7FDE6',
      color: '#027A48',
    },
  },
  palette: {
    primary: { main: designTokensColorsLight.globalPrimary400 },
    secondary: { main: designTokensColorsLight.globalIndigo600 },
  },
  ...designTokensColorsLight,
  ...designTokensFonts,
});
