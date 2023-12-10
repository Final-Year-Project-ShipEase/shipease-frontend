import React from 'react';
import { useTheme } from '@mui/material/styles';
import { AppBar, Box, Toolbar } from '@mui/material';
import { appBarStyles } from './config.js';
import UserInfo from './userInfo';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

              const Navbar = () => {   
const theme = useTheme();
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
                              paddingLeft: '10px',
                              paddingRight: '10px',
                            }}
                          >
                            <img
                              src={require('../../resources/shipease.png')}
                              alt="ShipEase-logo"
                            />
                          </Box>
                        
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'left', // Aligns the content to the right
                              marginLeft: '640px',
                            }}
                          >
                            <InputBase
                              sx={{
                                border: '1px solid #ccc',
                                borderRadius: '14px',
                                backgroundColor: theme.palette.buttonSidebar.main,
                                paddingLeft: '15px',
                                marginTop: '-3%',
                                width: '350px',
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
                            />
                          </Box>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginTop: '-1%',
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
            