import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
const NavigationItems = [
  {
    name: 'Dashboard',
    link: '/admin/dashboard',
    icon: <HomeOutlinedIcon />,
  },
  {
    name: 'ManageTenants',
    link: '/admin/manageTenants',
    icon: <BadgeOutlinedIcon />,
  },
  {
    name: 'Approval',
    icon: <PersonAddAltOutlinedIcon />,
    link: '/admin/driversApproval',
  },
  {
    name: 'VehiclesApproval',
    link: '/admin/vehiclesApproval',
  },
  {
    name: 'DriversApproval',
    link: '/admin/driversApproval',
  },
  {
    name: 'Permissions',
    link: '/admin/permissions',
    icon: <Person4OutlinedIcon />,
  },
];

export default NavigationItems;
