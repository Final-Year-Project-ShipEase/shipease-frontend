import React from 'react';
import { AppBar, Box, Toolbar } from '@mui/material';
import { appBarStyles } from './config.js';
import UserInfo from './userInfo';

const Navbar = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
      }}
    >
      <AppBar position="fixed" elevation={3} sx={appBarStyles}>
        <Toolbar>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={require('../../resources/shipease.png')}
                alt="ShipEase-logo"
                style={{
                  height: '35px',
                  width: 'auto',
                  marginRight: '10px',
                }}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <UserInfo />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
