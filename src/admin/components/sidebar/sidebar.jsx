import React, { useState } from 'react';
import { Box, Button, Drawer, useTheme, useMediaQuery } from '@mui/material';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
import NavigationItems from './navItems';
import UseAdminAuth from '../../auth/adminAuth';

const Sidebar = ({ leftSpan, isDrawerOpen }) => {
  const widthVal = (leftSpan / 12) * 100;
  const [activeButton, setActiveButton] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const issmallScreen = useMediaQuery(theme.breakpoints.up(''));
  const { logout } = UseAdminAuth();

  const handleClick = (item) => {
    navigate(item.link);
    setActiveButton(item.name);
  };

  React.useEffect(() => {
    const currentPath = location.pathname;
    const currentPathName = currentPath.split('/')[2]; // Update index to 2
    const currentPathNameCapitalized =
      currentPathName.charAt(0).toUpperCase() + currentPathName.slice(1);
    setActiveButton(currentPathNameCapitalized);
  }, [location]);

  const CustomButton = ({ item, sx }) => {
    const isActive = activeButton === item.name;

    return (
      <Button
        sx={{
          ...sx,
          display: 'flex',
          padding: '16px 16px 16px 32px',
          alignItems: 'left',
          gap: '3px',
          alignSelf: 'stretch',
          overflow: 'hidden',
          color: theme.palette.buttonSidebar.ColorActive,
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          fontSize: '14px',
          textTransform: 'none',
          fontWeight: isActive ? 500 : 200,
          lineHeight: '140%',
          height: '40px',
          justifyContent: 'left',
          borderRight: isActive
            ? theme.palette.buttonSidebar.borderright
            : 'none',
          backgroundColor: isActive
            ? theme.palette.buttonSidebar.main
            : theme.palette.buttonSidebar.BackgroundColorActive,
          '&:hover': {
            backgroundColor: theme.palette.buttonSidebar.main,
          },
        }}
        onClick={() => handleClick(item)}
        startIcon={item.icon}
      >
        {item.name}
      </Button>
    );
  };

  const CustomButton2 = ({ item, sx }) => {
    const isActive = activeButton === item.name;

    return (
      <Button
        sx={{
          ...sx,
          display: 'flex',
          padding: '16px 16px 16px 32px',
          alignItems: 'left',
          gap: '3px',
          alignSelf: 'stretch',
          overflow: 'hidden',
          color: theme.palette.buttonSidebar.ColorActive,
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          fontSize: '14px',
          textTransform: 'none',
          fontWeight: isActive ? 550 : 400,
          lineHeight: '140%',
          height: '40px',
          justifyContent: 'left',
          borderRight: isActive
            ? theme.palette.buttonSidebar.borderright
            : 'none',
          backgroundColor: isActive
            ? theme.palette.buttonSidebar.main
            : theme.palette.buttonSidebar.BackgroundColorActive,
          '&:hover': {
            backgroundColor: theme.palette.buttonSidebar.main,
          },
        }}
        onClick={() => {
          logout();
          navigate(item.link);
        }}
        startIcon={item.icon}
      >
        {item.name}
      </Button>
    );
  };

  return (
    <Drawer
      elevation={4}
      variant="permanent"
      open={isDrawerOpen && isLargeScreen}
      sx={{
        width: isDrawerOpen || isLargeScreen ? `${widthVal}%` : '0', // Set width to 0 when the drawer is closed
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        '& .MuiDrawer-paper': {
          mt: '7vh',
          py: '24px',
          width: isDrawerOpen || isLargeScreen ? `${widthVal}%` : '0', // Set width to 0 when the drawer is closed
          backgroundColor: theme.palette.buttonSidebar.hovertextcolor,
          boxShadow: theme.palette.buttonSidebar.sidebarshadow,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          padding: '0 0 3rem 0',
        }}
      >
        {NavigationItems.map((item, index) => (
          <CustomButton key={index} item={item} />
        ))}
        <CustomButton2
          item={{
            name: 'Log out',
            link: '/admin/login',
            icon: (
              <PowerSettingsNewOutlinedIcon
                style={{ color: theme.palette.buttonSidebar.ColorActive }}
              />
            ),
          }}
          sx={{ marginTop: 'auto' }}
        />
      </Box>
    </Drawer>
  );
};

export default Sidebar;
