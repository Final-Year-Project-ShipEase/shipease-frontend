import { Box, IconButton, useTheme } from '@mui/material';
import React, { useState } from 'react';
import EditNoteIcon from '@mui/icons-material/EditNote';
import FileCopySharpIcon from '@mui/icons-material/FileCopySharp';
import LockIcon from '@mui/icons-material/Lock';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

const CustomIconButton = ({ children, onClick, color }) => {
  return (
    <IconButton
      onClick={onClick}
      style={{
        width: 32,
        height: 32,
        margin: '0 4px',
      }}
    >
      {children}
    </IconButton>
  );
};

const RolesActionColumn = ({ value, boxType }) => {
  const [isLockClicked, setIsLockClicked] = useState(false);
  //const { delRole } = useRBACService();
  const theme = useTheme();

  const handleLockClick = () => {
    setIsLockClicked(!isLockClicked);
  };

  const handleEdit = () => {
    console.log('edit');
  };

  const handleCopy = () => {
    console.log('copy');
  };

  const handleDelete = () => {
    //delRole(value);
  };

  const handleApprove = () => {
    //appDriver(value);
    console.log(value);
    boxType('approved');
  };

  const handleRemove = () => {
    //remDriver(value);
    console.log(value);
    boxType('removed');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        padding: '4px 8px 8px 6px',
      }}
    >
      <CustomIconButton>
        <FileCopySharpIcon
          style={{ color: theme.palette.actionButton.main }}
          onClick={handleCopy}
        />
      </CustomIconButton>
      <CustomIconButton
        onClick={handleLockClick}
        color={isLockClicked ? '#e196a3' : 'grey'}
      >
        <LockIcon
          style={{
            color: isLockClicked
              ? theme.palette.actionButton.hover
              : theme.palette.actionButton.main,
          }}
        />
      </CustomIconButton>
    </Box>
  );
};

export default RolesActionColumn;
