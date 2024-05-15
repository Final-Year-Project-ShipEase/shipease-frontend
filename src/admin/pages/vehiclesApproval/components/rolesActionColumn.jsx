import { Box, IconButton, useTheme } from '@mui/material';
import React, { useState } from 'react';
import EditNoteIcon from '@mui/icons-material/EditNote';
import FileCopySharpIcon from '@mui/icons-material/FileCopySharp';
import LockIcon from '@mui/icons-material/Lock';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import useVehicleApprovalService from '../../../services/vehicleApprovalService';

const CustomIconButton = ({ children, onClick }) => {
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

const VehicleActionColumn = ({
  value,
  boxType,
  setTenantId,
  setModalOpen,
  handleApproval,
}) => {
  const [isLockClicked, setIsLockClicked] = useState(false);
  const theme = useTheme();
  //const { delRole } = useRBACService();
  const { deleteVehicleApproval } = useVehicleApprovalService();

  const handleEdit = () => {
    // setTenantId(value.vehicle_id);
    setModalOpen(true);
  };

  const handleDelete = async () => {
    //delRole(value);
    await deleteVehicleApproval(value);
  };

  const handleApprove = async () => {
    //appDriver(value);
    boxType('approved');
    handleApproval(value);
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
      <CustomIconButton>
        <DoneOutlinedIcon
          style={{ color: theme.palette.actionButton.main }}
          onClick={handleApprove}
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

export default VehicleActionColumn;
