import React, { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import {
  AddCircleOutline as AddIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import ConfirmationDialog from '../dialogues/createNew';

const AddResourceModal = ({ open, handleClose, onSubmit }) => {
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] =
    useState(false);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    words: [], // Array to store words
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    let wordsArray = value.split(' '); // Split description into words
    setFormData({
      ...formData,
      [name]: value,
      words: wordsArray,
    });
  };

  const handleUpdateConfirm = async () => {
    const resourceNames = formData.name;
    console.log(resource);
    setIsConfirmationDialogOpen(false);
    handleClose();
  };

  return (
    <Box>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <ConfirmationDialog
          open={isConfirmationDialogOpen}
          onClose={() => setIsConfirmationDialogOpen(false)}
          onConfirm={handleUpdateConfirm}
          entity="Resource"
          name="Resource"
        />
        <DialogTitle>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
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
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Create Resource
          </Typography>
          <Typography variant="subtitle2">
            Name your Resource and specify what Actions are possible on that
            resource.
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                margin="normal"
                label="Resource Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                margin="normal"
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
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
                sx={{
                  color: theme.palette.primary.white,
                  backgroundColor: theme.palette.buttons.approve,
                }}
                variant="contained"
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default AddResourceModal;
