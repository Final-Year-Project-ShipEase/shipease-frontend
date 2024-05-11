import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Grid, IconButton, Drawer } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import UserInfo from './userInfo';
import Sidebar from '../sidebar/sidebar.jsx';
import { appBarStyles } from './config.js';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <AppBar
      position="fixed"
      elevation={3}
      sx={{ zIndex: theme.zIndex.drawer + 1, ...appBarStyles }}
    >
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                src={require('../../resources/shipease.png')}
                alt="ShipEase-logo"
                style={{ height: isMobile ? '30px' : '40px' }}
              />
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
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
