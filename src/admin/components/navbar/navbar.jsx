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
                              paddingRight: '45px',
                              borderRight: '1px solid #ccc',
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
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <label>
                              <span
                                style={{
                                  color: 'rgba(126, 98, 215, 1)',
                                  fontSize: '1.2rem',
                                  fontWeight: 'bold',
                                  marginLeft: "-140px"
                                }}
                              >
                                Tenant 
                              </span>
                              <span
                                style={{
                                  color: '#565656',
                                  fontSize: '1.2rem',
                                  fontWeight: 'bold',
                                }}
                              >
                                 _Managemant
                              </span>
                            </label>
                          </Box>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'flex-end', // Aligns the content to the right
                            }}
                          >
                            <InputBase
                              sx={{
                                border: '1px solid #ccc',
                                borderRadius: '14px',
                                backgroundColor: 'rgba(126, 98, 215, 0.5)',
                                padding: '2px',
                                paddingLeft: '15px',
                                marginTop: '-2%',
                                width: '300px',
                                marginLeft: 'auto',
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
            