import React, { useState } from 'react';
import { Box, Button, Drawer, useTheme } from '@mui/material';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
import NavigationItems from './navItems';
import UseTenantAuth from '../../auth/tenantAuth';

const Sidebar = ({ leftSpan }) => {
  const widthVal = (leftSpan / 12) * 100;
  const [activeButton, setActiveButton] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const { logout } = UseTenantAuth();

  const handleClick = (item) => {
    navigate(item.link);
    setActiveButton(item.name);
  };

  React.useEffect(() => {
    const currentPath = location.pathname;
    const currentPathName = currentPath.split('/')[1]; // Update index to 1
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
          handleClick(item);
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
      sx={{
        width: `${widthVal}%`,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        '& .MuiDrawer-paper': {
          mt: '7vh',
          py: '24px',
          width: `${widthVal}%`,
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
            link: '/login',
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
