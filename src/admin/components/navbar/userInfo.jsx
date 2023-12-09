import React, { useState } from 'react';
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import image from '../../../icons/image.png';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';


const imageStyles = { width: '35px', height: '35px', borderRadius: '50%' };
const onlineDotStyles = {
  display: 'flex',
  p: '24px 0px 0px 24px',
  width: '10px',
  height: '10px',
  backgroundColor: '#98CE00',
  borderRadius: '50%',
  position: 'absolute',
  bottom: '0',
  right: '0',
  transform: 'translate(20%, 20%)',
};

const UserInfo = () => {

  const [name, setName] = useState('John Doe');
  const [isOnline, setIsOnline] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const isMenuOpen = Boolean(anchorEl);
  const menuId = 'primary-account-menu';
  const UserMenu = ({ anchorEl, onClose }) => {
    return (
      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        id={menuId}
        onClick={onClose}
        keepMounted
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <MenuItem onClick={onClose}>Settings</MenuItem>
        <MenuItem onClick={onClose}>Logout</MenuItem>
      </Menu>
    );
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <IconButton
          size="small"
          sx={{
            display: 'flex',
            backgroundColor: 'white',
            mr: '4px',
          }}
        >
          <NotificationsActiveOutlinedIcon
            sx={{
              color: 'black',
            }}
          />
        </IconButton>
        <IconButton
          size="small"
          sx={{
            display: 'flex',
            backgroundColor: 'white',
            mr: '10px',
          }}
        >
          <DarkModeOutlinedIcon
            sx={{
              color: 'black',
            }}
          />
        </IconButton>
      </Box>
      <Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <Box>
            <IconButton
              size="small"
              sx={{
                padding: 0,
                borderRadius: '50%',
                backgroundColor: '#000000',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <img style={imageStyles} src={image} alt="user-profile" />
              {isOnline && <div style={onlineDotStyles}></div>}
            </IconButton>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          >
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: '16px',
                color: '#000000',
                width: '100%',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              Hi, {name}
            </Typography>
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: '12px',
                color: '#000000',

                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              width: '100%',
              height: '100%',
            }}
          >
            <IconButton
              size="small"
              sx={{
                padding: 0,
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ArrowDropDownOutlinedIcon
                sx={{
                  color: '#000000',
                }}
              />
            </IconButton>
          </Box>
          <UserMenu anchorEl={anchorEl} onClose={handleClose} />
        </Box>
      </Box>
    </>
  );
};

export default UserInfo;
