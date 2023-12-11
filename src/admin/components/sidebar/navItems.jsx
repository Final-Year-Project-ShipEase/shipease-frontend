import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
const NavigationItems = [
  {
    name: 'Dashboard',
    link: '/dashboard',
    icon: <HomeOutlinedIcon style={{ color: '#565656' }} />,
  },
  {
    name: 'ManageTenants',
    link: '/manageTenants',
    icon: <BadgeOutlinedIcon style={{ color: '#565656' }} />,
  },
  {
    name: 'Approval',
    icon: <PersonAddAltOutlinedIcon style={{ color: '#565656' }} />,
    link: '/driversApproval',
  },
  {
    name: 'DriversApproval',
    link: '/driversApproval',
  },
  {
    name: 'VehiclesApproval',
    link: '/vehiclesApproval',
  },
  {
    name: 'Permissions',
    link: '/permissions',
    icon: <Person4OutlinedIcon style={{ color: '#565656' }} />,
  },
  {
    name: 'Announcements',
    link: '/announcements',
    icon: <GppGoodOutlinedIcon style={{ color: '#565656' }} />,
  },
];

export default NavigationItems;
