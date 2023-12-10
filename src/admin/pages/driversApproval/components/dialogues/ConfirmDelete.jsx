import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogActions,
  IconButton,
  Typography,
  Button,
  Box,
  Checkbox,
  CircularProgress,
} from '@mui/material';
import {
  Close as CloseIcon,
  AddCircleOutline as AddIcon,
} from '@mui/icons-material';

const ConfirmDelete = ({ open, onClose, onConfirm, loading }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <IconButton style={{ backgroundColor: '#ffcccb', color: 'red' }}>
              <AddIcon />
            </IconButton>
            <Box m={2}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Reject Application
              </Typography>
              <Typography variant="subtitle2">
                Are you sure you want to reject this application?
              </Typography>
            </Box>
          </Box>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center">
          <Checkbox />
          <Typography variant="subtitle2">Don't show again</Typography>
        </Box>
        <Box>
          <Button onClick={onClose} sx={{ color: 'black' }}>
            Close
          </Button>
          <Button onClick={onConfirm} variant="contained">
            {loading ? <CircularProgress /> : 'Reject'}
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDelete;
