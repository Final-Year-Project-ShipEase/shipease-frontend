import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const COLORS = [
  '#FF0000',
  '#00668C',
  '#FF8C00',
  '#FFD700',
  '#36A2EB',
  '#FF6384',
];

const theme = createTheme({
  palette: {
    pieChart: [
      '#3ba1c5',
      '#00668C',
      '#66b6d2',
      '#92cbdf',
      '#a8d5e5',
      '#1a6985',
    ],
    primary: {
      main: '#00668C',
      text: '#fff',
      backgroundColor: '#00668C',
      color: '#8884d8',
      color1: '#00668C33',
      blackColor: 'Black',
      white: 'white',
      black: 'black',
      yellow: '#FFAA29',
      green: '#54BA4A',
      purple: '#B33CC7',
    },
    secondary: {
      main: '#71C4EF',
      hover: '#629DBC',
    },
    buttons: {
      main: '#FFFFFF',
      text: '#121212',
      solidText: '#000000',
      color: '#000000',
      hover: '#00668CB2',
      borderbutton: '1px solid #00668C',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
      navHover: '#F5F5F5',
      addModal: '#00668C',
    },
    shadows: {
      customButton1: `0 1px 1px 0 rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(103, 110, 118, 0.16), 0 2px 5px 0 rgba(103, 110, 118, 0.08)`,
    },
    table: {
      header: '#00668C',
      row: '#FFFFFF',
      rowHover: '#71C4EF',
      border: '#000000',
    },
    background: {
      default: '#F5F5F5',
      iconBackground: 'D1FADF',
      iconColor: 'Green',
      poolback: '#D9D9D9',
      trasnparent: 'transparent',
      bookingActiveStatus: '#FFAA29',
      bookingReservedStatus: 'red',
      bookingCompletedStatus: '#71C4EF',
      bookingBidStatus: 'green',
    },
    buttonSidebar: {
      main: 'rgba(0, 102, 140, 0.4)',
      ColorActive: 'black',
      ColorActiveHover: 'white',
      BackgroundColorActive: 'transparent',
      BackgroundColorActiveHover: 'rgba(0, 102, 140, 1)',
      hovertextcolor: 'white',
      borderright: '4px solid rgba(0, 102, 140, 1)',
      sidebarshadow: '5px 2px 10px rgba(0, 0, 0, 0.1)',
    },
    page: {
      main: 'lightgray',
      form: 'white',
      h5: 'gray',
      border: '1px solid lightgrey',
      background: '#302E35',
    },
    spinner: {
      main: '#00668C',
    },
    actionButton: {
      main: '#00668CB2',
      hover: '#509664',
    },
  },
  typography: {
    allVariants: {
      fontfamily: 'LemonMilk',
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
      fontfamily: 'LemonMilk',
    },
    tableRow: {
      fontSize: '14px',
      fontWeight: 500,
      color: '#000000',
      fontfamily: 'LemonMilk',
    },
  },
});
responsiveFontSizes(theme);

export default theme;
