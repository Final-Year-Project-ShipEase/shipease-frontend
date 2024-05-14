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
    const currentPathName =
      currentPath.charAt(0).toUpperCase() + currentPath.slice(1);
    setActiveButton(currentPathName);
  }, [location]);

  const CustomButton = ({ item }) => {
    const isActive = activeButton.toLowerCase() === item.name.toLowerCase();
    return (
      <Button
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          padding: '10px 24px',
          color: isActive
            ? theme.palette.sidebar.text
            : theme.palette.sidebar.text,
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
        backgroundColor: theme.palette.sidebar.main,
        '& .MuiDrawer-paper': {
          width: `${(widthVal * 100) / 12}%`,
          boxSizing: 'border-box',
          backgroundColor: theme.palette.sidebar.main,
        },
      }}
    >
      {' '}
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
            height: '100%',
          }}
        />
      </Box>
      <Box sx={{ overflow: 'auto' }}>
        <Grid
          container
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Grid item xs={12}>
            {NavigationItems.map((item, index) => (
              <CustomButton key={index} item={item} />
            ))}
          </Grid>
          <Grid item xs={12}>
            <CustomButton
              item={{ name: 'Log out', icon: <PowerSettingsNewOutlinedIcon /> }}
            />
          </Grid>
        </Grid>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
