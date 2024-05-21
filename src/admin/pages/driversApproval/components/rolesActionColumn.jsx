import { Box, IconButton, useTheme } from '@mui/material';
import React from 'react';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import useDriverApprovalService from '../../../services/driverApprovalServices';

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

const DriverApprovalActionColumn = ({
  value,
  setModalOpen,
  boxType,
  setDriverId,
}) => {
  //const { delRole } = useRBACService();
  const theme = useTheme();
  const { deleteDriverApproval, approveDriver } =
    useDriverApprovalService();

  const handleEdit = () => {
    setDriverId(value.driver_id);
    setModalOpen(true);
  };

  const handleDelete = () => {
    deleteDriverApproval(value.id);
  };

  const handleApprove = async () => {
    //appDriver(value);
    boxType('approved');
    await approveDriver(value.id);
    handleDelete();
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
        <DeleteForeverSharpIcon
          style={{ color: theme.palette.actionButton.main }}
          onClick={handleDelete}
        />
      </CustomIconButton>
    </Box>
  );
};

export default DriverApprovalActionColumn;
