import { Box, IconButton, useTheme } from '@mui/material';
import React, { useState } from 'react';
import EditNoteIcon from '@mui/icons-material/EditNote';
import LockIcon from '@mui/icons-material/Lock';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import useTenantService from '../../../services/tenantService';

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

const TenantActionColumn = ({
  value,
  boxType,
  setModalOpen,
  setLoading,
  setTenantId,
}) => {
  const [isLockClicked, setIsLockClicked] = useState(false);
  const { deleteTenant } = useTenantService();
  const theme = useTheme();

  const handleLockClick = () => {
    setIsLockClicked(!isLockClicked);
  };

  const handleEdit = () => {
    setTenantId(value);
    setModalOpen(true);
  };

  const handleDelete = async () => {
    setLoading(true);
    await deleteTenant(value);
    setLoading(false);
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
        <EditNoteIcon
          style={{ color: theme.palette.actionButton.main }}
          onClick={handleEdit}
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
      <CustomIconButton>
        <RemoveOutlinedIcon
          style={{ color: theme.palette.actionButton.main }}
          onClick={handleRemove}
        />
      </CustomIconButton>
      <CustomIconButton>
        <DeleteForeverSharpIcon
          style={{ color: theme.palette.actionButton.main }}
          onClick={handleDelete}
        />
      </CustomIconButton>
    </Box>
  );
};

export default TenantActionColumn;
