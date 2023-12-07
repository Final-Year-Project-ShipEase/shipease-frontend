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
} from '@mui/material';
import {
  Close as CloseIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';

const ConfirmationDialog = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <IconButton style={{ backgroundColor: 'blue', color: 'white' }}>
              <CheckCircleIcon />
            </IconButton>
            <Box m={2}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Update Application
              </Typography>
              <Typography variant="subtitle2">
                Are you sure you want to update this application?
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
          <Button onClick={onConfirm} color="secondary" variant="contained">
            Confirm
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
