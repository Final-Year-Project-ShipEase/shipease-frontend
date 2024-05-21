import React, { useState } from 'react';
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
} from '@mui/material';
import {
  AddCircleOutline as AddIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import ConfirmAdd from '../dialogues/ConfirmAdd.jsx';
//import { useApplicationService } from '../../../../services/applicationService';

const VehicleDetailsModal = ({ open, handleClose, onSubmit }) => {
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] =
    useState(false);
  const theme = useTheme();
  //const { createApplication, creatingApp } = useApplicationService();

  const [formData, setFormData] = useState({
    ID: '',
    type: '',
    regNo: '',
    city: '',
    trackId: '',
    vehicleCompany: '',
    cnic: '',
    incspectionRep: '',
    TrackerNo: '',
    status: false,
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
    try {
      //await createApplication(clientData);
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
          Vehicle Details
        </DialogContentText>
        <Typography variant="subtitle2">
          Following are the Vehicle Details
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
              value={formData.ID}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              margin="normal"
              label="Type"
              name="type"
              value={formData.type}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              margin="normal"
              label="Reg No."
              name="regNo"
              value={formData.regNo}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              margin="normal"
              label="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              margin="normal"
              label="Tracker Id"
              name="Tracker Id"
              value={formData.trackId}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              margin="normal"
              label="Owner Cnic"
              name="Owner Cnic"
              value={formData.cnic}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              margin="normal"
              label="Vehicle Company"
              name="Vehicle Company"
              value={formData.vehicleCompany}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              name="vehicleDocs"
              onChange={handleChange}
              variant="contained"
              sx={{
                backgroundColor: theme.palette.secondary.main,
                color: 'white',
                width: '100%',
                height: '72%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mt: 2,
                ':hover': {
                  backgroundColor: theme,
                },
              }}
              startIcon={<AddIcon />}
            >
              Vehicle Documents
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              margin="normal"
              label="Inspection Report Vendor"
              name="inspectionRepVen"
              value={formData.incspectionRep}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              name="InsepctionRep"
              onChange={handleChange}
              variant="contained"
              sx={{
                backgroundColor: theme.palette.secondary.main,
                color: 'white',
                width: '100%',
                height: '72%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mt: 2,
                ':hover': {
                  backgroundColor: theme,
                },
              }}
              startIcon={<AddIcon />}
            >
              Inspection Report
            </Button>
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
              Approve
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default VehicleDetailsModal;
