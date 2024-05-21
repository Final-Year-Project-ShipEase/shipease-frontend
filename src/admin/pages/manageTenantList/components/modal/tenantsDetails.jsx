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
  Switch,
  FormControlLabel,
  DialogContentText,
  useTheme,
  Autocomplete,
} from '@mui/material';
import {
  AddCircleOutline as AddIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import ConfirmAdd from '../dialogues/ConfirmAdd.jsx';
import useTenantService from '../../../../services/tenantService.jsx';

const TenantDetailsModal = ({ open, handleClose, onSubmit, tenantId }) => {
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] =
    useState(false);
  const theme = useTheme();
  const { updateTenant, getTenantById } = useTenantService();
  const [formData, setFormData] = useState({
    ID: '',
    name: '',
    username: '',
    password: '',
    email: '',
    phoneNo: '',
    cities: [],
    status: false,
  });

  const [nameError, setNameError] = useState(false);
  const [phoneNoError, setPhoneNoError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    const fetchTenant = async () => {
      const tenant = await getTenantById(tenantId);
      setFormData({
        ID: tenant.id,
        name: tenant.name,
        username: tenant.username,
        password: tenant.password,
        email: tenant.email,
        phoneNo: tenant.phoneNo,
        cities: tenant.cities,
        status: tenant.status,
      });
    };
    if (tenantId) fetchTenant();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    let error = false;

    if (name === 'name' && !/^[A-Za-z ]+$/.test(value)) {
      // Display an error or handle the validation accordingly
      // For now, you can log an error to the console
      console.error(
        'Invalid characters in the name field. Only alphabets are allowed.'
      );
      error = true;
    }

    if (
      name === 'phoneNo' &&
      !/^[0-9]+$/.test(value) &&
      value.length < 11 &&
      value.length > 12
    ) {
      // Display an error or handle the validation accordingly
      // For now, you can log an error to the console
      console.error(
        'Invalid characters in the phoneNo field. Only numbers are allowed.'
      );
      error = true;
    }

    if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      // Display an error or handle the validation accordingly
      // For now, you can log an error to the console
      console.error('Invalid email address.');
      error = true;
    }

    // Set the respective error state based on the field
    if (name === 'name') {
      setNameError(error);
    } else if (name === 'phoneNo') {
      setPhoneNoError(error);
    } else if (name === 'email') {
      setEmailError(error);
    }

    // Update formData
    setFormData({ ...formData, [name]: value });
  };

  const handleSwitchChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked,
    });
  };

  const handleAddConfirm = async () => {
    const tenantData = {
      username: formData.username,
      name: formData.name,
      email: formData.email,
      phoneNo: formData.phoneNo,
      status: formData.status,
      cities: formData.cities,
    };
    try {
      await updateTenant(tenantData, tenantId);
      setIsConfirmationDialogOpen(false);
      handleClose();
    } catch (err) {
      console.log(err);
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
            <AddIcon />
          </IconButton>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContentText
          variant="h6"
          sx={{ fontWeight: 'bold', color: 'black' }}
        >
          Edit Tenant
        </DialogContentText>
        <Typography variant="subtitle2">
          You can edit this information by clicking on the fields
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              margin="normal"
              label="ID"
              name="ID"
              disabled
              value={formData.ID}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              margin="normal"
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={nameError} // Add a state variable to track the error condition
              helperText={
                nameError
                  ? 'Invalid characters. Only alphabets are allowed.'
                  : ''
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              margin="normal"
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              margin="normal"
              label="Phone No"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              error={phoneNoError} // Set error prop based on the phoneNoError state
              helperText={
                phoneNoError
                  ? 'Invalid characters. Only numbers are allowed.'
                  : ''
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={emailError} // Set error prop based on the emailError state
              helperText={emailError ? 'Invalid email address.' : ''}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Autocomplete
              multiple
              id="cities"
              options={['Faisalabad', 'Lahore', 'Islamabad']}
              value={formData.cities}
              onChange={(event, newValue) => {
                setFormData({ ...formData, cities: newValue });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  margin="normal"
                  label="Cities"
                  name="cities"
                />
              )}
            />
          </Grid>
          <Box display="flex" ml={2} sx={{ width: '100%' }}>
            <FormControlLabel
              control={
                <Switch
                  checked={formData.status}
                  onChange={handleSwitchChange}
                  name="status"
                />
              }
              label="Active"
            />
          </Box>
          <Grid item xs={6}>
            <Button fullWidth onClick={handleClose} sx={{ color: 'black' }}>
              Cancel
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              fullWidth
              onClick={() => setIsConfirmationDialogOpen(true)}
              sx={{
                color: theme.palette.primary.white,
                backgroundColor: theme.palette.buttons.approve,
              }}
              variant="contained"
            >
              Update
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default TenantDetailsModal;
