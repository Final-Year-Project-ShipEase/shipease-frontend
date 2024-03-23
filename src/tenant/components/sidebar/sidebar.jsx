import React, { useState, useEffect } from 'react';
import { Box, Button, Drawer, useTheme } from '@mui/material';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
import NavigationItems from './navItems';
import { useTenantAuth } from '../../auth/tenantAuth';

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
    const isActive = activeButton === item.name;
    return (
      <Button
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          padding: '10px 24px',
          color: isActive
            ? theme.palette.primary.main
            : theme.palette.text.primary,
          backgroundColor: isActive
            ? theme.palette.action.selected
            : 'transparent',
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
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
        width: `${widthVal}%`,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: `${widthVal}%`,
          boxSizing: 'border-box',
          marginTop: '7vh',
        },
      }}
    >
      <Box sx={{ overflow: 'auto' }}>
        {NavigationItems.map((item, index) => (
          <CustomButton key={index} item={item} />
        ))}
        <CustomButton
          item={{ name: 'Log out', icon: <PowerSettingsNewOutlinedIcon /> }}
        />
      </Box>
    </Drawer>
  );
};

export default Sidebar;
