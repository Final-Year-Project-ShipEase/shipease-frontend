import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const COLORS = ['red', '#7E62D7', '#FF8C00', '#FFD700', '#36A2EB', '#FF6384'];

const theme = createTheme({
  palette: {
    pieChart: COLORS,
    primary: {
      main: '#7E62D7',
      text: '#fff',
      backgroundColor: '#2B2626',
      color: '#8884d8',
      color1: '#7E62D733',
      blackColor: 'Black',
    },
    secondary: {
      main: '#60B478',
    },
    buttons: {
      main: '#FFFFFF',
      text: '#121212',
      solidText: '#000000',
      color: '#000000',
      hover: '#2B2626',
      borderbutton: '1px solid #7E62D7',
    },
    shadows: {
      customButton1: `0 1px 1px 0 rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(103, 110, 118, 0.16), 0 2px 5px 0 rgba(103, 110, 118, 0.08)`,
    },
    table: {
      header: '#7E62D7',
      row: '#FFFFFF',
      rowHover: '#60B478',
      border: '#000000',
    },
    background: {
      default: '#F5F5F5',
      iconBackground: 'D1FADF',
      iconColor: 'Green',
      poolback: '#D9D9D9',
      trasnparent: 'transparent',
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
    tableHeader: {
      fontSize: '18px',
      fontWeight: 600,
      color: '#FFFFFF',
      fontFamily: 'Lato',
    },
    tableRow: {
      fontSize: '14px',
      fontWeight: 500,
      color: '#000000',
      fontFamily: 'Lato',
    },
  },
});
responsiveFontSizes(theme);

export default theme;
