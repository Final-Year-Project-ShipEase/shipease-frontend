import React, { useState } from 'react';
import { Box, Button, Drawer, useTheme} from '@mui/material';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
import NavigationItems from './navItems';


const Sidebar = ({ leftSpan}) => {
  const theme = useTheme();
  const widthVal = (leftSpan / 11) * 100;
  const [activeButton, setActiveButton] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

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
    }, [location])

    const CustomButton = ({ item, sx }) => {
      const isActive = activeButton === item.name;

      return (
        <Button
          sx={{
            ...sx,
            display: 'flex',
            padding: '16px 16px 16px 32px',
            alignItems: "left",
            gap: '3px',
            alignSelf: 'stretch',
            overflow: 'hidden',
            color: isActive ? theme.palette.buttonSidebar.colorActiveHover : theme.palette.buttonSidebar.ColorActive,
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            fontFamily: 'latoregular',
            fontSize: '14px',
            textTransform: 'none',
            fontWeight: isActive ? 550 : 400,
            lineHeight: '140%',
            height: '40px',
            justifyContent: 'left',
            borderRight: isActive ? '4px solid #0061FF' : 'none',
            backgroundColor: isActive ? theme.palette.buttonSidebar.BackgroundColorActiveHover : theme.palette.buttonSidebar.BackgroundColorActive,
            '&:hover': {
              backgroundColor: theme.palette.buttonSidebar.main,
              '&:hover': {
                color: theme.palette.buttonSidebar.hovertextcolor,
              },
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
            backgroundColor: theme.palette.buttonSidebar.hovertextcolor,
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