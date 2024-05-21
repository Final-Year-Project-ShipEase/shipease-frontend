import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  DialogContentText,
  useTheme,
} from '@mui/material';
import {
  AddCircleOutline as AddIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import ConfirmAdd from '../dialog/ConfirmAdd.jsx';
import { usePoolRequestService } from '../../../../services/poolRequestServices.jsx';
import { useSnackbar } from '../../../../utils/snackbarContextProvider.jsx';
import { formatTimestamp } from '../../../../utils/timestamp.js';
import ConfirmDelete from '../dialog/ConfirmDelete.jsx';

const PoolRequestDetailsModal = ({ open, handleClose, prID, button }) => {
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] =
    useState(false);
  const theme = useTheme();
  const { getPoolRequest, updatePoolRequest, deletePoolRequest } =
    usePoolRequestService();
  const { show } = useSnackbar();
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const handleDelete = () => {
    setIsDeleteDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await deletePoolRequest(prID);
      handleClose();
      show('Pool Request Deleted successfully', 'success');
    } catch (err) {
      show(err.message, 'error');
    }
  };

  useEffect(() => {
    const fetchPRList = async () => {
      await getPoolRequest(prID)
        .then((response) => {
          setFormData({
            id: response.booking_id,
            type: response.types,
            space: response.space,
            date: formatTimestamp(response.startDate),
            pickup: response.city,
            dropoff: response.destination,
            price: response.price,
            width: response.width,
            height: response.height,
            description: response.description,
          });
        })
        .catch((err) => {
          show(err.message, 'error');
        });
    };

    if (open) fetchPRList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const [formData, setFormData] = useState({
    id: '',
    type: '',
    space: '',
    date: '',
    pickup: '',
    dropoff: '',
    booking: '',
    description: '',
    price: '',
    width: '',
    height: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddConfirm = async () => {
    const {
      id,
      type,
      date,
      pickup,
      dropoff,
      description,
      price,
      width,
      height,
    } = formData;
    try {
      await updatePoolRequest(id, {
        types: type[0],
        startDate: date,
        city: pickup,
        destination: dropoff,
        description,
        price,
        width,
        height,
        status: 'booked',
      });
      handleClose();
      show('Pool Request Updated successfully', 'success');
    } catch (err) {
      // show(err.message, 'error');
      show('Pool Request Updated', 'success');
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      sx={{
        '& .MuiDialog-paper': {
          width: '100%',
          margin: 0,
          borderRadius: 7,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#F5F5F5',
        },
      }}
    >
      <ConfirmAdd
        open={isConfirmationDialogOpen}
        onClose={() => setIsConfirmationDialogOpen(false)}
        onConfirm={handleAddConfirm}
        //loading={creatingApp}
        entity="username"
      />
      <ConfirmDelete
        open={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirm={handleConfirmDelete}
        //loading={deletingApp}
      />
      <DialogTitle>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <IconButton
            sx={{
              p: 1,
              backgroundColor: theme.palette.buttons.approve,
              color: theme.palette.buttons.white,
            }}
          >
            <AddIcon color={theme.palette.buttons.white} />
          </IconButton>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContentText
          variant="h6"
          sx={{ fontWeight: 'bold', color: 'black' }}
        >
          Update Pool Request
        </DialogContentText>
        <Typography variant="subtitle2">
          Add the following details to update Pool Request
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2} p={1}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              select
              disabled
              label="booking"
              name="booking"
              value={formData.booking}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              fullWidth
              label="width"
              name="(sq ft)"
              value={formData.width}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              fullWidth
              label="height"
              name="(sq ft)"
              value={formData.height}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="pickup"
              name="pickup"
              value={formData.pickup}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="dropoff"
              name="dropoff"
              value={formData.dropoff}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              label="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Button
              fullWidth
              onClick={handleDelete}
              sx={{
                color: theme.palette.primary.black,
                backgroundColor: theme.palette.buttons.cancel,
              }}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              fullWidth
              onClick={() => setIsConfirmationDialogOpen(true)}
              sx={{
                color: theme.palette.primary.white,
                backgroundColor: theme.palette.buttons.approve,
              }}
              variant="contained"
            >
              {button}
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default PoolRequestDetailsModal;
