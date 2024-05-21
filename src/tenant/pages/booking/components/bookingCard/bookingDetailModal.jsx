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
import { useBookingService } from '../../../../../services/bookingServices.jsx';
import { useUserService } from '../../../../../services/userServices.jsx';
import ConfirmAdd from '../dialog/ConfirmAdd.jsx';

const BookingDetailsModal = ({ open, handleClose, onSubmit, booking }) => {
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] =
    useState(false);
  const { updateBooking } = useBookingService();
  const theme = useTheme();
  const [formData, setFormData] = useState({});
  const { getUser } = useUserService();

  useEffect(() => {
    const fetchData = async () => {
      try {
        //change array to object
        const bookings = booking[0];
        setFormData({
          name: bookings.name,
          phoneNo: bookings.phoneNo,
          city: bookings.city,
          pickup: bookings.pickup,
          dropoff: bookings.dropoff,
          price: bookings.total_bill,
          status: bookings.status,
          date: bookings.date,
        });

        const user = await getUser(bookings.user_id);
        setFormData((prev) => ({
          ...prev,
          name: user.name,
          phoneNo: user.phoneNo,
        }));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddConfirm = async () => {
    const setFormData = {
      ...formData,
      status: 'reserved',
    };
    await updateBooking(5, setFormData);
    setIsConfirmationDialogOpen(false);
    handleClose();
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
          Booking Details
        </DialogContentText>
        <Typography variant="subtitle2">
          Following are the Booking Details
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              disabled
              margin="normal"
              label="Name"
              name="name"
              value={formData.name}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              disabled
              margin="normal"
              label="Phone No"
              name="Phone No"
              value={formData.phoneNo}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              disabled
              margin="normal"
              label="Pickup Location"
              name="pickup"
              value={formData.pickup}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              disabled
              margin="normal"
              label="Dropoff Location"
              name="dropoff"
              value={formData.dropoff}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              disabled
              margin="normal"
              label="Price"
              name="price"
              value={formData.price}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              disabled
              margin="normal"
              label="City"
              name="City"
              value={formData.city}
            />
          </Grid>

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
              Payment Confirm
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDetailsModal;
