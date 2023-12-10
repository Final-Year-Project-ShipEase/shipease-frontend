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

const AddPermissionModal = ({ open, handleClose, onSubmit }) => {
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] =
    useState(false);
  //const { addPermission } = useRBACService();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdateConfirm = () => {
    console.log(formData);
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
          entity="Permission"
          name="Permission"
        />
        <DialogTitle>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <IconButton
              sx={{ p: 1, backgroundColor: '#D1FADF', color: 'green' }}
            >
              <AddIcon />
            </IconButton>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Create Permission
          </Typography>
          <Typography variant="subtitle2">
            Permissions can be given access of a perticular resorce type to the
            Tenant
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                margin="normal"
                label="Permission Name"
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
                onClick={() => {
                  setIsConfirmationDialogOpen(true);
                  //  addPermission(formData.name);
                }}
                color="success"
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

export default AddPermissionModal;
