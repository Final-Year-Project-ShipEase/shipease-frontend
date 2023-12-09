import { useTheme } from '@material-ui/core';
import { Button } from '@mui/material';
import React from 'react';

const HeaderButton = ({ text, onClick }) => {
  const theme = useTheme();
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        display: 'flex',
        width: theme.typography.pxToRem(145),
        padding: '10px 18px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        flexShrink: 0,
        backgroundColor: theme.palette.buttons.main,
        color: theme.palette.buttons.text,
        boxShadow: theme.palette.shadows.customButton1,
        borderRadius: 4,
        '&:hover': {
          backgroundColor: theme.palette.primary.customButton1,
          boxShadow: `0 1px 1px 0 rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(103, 110, 118, 0.16), 0 2px 5px 0 rgba(103, 110, 118, 0.08)`,
        },
      }}
    >
      {text}
    </Button>
  );
};

export default HeaderButton;
