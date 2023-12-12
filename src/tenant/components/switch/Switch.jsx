import React from 'react';
import { Switch, styled, Typography, Box } from '@mui/material';

const CustomSwitch = styled((props) => (
  <Box
    sx={{
      display: 'flex',
    }}
  >
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
    <Typography
      sx={{
        color: '#454C52',
        fontSize: '14px',
        fontWeight: '500',
        mb: '8px',
        ml: '16px',
      }}
    >
      {props.label}
    </Typography>
  </Box>
))(({ theme }) => ({
  width: 44,
  height: 26,
  padding: 0,

  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(17px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#2963FF',
        border: '2px solid #E9E9EA',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.grey[100],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.7,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#E9E9EA',
    border: '2px solid #E9E9EA',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

export default CustomSwitch;
