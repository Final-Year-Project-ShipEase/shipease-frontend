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
    name: 'Vehicles Garage',
    link: '/vehiclesGarage',
    icon: <Person4OutlinedIcon />,
  },
  {
    name: 'Drivers Garage',
    icon: <PersonAddAltOutlinedIcon />,
    link: '/driversGarage',
  },
  {
    name: 'Pool Requests',
    link: '/poolRequests',
    icon: <Person4OutlinedIcon />,
  },
];

export default NavigationItems;
