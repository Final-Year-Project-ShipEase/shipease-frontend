import { Button, useTheme } from '@mui/material';
import React from 'react';
import theme from '../../theme';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const AddModalButton = ({ text, onClick }) => {
  const theme = useTheme();
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        display: 'flex',
        minWidth: theme.typography.pxToRem(145),
        padding: '10px 18px',
        borderRadius: '8px',
        background: ' #2963FF',
        boxShadow:
          '0px 1px 1px 0px rgba(0, 0, 0, 0.12), 0px 0px 0px 1px rgba(103, 110, 118, 0.16), 0px 2px 5px 0px rgba(103, 110, 118, 0.08)',
        color: '#FAFAFA',
        textAlign: 'center',
        fontFamily: 'Barlow',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '140%',
        backgroundColor: theme.palette.buttons.addModal,  
        '&:hover': {
          backgroundColor: theme.palette.buttons.hover,
          color: theme.palette.primary.text,
          boxShadow: 'none',
        },
      }}
      startIcon={<AddCircleOutlineIcon />}
    >
      {text}
    </Button>
  );
};

export default AddModalButton;
