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
  useTheme,
} from '@mui/material';
import {
  Close as CloseIcon,
  AddCircleOutline as AddIcon,
} from '@mui/icons-material';

const ConfirmAdd = ({ open, onClose, onConfirm, loading }) => {
  const theme = useTheme();
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          boxShadow: theme.shadows[5],
          borderRadius: 4,
        },
      }}
    >
      <DialogTitle>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <IconButton
              style={{
                backgroundColor: theme.palette.background.iconBackground,
                color: theme.palette.background.iconColor,
              }}
            >
              <AddIcon />
            </IconButton>
            <Box m={2}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Driver Details
              </Typography>
              <Typography variant="subtitle2">
                Are you sure you want to approve this new driver?
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
          <Button
            onClick={onClose}
            sx={{ color: theme.palette.primary.blackColor }}
          >
            Close
          </Button>
          <Button onClick={onConfirm} color="success" variant="contained">
            {loading ? <CircularProgress /> : 'Confirm'}
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmAdd;
