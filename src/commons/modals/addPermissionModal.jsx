import React, { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
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
import { useRBACService } from '../../../../services/rbacService';

const AddRoleModal = ({ open, handleClose, onSubmit }) => {
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] =
    useState(false);
  const { addRole } = useRBACService();

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
          entity="Role"
          name="Role"
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
              }}
            >
              <AddIcon />
            </IconButton>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Create Role
          </Typography>
          <Typography variant="subtitle2">
            Roles can be given access to resorce types, and can be assign to
            users.
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                margin="normal"
                label="Role Name"
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
                  addRole(formData.name);
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

export default AddRoleModal;
