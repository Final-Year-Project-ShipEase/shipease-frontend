import { createTheme, responsiveFontSizes } from '@mui/material/styles';
const Theme = createTheme({
  palette: {
    primary: {
      main: '#7E62D7',
      text: '#fff',
    },
    secondary: {
      main: '#60B478',
    },
    buttons: {
      main: '#FFFFFF',
      text: '#121212',
    },
    shadows: {
      customButton1: `0 1px 1px 0 rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(103, 110, 118, 0.16), 0 2px 5px 0 rgba(103, 110, 118, 0.08)`,
    },
  },
  typography: {
    allVariants: {
      fontFamily: 'Barlow',
      color: '#2C2C2C',
    },
    b2: {
      fontSize: '14px',
      fontWeight: 600,
    },
    b3: {
      fontSize: '12px',
      fontWeight: 500,
    },
    h2: {
      fontSize: '36px',
      fontWeight: 500,
    },
    t2: {
      fontSize: '18px',
      fontWeight: 600,
    },
    t3: {
      fontSize: '16px',
      fontWeight: 600,
    },
  },
});
responsiveFontSizes(Theme);

export default Theme;
