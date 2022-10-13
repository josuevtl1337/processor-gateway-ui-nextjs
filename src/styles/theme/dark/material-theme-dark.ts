import { createTheme } from '@mui/material/styles';
import { customTypography, designTokensFonts } from '../design-tokens-fonts';
import { designTokensColorsDark } from './design-tokens-dark';

export const astropayDarkTheme = createTheme({
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
    primary: { main: designTokensColorsDark.globalGreen25 },
    secondary: { main: designTokensColorsDark.globalIndigo600 },
  },
  ...designTokensColorsDark,
  ...designTokensFonts,
});
