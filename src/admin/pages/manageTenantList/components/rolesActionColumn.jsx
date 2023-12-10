import { Box, IconButton } from '@mui/material';
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

const RolesActionColumn = ({ value, boxType, setModalOpen }) => {
  const [isLockClicked, setIsLockClicked] = useState(false);
  //const { delRole } = useRBACService();

  const handleLockClick = () => {
    setIsLockClicked(!isLockClicked);
  };

  const handleEdit = () => {
    setModalOpen(true);
  };

  const handleDelete = () => {
    //delRole(value);
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
        <EditNoteIcon style={{ color: '#7E62D7B2' }} onClick={handleEdit} />
      </CustomIconButton>
      <CustomIconButton
        onClick={handleLockClick}
        color={isLockClicked ? '#e196a3' : 'grey'}
      >
        <LockIcon style={{ color: isLockClicked ? '#60B478' : '#7E62D7B2' }} />
      </CustomIconButton>
      <CustomIconButton>
        <RemoveOutlinedIcon
          style={{ color: '#7E62D7B2' }}
          onClick={handleRemove}
        />
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
