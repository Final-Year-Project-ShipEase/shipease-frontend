import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#56a5d6',
      text: '#fff',
    },
    secondary: {
      main: '#2963FF',
    },
    button: {
      main: '#3862fc',
      hover: '#2745b0',
    },
    background: {
      default: '#fff',
      tableHeader: '#EAEFFF',
    },
    text: {
      primary: '#2C2C2C',
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
  },
});
export default theme;
