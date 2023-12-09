import { Box, IconButton } from '@mui/material';
import React, { useState } from 'react';
import EditNoteIcon from '@mui/icons-material/EditNote';
import FileCopySharpIcon from '@mui/icons-material/FileCopySharp';
import LockIcon from '@mui/icons-material/Lock';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';

const CustomIconButton = ({ children, onClick, color }) => {
  return (
    <IconButton
      onClick={onClick}
      style={{
        borderRadius: '50%',
        width: 32,
        height: 32,
        backgroundColor: color || 'grey',
        margin: '0 4px',
      }}
    >
      {children}
    </IconButton>
  );
};

const RolesActionColumn = ({ value }) => {
  const [isLockClicked, setIsLockClicked] = useState(false);
  //const { delRole } = useRBACService();

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

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        padding: '8px 11px 8px 16px',
      }}
    >
      <CustomIconButton>
        <EditNoteIcon style={{ color: '#e8e8e8' }} onClick={handleEdit} />
      </CustomIconButton>
      <CustomIconButton>
        <FileCopySharpIcon style={{ color: '#e8e8e8' }} onClick={handleCopy} />
      </CustomIconButton>
      <CustomIconButton
        onClick={handleLockClick}
        color={isLockClicked ? '#e196a3' : 'grey'}
      >
        <LockIcon style={{ color: isLockClicked ? '#6B1137' : '#e8e8e8' }} />
      </CustomIconButton>
      <CustomIconButton>
        <DeleteForeverSharpIcon
          style={{ color: '#e8e8e8' }}
          onClick={handleDelete}
        />
      </CustomIconButton>
    </Box>
  );
};

export default RolesActionColumn;
