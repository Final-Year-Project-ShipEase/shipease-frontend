import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import image from '../../../icons/image.png';
import { useTheme } from '@mui/material/styles';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const imageStyles = { width: '40px', height: '40px', borderRadius: '50%' };

const DriverDetail = () => {
  const theme = useTheme();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '20px',
        backgroundColor: theme.palette.background.poolback,
        padding: '10px',
        borderRadius: '12px',
        height: '100%',
      }}
    >
      <Box>
        <IconButton
          size="small"
          sx={{
            padding: 0,
            borderRadius: '50%',
            backgroundColor: theme.palette.background.poolback,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <img style={imageStyles} src={image} alt="user-profile" />
        </IconButton>
      </Box>
      <div
        style={{
          display: 'inline',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: '-2px',
          marginLeft: '-30px',
        }}
      >
        <Typography
          sx={{
            color: theme.palette.buttons.secondary,
            fontSize: '14px',
            fontWeight: 'bold',
          }}
        >
          Muntazer Mehdi
        </Typography>
        <Typography
          sx={{ color: theme.palette.buttons.secondary, fontSize: '13px' }}
        >
          muntazer@gmail.com
        </Typography>
      </div>

      <button
        style={{
          width: '107px',
          height: '36px',
          color: theme.palette.buttons.color,
          backgroundColor: theme.palette.background.poolback,
          fontSize: '14px',
          border: theme.palette.buttons.borderbutton,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 10px',
          paddingLeft: '20px',
        }}
      >
        Details
        <ArrowForwardIosIcon sx={{ fontSize: 'medium' }} />
      </button>
    </div>
  );
};

export default DriverDetail;
