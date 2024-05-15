import React, { useState, useEffect } from 'react';
import { Box, Button, Drawer, Grid, useTheme } from '@mui/material';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
import NavigationItems from './navItems';
import { useTenantAuth } from '../../auth/tenantAuth';
import Logo from '../../../commons/resouces/logo.svg';

const Sidebar = ({ widthVal }) => {
  const [activeButton, setActiveButton] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const { logout } = useTenantAuth();

  useEffect(() => {
    const currentPath = location.pathname.split('/')[1];
    // Normalize the path to capitalize the first letter
    setActiveButton(currentPath);
  }, [location]);

  const logoutButton = () => {
    logout();
    navigate('/login');
  };

  const CustomButton = ({ item }) => {
    // remove space and convert to lowercase for comparison from item.name
    const isActive =
      activeButton.toLowerCase() === item.name.replace(/\s/g, '').toLowerCase();

    return (
      <Button
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          padding: '10px 24px',
          color: theme.palette.sidebar.text,
          backgroundColor: isActive
            ? 'rgba(255, 255, 255, 0.2)'
            : 'transparent',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          },
          width: '100%',
          textTransform: 'none',
          textAlign: 'left',
        }}
        startIcon={item.icon}
        onClick={() => {
          if (item.name === 'Log out') {
            logout();
          } else {
            navigate(item.link);
          }
          setActiveButton(item.name);
        }}
      >
        {item.name}
      </Button>
    );
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: `${(widthVal * 100) / 12}%`,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        '& .MuiDrawer-paper': {
          width: `${(widthVal * 100) / 12}%`,
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: theme.palette.sidebar.main,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
        }}
      >
        <img
          src={Logo}
          alt="ShipEase-logo"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </Box>
      <Box sx={{ overflow: 'auto', flex: '1 1 auto' }}>
        {NavigationItems.map((item, index) => (
          <CustomButton key={index} item={item} />
        ))}
      </Box>
      <Box sx={{ padding: '10px', borderTop: '1px solid #ccc' }}>
        <CustomButton
          item={{ name: 'Log out', icon: <PowerSettingsNewOutlinedIcon /> }}
        />
      </Box>
    </Drawer>
  );
};

export default Sidebar;