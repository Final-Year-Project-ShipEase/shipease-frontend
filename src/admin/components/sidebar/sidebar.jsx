import React, { useState } from 'react';
import { Box, Button, Drawer, useTheme } from '@mui/material';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
import NavigationItems from './navItems';

const Sidebar = ({ leftSpan }) => {
  const widthVal = (leftSpan / 12) * 100;
  const [activeButton, setActiveButton] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const handleClick = (item) => {
    navigate(item.link);
    setActiveButton(item.name);
  };

  React.useEffect(() => {
    const currentPath = location.pathname;
    const currentPathName = currentPath.split('/')[1];
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
          alignItems: 'center',
          gap: '8px',
          alignSelf: 'stretch',
          overflow: 'hidden',
          color: isActive ? theme.palette.text.primary : '#565656',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          fontSize: '16px',
          textTransform: 'none',
          fontWeight: isActive ? 550 : 400,
          lineHeight: '140%',
          height: '40px',
          justifyContent: 'left',
          borderRight: isActive ? '4px solid #0061FF' : 'none',
          backgroundColor: isActive ? '#EAEFFF' : 'transparent',
          '&:hover': {
            backgroundColor: '#EAEFFF',
          },
        }}
        onClick={() => handleClick(item)}
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
          backgroundColor: '#ffffff',
          boxShadow: '5px 2px 10px rgba(0, 0, 0, 0.1)',
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
        }}
      >
        {NavigationItems.map((item) => (
          <CustomButton key={item.name} item={item} />
        ))}
        <CustomButton
          item={{
            name: 'Log out',
            link: '/dashboard',
            icon: <PowerSettingsNewOutlinedIcon style={{ color: '#565656' }} />,
          }}
          sx={{ marginTop: 'auto' }}
        />
      </Box>
    </Drawer>
  );
};

export default Sidebar;
