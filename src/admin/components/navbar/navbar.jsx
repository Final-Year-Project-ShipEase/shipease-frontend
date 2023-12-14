import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { AppBar, Box, Toolbar, Grid, IconButton, Drawer } from '@mui/material';
import { appBarStyles } from './config.js';
import UserInfo from './userInfo';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import Sidebar from '../sidebar/sidebar.jsx';

const Navbar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const leftSpan = 3;

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  if (isSmallScreen) {
    return (
      <>
        <AppBar position="fixed" elevation={3} sx={appBarStyles}>
          <Toolbar>
            <Grid container alignItems="center">
              <Grid item xs={2}>
                {/* Menu icon for small screens */}
                <IconButton
                  color="black"
                  edge="start"
                  sx={{ marginRight: '8px' }}
                  onClick={handleDrawerOpen}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
              <Grid item xs={4}>
                {/* Show only the logo on small screens */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                  }}
                >
                  <img
                    src={require('../../resources/shipease.png')}
                    alt="ShipEase-logo"
                  />
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose}>
          {/* Pass isDrawerOpen to Sidebar */}
          <Sidebar leftSpan={leftSpan} isDrawerOpen={isDrawerOpen} />
        </Drawer>
      </>
    );
  }

  return (
    <AppBar position="fixed" elevation={3} sx={appBarStyles}>
      <Toolbar>
        <Grid container alignItems="center">
          {/* Add a white background div to the left */}
          <Box
            sx={{
              backgroundColor: '#fff',
              height: '100%', // Adjust the height as needed
              width: '100%', // Adjust the width as needed
            }}
          />
          <Grid item md={7}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
              }}
            >
              <img
                src={require('../../resources/shipease.png')}
                alt="ShipEase-logo"
              />
            </Box>
          </Grid>
          <Grid item md={2.5}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-end ',
                justifyContent: 'center',
              }}
            >
              {/* <InputBase
                sx={{
                  border: '1px solid #ccc',
                  borderRadius: '14px',
                  backgroundColor: theme.palette.buttonSidebar.main,
                  paddingLeft: '15px',
                  width: '100%',
                  color: theme.palette.buttonSidebar.ColorActiveHover,
                }}
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search' }}
                startAdornment={
                  <SearchIcon
                    sx={{
                      color: theme.palette.buttonSidebar.ColorActiveHover,
                      marginRight: '18px',
                    }}
                  />
                }
              /> */}
            </Box>
          </Grid>
          <Grid item md={2.5}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <UserInfo />
            </Box>
          </Grid>
          {/* ... */}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
