import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
const NavigationItems = [
  {
    name: 'Dashboard',
    link: '/dashboard',
    icon: <HomeOutlinedIcon />,
  },
  {
    name: 'Booking',
    icon: <PersonAddAltOutlinedIcon />,
    link: '/booking',
  },
  {
    name: 'Drivers Garage',
    icon: <PersonAddAltOutlinedIcon />,
    link: '/driversGarage',
  },
  {
    name: 'Vehicles Garage',
    link: '/vehiclesGarage',
    icon: <Person4OutlinedIcon />,
  },
  {
    name: 'Pool Requests',
    link: '/poolRequest',
    icon: <Person4OutlinedIcon />,
  },
];

export default NavigationItems;
