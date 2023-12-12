import React, { useEffect } from 'react';
import { Button } from '@mui/material';

const CustomButton = ({
  children,
  role,
  isDisabled,
  onClick,
  customStyle,
  ...rest
}) => {
  useEffect(() => {}, [isDisabled]);
  return (
    <Button
      onClick={onClick}
      style={{
        backgroundColor: role === 'primary' ? '#2963FF' : 'white',
        color: isDisabled ? '#E8E8E8' : role === 'primary' ? 'white' : 'black',
        fontSize: '12px',
        height: '40px',
        textTransform: 'none',
        border: `1px #676E7629 solid`,
        borderRadius: '10px',
        '&:hover': {
          backgroundColor: role === 'primary' ? '#003ee6' : '#d9d9d9',
        },
        ...customStyle,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
