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
        width: 32,
        height: 32,
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
        padding: '4px 8px 8px 6px',
      }}
    >
      <CustomIconButton>
        <EditNoteIcon style={{ color: '#7E62D7B2' }} onClick={handleEdit} />
      </CustomIconButton>
      <CustomIconButton>
        <FileCopySharpIcon
          style={{ color: '#7E62D7B2' }}
          onClick={handleCopy}
        />
      </CustomIconButton>
      <CustomIconButton
        onClick={handleLockClick}
        color={isLockClicked ? '#e196a3' : 'grey'}
      >
        <LockIcon style={{ color: isLockClicked ? '#6B1137' : '#7E62D7B2' }} />
      </CustomIconButton>
      <CustomIconButton>
        <DeleteForeverSharpIcon
          style={{ color: '#7E62D7B2' }}
          onClick={handleDelete}
        />
      </CustomIconButton>
    </Box>
  );
};

export default RolesActionColumn;
