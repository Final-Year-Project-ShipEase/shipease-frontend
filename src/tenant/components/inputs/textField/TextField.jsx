import React from 'react';
import { Input, Typography, Box } from '@mui/material';

const TextField = ({ label, placeholder, customStyle, ...rest }) => {
  return (
    <Box>
      <Typography
        sx={{
          color: '#454C52',
          fontSize: '14px',
          fontWeight: '500',
          mb: '8px',
        }}
      >
        {label}
      </Typography>
      <Input
        sx={{
          width: '361px',
          height: '42px',
          py: '10px',
          px: '14px',
          fontSize: '16px',
          border: '1px solid #9EA5AD',
          borderRadius: '8px',
          boxShadow: '1',
          '&:focus': {
            border: '1px solid black',
          },
          ...customStyle,
        }}
        disableUnderline={true}
        placeholder={placeholder}
        {...rest}
      />
    </Box>
  );
};

export default TextField;
