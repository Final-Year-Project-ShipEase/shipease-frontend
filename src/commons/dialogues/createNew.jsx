import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';
import {
  AddCircleOutline as AddIcon,
  Close as CloseIcon,
} from '@mui/icons-material';

const ConfirmationDialog = ({ open, onClose, onConfirm, name }) => {
  const theme = useTheme();
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <IconButton
              style={{
                backgroundColor: theme.palette.buttons.approve,
                color: 'green',
              }}
            >
              <AddIcon />
            </IconButton>
            <Box m={2}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Create new {name}
              </Typography>
              <Typography variant="subtitle2">
                Are you sure you want to create this new {name}?
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
          <Button
            onClick={onConfirm}
            sx={{
              color: theme.palette.primary.white,
              backgroundColor: theme.palette.buttons.approve,
            }}
            variant="contained"
          >
            Confirm
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
