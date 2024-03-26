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
  MenuItem,
} from '@mui/material';
import {
  AddCircleOutline as AddIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import ConfirmAdd from '../dialog/ConfirmAdd.jsx';
import { usePoolRequestService } from '../../../../services/poolRequestServices.jsx';
import { useBookingService } from '../../../../services/bookingServices.jsx';
import { useSnackbar } from '../../../../utils/snackbarContextProvider.jsx';
import { formatTimestamp } from '../../../../utils/timestamp.js';
import { useVehicleService } from '../../../../services/vehicleServices.jsx';

const PoolRequestDetailsModal = ({ open, handleClose, prID }) => {
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] =
    useState(false);
  const theme = useTheme();
  const { getPoolRequest } = usePoolRequestService();
  const [poolRequest, setPoolRequest] = useState({});
  const { show } = useSnackbar();
  const [vehicleId, setVehicleId] = useState('');
  const { getVehicle } = useVehicleService();
  const [vehicle, setVehicle] = useState({});

  useEffect(() => {
    const fetchPRList = async () => {
      await getPoolRequest(prID)
        .then((response) => {
          setPoolRequest(response);
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
          });
        })
        .catch((err) => {
          show(err.message, 'error');
        });
      console.log(bookingList);
    };

    if (open) fetchPRList();
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

  const handleChangeBooking = async (event) => {
    const { value } = event.target;
    const selectedBooking = bookingList.find((booking) => booking.id === value);
    setVehicleId(selectedBooking.vehicle_id);

    setFormData((prevFormData) => ({
      ...prevFormData,
      booking: value,
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSwitchChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked,
    });
  };

  const handleAddConfirm = async () => {
    const {
      id,
      type,
      space,
      date,
      pickup,
      dropoff,
      description,
      price,
      // width,
      // height
    } = formData;
    const width = 85;
    const height = 85;

    try {
      await createPoolRequest({
        booking_id: id,
        types: type[0],
        startDate: date,
        city: pickup,
        destination: dropoff,
        // description,
        price,
        width,
        height,
      });
      handleClose();
      show('Pool Request created successfully', 'success');
    } catch (err) {
      show(err.message, 'error');
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
          Create Pool Request
        </DialogContentText>
        <Typography variant="subtitle2">
          Add the following details to create Pool Request
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2} p={1}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              select
              label="booking"
              name="booking"
              value={formData.booking}
              onChange={handleChangeBooking}
              variant="outlined"
            >
              {bookingList.map((booking) => (
                <MenuItem key={booking.id} value={booking.id}>
                  {booking.pickup} - {booking.dropoff}, Time -{' '}
                  {formatTimestamp(booking.date)}
                </MenuItem>
              ))}
            </TextField>
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
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="space"
              name="space"
              value={formData.space}
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
              onClick={handleClose}
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
              Approve
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default PoolRequestDetailsModal;
