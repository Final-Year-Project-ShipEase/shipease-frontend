import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
const NavigationItems = [
  {
    name: 'Dashboard',
    link: '/dashboard',
    icon: <HomeOutlinedIcon style={{ color: '#565656' }} />,
  },
  {
    name: 'Booking',
    icon: <PersonAddAltOutlinedIcon style={{ color: '#565656' }} />,
    link: '/booking',
  },
  {
    name: 'Drivers Garage',
    icon: <PersonAddAltOutlinedIcon style={{ color: '#565656' }} />,
    link: '/driversGarage',
  },
  {
    name: 'Vehicles Garage',
    link: '/vehiclesGarage',
    icon: <Person4OutlinedIcon style={{ color: '#565656' }} />,
  },
];

export default NavigationItems;
