import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Drawer,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // For the toggle button
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
import NavigationItems from './navItems';
import { useAdminAuth } from '../../auth/adminAuth';

const Sidebar = ({ leftSpan }) => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const [isDrawerOpen, setIsDrawerOpen] = useState(isLargeScreen); // State to toggle drawer visibility
  const [activeButton, setActiveButton] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAdminAuth();

  useEffect(() => {
    setIsDrawerOpen(isLargeScreen);
  }, [isLargeScreen]);

  useEffect(() => {
    const currentPath = location.pathname;
    const currentPathName = currentPath.split('/')[2];
    const currentPathNameCapitalized =
      currentPathName.charAt(0).toUpperCase() + currentPathName.slice(1);
    setActiveButton(currentPathNameCapitalized);
  }, [location]);

  const handleClick = (item) => {
    navigate(item.link);
    setActiveButton(item.name);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const CustomButton = ({ item, sx }) => {
    const isActive = activeButton === item.name;

    return (
      <Button
        sx={{
          ...sx,
          display: 'flex',
          padding: '16px 16px 16px 16px',
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
    <>
      <IconButton
        onClick={toggleDrawer}
        sx={{
          display: isLargeScreen ? 'none' : 'flex',
          position: 'absolute',
          top: 8,
          left: 8,
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        elevation={4}
        variant={isLargeScreen ? 'permanent' : 'temporary'}
        open={isDrawerOpen}
        onClose={toggleDrawer}
        // Adjusted styles for responsiveness
        sx={{
          '& .MuiDrawer-paper': {
            mt: '9vh',
            paddingBottom: '24px',
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
    </>
  );
};

export default Sidebar;
