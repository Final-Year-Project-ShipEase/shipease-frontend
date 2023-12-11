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
      console.log(tenant);
    };
    if (tenantId) fetchTenant();
  }, [tenantId]);

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
    const tenantData = {
      username: formData.username,
      name: formData.name,
      email: formData.email,
      phoneNo: formData.phoneNo,
      status: formData.status,
      password: formData.password,
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
          <IconButton sx={{ p: 1, backgroundColor: '#D1FADF', color: 'green' }}>
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
              label="Password"
              name="password"
              value={formData.password}
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
              color="success"
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
