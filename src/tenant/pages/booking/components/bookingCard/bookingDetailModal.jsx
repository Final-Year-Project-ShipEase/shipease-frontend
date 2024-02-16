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
import {useBookingService} from '../../../../../services/bookingServices.jsx';
import { useUserService } from '../../../../../services/userServices.jsx';
import ConfirmAdd from '../dialog/ConfirmAdd.jsx';

const BookingDetailsModal = ({ open, handleClose, onSubmit, booking_id }) => {
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] = useState(false);
    const { updateBooking,getBooking } = useBookingService();
    const {getUser} = useUserService();
    const theme = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    phoneNo: '',
    city: '',
    pickup: '',
    dropoff: '',
    price: '',
    status: '',
    date: '',
  });

  useEffect(() => {
    const fetchData = async () => {
        try {
            const bookingRespone = await getBooking(5);
            const userResponse = await getUser(1);
            setFormData({
                name: userResponse.name,
                phoneNo: userResponse.phoneNo,
                city: userResponse.city,
                pickup: bookingRespone.pickup,
                dropoff: bookingRespone.dropoff,
                price: bookingRespone.total_bill,
                status:bookingRespone.status,
                date: new Date(bookingRespone.date).toISOString().substr(0,10),
            });   
        } catch (error) {
            console.log(error);
        }
    };
    fetchData();
}, [getBooking, getUser]);

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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              Approve
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDetailsModal;
