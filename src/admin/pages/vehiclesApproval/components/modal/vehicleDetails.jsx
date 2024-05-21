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
} from '@mui/material';
import {
  AddCircleOutline as AddIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import ConfirmAdd from '../dialogues/ConfirmAdd.jsx';
import useVehicleService from '../../../../services/vehicleService.jsx';
import { Lightbox } from 'react-modal-image';

const VehicleDetailsModal = ({
  open,
  handleClose,
  onSubmit,
  tenantId,
  handleApproval,
}) => {
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] =
    useState(false);
  const theme = useTheme();
  const { getVehicle } = useVehicleService();
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [inspectionReport, setInspectionReport] = useState(null);
  const [inspectionReportData, setInspectionReportData] = useState(null);
  const [isInspectionReportOpen, setIsInspectionReportOpen] = useState(false);

  const closeInspectionReportLightbox = () => {
    setIsInspectionReportOpen(false);
  };

  const openInspectionReportLightbox = () => {
    const base64String = btoa(
      String.fromCharCode(...new Uint8Array(inspectionReportData?.data))
    );
    const base64Image = `data:image/png;base64,${base64String}`;
    setInspectionReport(base64Image);
    setIsInspectionReportOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const openLightbox = () => {
    const base64String = btoa(
      String.fromCharCode(...new Uint8Array(imageData?.data))
    );
    const base64Image = `data:image/png;base64,${base64String}`;
    setImage(base64Image);
    setIsOpen(true);
  };

  const [formData, setFormData] = useState({
    ID: '',
    type: '',
    regNo: '',
    city: '',
    vehicleCompany: '',
    cnic: '',
    TrackerNo: '',
    status: false,
    width: '',
    height: '',
    cost: '',
  });

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
    //   trackId: formData.trackId,
    // };
    await handleApproval(tenantId);
    //await createApplication(clientData);
    setIsConfirmationDialogOpen(false);
    // show('Vehicle Approved', 'Success');

    handleClose();
  };

  useEffect(() => {
    const getVehicleDetails = async () => {
      try {
        const vehicle = await getVehicle(tenantId);
        console.log(vehicle);
        setFormData({
          ID: vehicle.id,
          type: vehicle.type,
          regNo: vehicle.regNo,
          city: vehicle.location,
          cnic: vehicle.ownerCnic,
          TrackerNo: vehicle.trackerNo,
          status: vehicle.status,
          width: vehicle.width,
          height: vehicle.height,
          cost: vehicle.cost,
        });
        setImageData(vehicle?.LicenseImage);
        setInspectionReportData(vehicle?.inspectionImage);
        console.log('ImageData', imageData);
      } catch (err) {
        console.log(err);
      }
    };

    if (tenantId) {
      getVehicleDetails();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      {isOpen && imageData ? (
        <Lightbox large={image} onClose={closeLightbox} alt="Vehicle Image" />
      ) : null}
      {isInspectionReportOpen && inspectionReportData ? (
        <Lightbox
          large={inspectionReport}
          onClose={closeInspectionReportLightbox}
          alt="Inspection Report"
        />
      ) : null}
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
              disabled
              margin="normal"
              label="Type"
              name="type"
              value={formData.type}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              disabled
              margin="normal"
              label="Reg No."
              name="regNo"
              value={formData.regNo}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              disabled
              margin="normal"
              label="city"
              name="city"
              value={formData.city}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              disabled
              margin="normal"
              label="Tracker Id"
              name="Tracker Id"
              value={formData.TrackerNo}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              disabled
              margin="normal"
              label="Owner Cnic"
              name="Owner Cnic"
              value={formData.cnic}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              disabled
              margin="normal"
              label="Width"
              name="width"
              value={formData.width}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              disabled
              margin="normal"
              label="Height"
              name="height"
              value={formData.height}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              disabled
              margin="normal"
              label="Cost"
              name="cost"
              value={formData.cost}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Button
              name="vehicleDocs"
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
              onClick={openLightbox}
            >
              Vehicle Documents
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              name="inspectionDocs"
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
              onClick={openInspectionReportLightbox}
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

export default VehicleDetailsModal;
