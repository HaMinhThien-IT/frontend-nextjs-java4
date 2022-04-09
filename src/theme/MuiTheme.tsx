import { orange } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { Theme, useTheme } from '@mui/material';

export const muiTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#13111A',
    },
  },
  typography: {
    fontFamily: 'Poppins',
    fontSize: 14,
    htmlFontSize: 14,
    h1: {
      fontFamily: 'Poppins',
      fontSize: '4rem',
      fontWeight: 600,
      lineHeight: '7.5rem',
    },
    // Title Text
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: '3rem',
      '@media (max-width:900px)': {
        fontSize: `1.5rem`,
        lineHeight: '2.25rem',
      },
    },
    h3: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: '3.75rem',
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: '2.25rem',
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: '2.25rem',
    },
    // Card Title
    h6: {
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: '1.5rem',
      '@media (max-width:900px)': {
        fontSize: `0.75rem`,
        lineHeight: '1.125rem',
      },
    },
    // Primary Text
    body1: {
      fontSize: `0.875rem`,
      lineHeight: '1.5rem',
      fontWeight: 400,
      color: 'rgba(255,255,255,0.5)',
      '@media (max-width:900px)': {
        fontSize: `0.75rem`,
        lineHeight: '1.125rem',
      },
    },
    body2: {
      fontSize: `${12 / 16}rem`,
      lineHeight: '1.25rem',
      color: 'rgba(255,255,255,0.5)',
    },
    caption: {
      fontSize: `${10 / 16}rem`,
    },
    // Card text
    overline: {
      fontSize: `${14 / 16}rem`,
      lineHeight: '1.5rem',
      '@media (max-width:900px)': {
        fontSize: `0.625rem`,
        lineHeight: '1.5rem',
      },
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: '1.5rem',
    },
  },
  components: {},
});

console.log({ muiTheme });
