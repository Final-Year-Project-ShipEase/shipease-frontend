import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Grid,
  Switch,
  FormControlLabel,
  DialogContentText,
  CircularProgress,
} from '@mui/material';
import {
  AddCircleOutline as AddIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import ConfirmAdd from '../dialogues/ConfirmAdd.jsx';
//import { useApplicationService } from '../../../../services/applicationService';

const DriverDetailsModal = ({ open, handleClose, onSubmit }) => {
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] =
    useState(false);
  //const { createApplication, creatingApp } = useApplicationService();

  const [formData, setFormData] = useState({
    ID: '',
    name: '',
    tenant: '',
    roles: '',
    rolesOption: '',
    description: '',
    isDefault: false,
    isSuperRole: false,
    smsTemplate: '',
    emailTemplate: '',
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
    const clientData = {
      clientId: formData.ID,
      name: formData.name,
      description: formData.description,
    };

    try {
      //await createApplication(clientData);
      setIsConfirmationDialogOpen(false);
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <ConfirmAdd
        open={isConfirmationDialogOpen}
        onClose={() => setIsConfirmationDialogOpen(false)}
        onConfirm={handleAddConfirm}
        //loading={creatingApp}
        entity="tenant"
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
          Create Application
        </DialogContentText>
        <Typography variant="subtitle2">Description</Typography>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              margin="normal"
              label="ID"
              name="ID"
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
            <FormControl fullWidth>
              <InputLabel>Tenant</InputLabel>
              <Select
                name="tenant"
                value={formData.tenant}
                onChange={handleChange}
              >
                <MenuItem value="country1">Tenant 1</MenuItem>
                <MenuItem value="country2">Tenant 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              margin="normal"
              label="Roles"
              name="roles"
              value={formData.roles}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Roles</InputLabel>
              <Select
                name="rolesOption"
                value={formData.rolesOption}
                onChange={handleChange}
              >
                <MenuItem value="country1">Role 1</MenuItem>
                <MenuItem value="country2">Role 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              margin="normal"
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </Grid>
          <Box display="flex" ml={2} sx={{ width: '100%' }}>
            <FormControlLabel
              control={
                <Switch
                  checked={formData.isDefault}
                  onChange={handleSwitchChange}
                  name="isDefault"
                />
              }
              label="Default"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={formData.isSuperRole}
                  onChange={handleSwitchChange}
                  name="isSuperRole"
                />
              }
              label="Super Role"
            />
          </Box>
          <Box m={2} sx={{ width: '100%' }}>
            <Typography variant="subtitle1">Multi Factor</Typography>
          </Box>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>SMS Template</InputLabel>
              <Select
                name="smsTemplate"
                value={formData.smsTemplate}
                onChange={handleChange}
              >
                <MenuItem value="country1">Template 1</MenuItem>
                <MenuItem value="country2">Template 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Email Template</InputLabel>
              <Select
                name="emailTemplate"
                value={formData.emailTemplate}
                onChange={handleChange}
              >
                <MenuItem value="country1">Template 1</MenuItem>
                <MenuItem value="country2">Template 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
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
              Save
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default DriverDetailsModal;
