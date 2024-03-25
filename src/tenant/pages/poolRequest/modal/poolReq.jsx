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
import { useBookingService } from '../../../../services/bookingServices.jsx';
import { useSnackbar } from '../../../../utils/snackbarContextProvider.jsx';

const PoolRequestModal = ({ open, handleClose, onSubmit }) => {
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] =
    useState(false);
  const theme = useTheme();
  const { createPoolRequest } = usePoolRequestService();
  const { getBookingListByTenantId } = useBookingService();
  const [bookingList, setBookingList] = useState([]);
  const tenantId = localStorage.getItem('tenantData')?.data?.id;
  const { show } = useSnackbar();

  useEffect(() => {
    const fetchBookingList = async () => {
      const data = await getBookingListByTenantId(tenantId)
        .then((response) => {
          setBookingList(response);
        })
        .catch((err) => {
          show(err.message, 'error');
        });
    };
    if (open) fetchBookingList();
  }, [open]);

  const [formData, setFormData] = useState({
    type: '',
    space: '',
    date: '',
    pickup: '',
    dropoff: '',
    booking_id: '',
    description: '',
  });

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
    // const clientData = {
    //   clientId: formData.ID,
    //   name: formData.name,
    // };
    // try {
    //   //await createApplication(clientData);
    //   setIsConfirmationDialogOpen(false);
    //   handleClose();
    // } catch (err) {
    //   console.log(err);
    // }
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
          Driver Details
        </DialogContentText>
        <Typography variant="subtitle2">
          Following are the Driver Details
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
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
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="booking_id"
              name="booking_id"
              value={formData.booking_id}
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
          <Grid item xs={12} sm={6}></Grid>
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

export default PoolRequestModal;
