import React from 'react';
import { AppBar, Box, Toolbar } from '@mui/material';
import { appBarStyles } from './config.js';
import UserInfo from './userInfo';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

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
                                backgroundColor: 'rgba(126, 98, 215, 0.4)',
                                paddingLeft: '15px',
                                marginTop: '-3%',
                                width: '350px',
                                color: "white"
                              }}
                              placeholder="Search..."
                              inputProps={{ 'aria-label': 'search' }}
                              startAdornment={
                                <SearchIcon
                                  sx={{
                                    color: 'white',
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
            